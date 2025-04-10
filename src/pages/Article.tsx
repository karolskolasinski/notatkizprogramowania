import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { addDoc, collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../utils/firebase";
import "quill/dist/quill.snow.css";
import Quill, { Delta } from "quill";
import PasswordDialog from "../components/PasswordDialog";
import { useNavigate } from "react-router-dom";
import { useArticle } from "../hooks/useArticle.ts";
import Editor from "../components/Editor.tsx";
import { Status } from "../components/Status.tsx";

const PASS = import.meta.env.VITE_SAVE_PASS;

function Article() {
  const { categoryId, articleId } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);

  const quillRef = useRef<Quill | null>(null);
  const navigate = useNavigate();
  const { article, setArticle } = useArticle({ articleId: articleId!, setLoading, setError });

  const confirmAndSave = async () => {
    const title = article?.title ?? "";
    if (!categoryId || !quillRef.current || !title.trim()) {
      setError("Błąd");
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
      setError(null);
    } catch (err) {
      console.error("Błąd przy zapisie artykułu:", err);
      setError(err instanceof Error ? err.message : "Błąd");
    }
  };

  const handlePasswordConfirm = (password: string) => {
    setShowPasswordDialog(false);
    password === PASS ? confirmAndSave() : setError("Błędne hasło");
  };

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPasswordDialog(true);
  };

  return (
    <div className="flex flex-col flex-1">
      <div className="w-full py-8 flex-1 max-w-[1200px] mx-auto">
        <div className="font-sans-alt">
          <form onSubmit={handleOnSubmit} className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <input
                type="text"
                required
                className="text-3xl font-bold font-sans w-full outline-none"
                placeholder="Tytuł artykułu"
                value={article?.title ?? ""}
                onChange={(e) => setArticle((prev) => ({ ...prev!, title: e.target.value }))}
              />

              <Status
                loading={loading}
                error={error}
                className="font-semibold whitespace-nowrap"
              />

              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 font-semibold rounded-lg bg-purple-600 hover:bg-purple-700 text-white cursor-pointer whitespace-nowrap border border-transparent"
              >
                Zapisz
              </button>
            </div>

            {!loading && (
              <Editor
                ref={quillRef}
                defaultValue={new Delta(article?.content && JSON.parse(article.content))}
              />
            )}
          </form>
        </div>
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
