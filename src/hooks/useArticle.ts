import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../utils/firebase";
import type { Article } from "../types/article.ts";

type Props = {
  articleId: string;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
};

export function useArticle(props: Props) {
  const { articleId, setLoading, setError } = props;
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!articleId || articleId === "new") {
        setLoading(false);
        return;
      }

      try {
        const ref = doc(db, "articles", articleId!);
        const snap = await getDoc(ref);

        if (snap.exists()) {
          const data = snap.data() as Article;
          // setTitle(data.title);
          // setContent(data.content);
          setArticle(data);
        }

        setError(null);
      } catch (err) {
        console.error("Błąd przy pobieraniu artykułu:", err);
        setError(err instanceof Error ? err.message : "Błąd");
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [articleId]);

  return article;
}
