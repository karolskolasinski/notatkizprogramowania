import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../utils/firebase";
import type { Article } from "../types/article.ts";

type Props = {
  categoryId: string;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
};

export function useArticles(props: Props) {
  const { categoryId, setLoading, setError } = props;
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    if (!categoryId) return;

    const fetchArticles = async () => {
      try {
        const ref = collection(db, "articles");
        const q = query(ref, orderBy("createdAt"), where("categoryId", "==", categoryId));
        const snapshot = await getDocs(q);
        const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Article));

        setArticles(docs);
        setError(null);
      } catch (err) {
        console.error("Error fetching articles: ", err);
        setError(err instanceof Error ? err.message : "Błąd");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [categoryId]);

  return articles;
}
