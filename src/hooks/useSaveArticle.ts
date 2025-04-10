import { addDoc, collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { Article } from "../types/article.ts";
import Quill from "quill";

type Props = {
  article: Article | null;
  articleId: string | undefined;
  categoryId: string | undefined;
  quillRef: React.RefObject<Quill | null>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
};

export function useSaveArticle(props: Props) {
  const { article, articleId, categoryId, quillRef, setError } = props;
  const navigate = useNavigate();
  const confirmAndSave = async () => {
    const title = article?.title ?? "";
    if (!categoryId || !quillRef.current || !title.trim()) {
      setError("Błąd");
      return;
    }
    const content = JSON.stringify(quillRef.current.getContents());
    const data = { title, content, categoryId, createdAt: Timestamp.now() };

    try {
      if (articleId && articleId !== "new") {
        await setDoc(doc(db, "articles", articleId), data);
      } else {
        const docRef = await addDoc(collection(db, "articles"), data);
        navigate(`/${categoryId}/${docRef.id}`);
      }
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Błąd");
    }
  };

  return { confirmAndSave };
}
