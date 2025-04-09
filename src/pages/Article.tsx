import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { addDoc, collection, doc, getDoc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../utils/firebase";
import "quill/dist/quill.snow.css";
import Editor from "../components/Editor";
import Quill, { Delta } from "quill";
import PasswordDialog from "../components/PasswordDialog";
import { useNavigate } from "react-router-dom";

export type Article = {
  id: string;
  title: string;
  content: string;
  categoryId: string;
  createdAt: Timestamp;
};

function Article() {
  const { categoryId, articleId } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [statusMessage, setStatusMessage] = useState("");
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const quillRef = useRef<Quill | null>(null);
  const navigate = useNavigate();

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
      setStatusMessage("Błąd");
      setTimeout(() => {
        setStatusMessage("");
      }, 3000);
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
      setStatusMessage("Zapisano");
    } catch (err) {
      console.error("Błąd przy zapisie artykułu:", err);
      setStatusMessage("Błąd");
    } finally {
      setTimeout(() => {
        setStatusMessage("");
      }, 3000);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      setStatusMessage("Tytuł jest wymagany");
      setTimeout(() => {
        setStatusMessage("");
      }, 3000);
      return;
    }

    if (articleId && articleId !== "new") {
      setShowPasswordDialog(true);
    } else {
      confirmAndSave();
    }
  };

  const handlePasswordConfirm = (password: string) => {
    setShowPasswordDialog(false);
    if (password === import.meta.env.VITE_SAVE_PASS) {
      confirmAndSave();
    } else {
      setStatusMessage("Błąd");
      setTimeout(() => {
        setStatusMessage("");
      }, 3000);
    }
  };

  const handlePasswordCancel = () => {
    setShowPasswordDialog(false);
  };

  const buttonClass = statusMessage.length
    ? "bg-gray-100 text-green-500"
    : "bg-purple-600 hover:bg-purple-700 text-white cursor-pointer";

  return (
    <div className="flex flex-col flex-1">
      <div className="w-full py-8 flex-1 max-w-[1200px] mx-auto">
        {loading ? <div>Ładowanie...</div> : (
          <div className="font-sans-alt">
            <form onSubmit={handleSave} className="flex flex-col gap-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  required
                  className="text-3xl font-bold font-sans w-full outline-none"
                  placeholder="Tytuł artykułu"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />

                <button
                  type="submit"
                  disabled={statusMessage.length > 0}
                  className={`px-6 py-2 font-semibold rounded-lg ${buttonClass}`}
                >
                  {statusMessage.length ? statusMessage : "Zapisz"}
                </button>
              </div>

              <Editor
                ref={quillRef}
                defaultValue={content ? new Delta(JSON.parse(content)) : new Delta()}
              />
            </form>
          </div>
        )}
      </div>

      {showPasswordDialog && (
        <PasswordDialog
          onCancel={handlePasswordCancel}
          onConfirm={handlePasswordConfirm}
        />
      )}
    </div>
  );
}

export default Article;
