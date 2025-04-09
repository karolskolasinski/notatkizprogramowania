import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { addDoc, collection, doc, getDoc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../utils/firebase";
import "quill/dist/quill.snow.css";
import Editor from "../components/Editor";
import Quill, { Delta } from "quill";

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
  const [readOnly, setReadOnly] = useState(false);
  const quillRef = useRef<Quill | null>(null);
  const [statusMessage, setStatusMessage] = useState("");

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

  const handleSave = async () => {
    if (!categoryId || !quillRef.current) {
      setStatusMessage("Nie udało się zapisać artykułu.");
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
        setStatusMessage("Zapisano pomyślnie.");
      } else {
        await addDoc(collection(db, "articles"), data);
        setStatusMessage("Nowy artykuł zapisany.");
      }
    } catch (err) {
      console.error("Błąd przy zapisie artykułu:", err);
      setStatusMessage("Wystąpił błąd przy zapisie.");
    }
  };

  return (
    <div className="flex flex-col flex-1">
      {statusMessage && (
        <div className="mt-2 text-sm text-gray-700">
          {statusMessage}
        </div>
      )}

      <div className="w-full py-8 flex-1 max-w-[1200px] mx-auto">
        {loading ? <div>Ładowanie...</div> : (
          <div className="font-sans-alt">
            <div className="flex gap-4 pb-4">
              <input
                type="text"
                className="text-3xl font-bold font-sans w-full"
                placeholder="Tytuł artykułu"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <button
                className="relative block w-auto px-6 py-3 overflow-hidden text-base font-semibold text-center text-gray-100 rounded-lg bg-purple-600 hover:bg-purple-700 cursor-pointer"
                onClick={handleSave}
              >
                Zapisz
              </button>
            </div>

            <Editor
              ref={quillRef}
              readOnly={readOnly}
              defaultValue={content ? new Delta(JSON.parse(content)) : new Delta()}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Article;
