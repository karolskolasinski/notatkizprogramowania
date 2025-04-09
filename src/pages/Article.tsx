import { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { addDoc, collection, doc, getDoc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../utils/firebase";
import "quill/dist/quill.snow.css";
import Quill from "quill";
import PasswordDialog from "../components/PasswordDialog";
import { useNavigate } from "react-router-dom";
import type { Article } from "../types/article.ts";
import ArticleForm from "../components/ArticleForm.tsx";

const PASS = import.meta.env.VITE_SAVE_PASS;

function Article() {
  const { categoryId, articleId } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [statusMessage, setStatusMessage] = useState("");
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const quillRef = useRef<Quill | null>(null);
  const navigate = useNavigate();
  const timeoutRef = useRef<number | null>(null);

  const delayMessage = useCallback((message: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setStatusMessage(message);
    timeoutRef.current = window.setTimeout(() => {
      setStatusMessage("");
      timeoutRef.current = null;
    }, 3000);
  }, []);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!categoryId || articleId === "new") {
        setLoading(false);
        return;
      }

      try {
        const ref = doc(db, "articles", articleId!);
        const snap = await getDoc(ref);

        if (snap.exists()) {
          const data = snap.data() as Article;
          setTitle(data.title);
          setContent(data.content);
        }
      } catch (err) {
        console.error("Błąd przy pobieraniu artykułu:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [categoryId, articleId]);

  const confirmAndSave = async () => {
    if (!categoryId || !quillRef.current || !title.trim()) {
      delayMessage("Błąd");
      return;
    }

    const content = JSON.stringify(quillRef.current.getContents());
    const data = {
      title,
      content,
      categoryId,
      createdAt: Timestamp.now(),
    };

    try {
      if (articleId && articleId !== "new") {
        await setDoc(doc(db, "articles", articleId), data);
      } else {
        const docRef = await addDoc(collection(db, "articles"), data);
        navigate(`/${categoryId}/${docRef.id}`);
      }
      delayMessage("Zapisano");
    } catch (err) {
      console.error("Błąd przy zapisie artykułu:", err);
      delayMessage("Błąd");
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    (articleId && articleId !== "new") ? setShowPasswordDialog(true) : confirmAndSave();
  };

  const handlePasswordConfirm = (password: string) => {
    setShowPasswordDialog(false);
    password === PASS ? confirmAndSave() : delayMessage("Błąd hasła");
  };

  return (
    <div className="flex flex-col flex-1">
      <div className="w-full py-8 flex-1 max-w-[1200px] mx-auto">
        {loading ? <div>Ładowanie...</div> : (
          <ArticleForm
            handleSave={handleSave}
            title={title}
            setTitle={setTitle}
            quillRef={quillRef}
            content={content}
            statusMessage={statusMessage}
          />
        )}
      </div>

      {showPasswordDialog && (
        <PasswordDialog
          onCancel={() => setShowPasswordDialog(false)}
          onConfirm={handlePasswordConfirm}
        />
      )}
    </div>
  );
}

export default Article;
