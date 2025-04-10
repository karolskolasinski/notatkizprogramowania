import { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { addDoc, collection, doc, getDoc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../utils/firebase";
import "quill/dist/quill.snow.css";
import Quill, { Delta } from "quill";
import PasswordDialog from "../components/PasswordDialog";
import { useNavigate } from "react-router-dom";
import { useArticle } from "../hooks/useArticle.ts";
import Editor from "../components/Editor.tsx";

// const PASS = import.meta.env.VITE_SAVE_PASS;

function Article() {
  const { categoryId, articleId } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const quillRef = useRef<Quill | null>(null);
  // const navigate = useNavigate();
  // const timeoutRef = useRef<number | null>(null);
  const article = useArticle({ articleId: articleId!, setLoading, setError });

  // const delayMessage = useCallback((message: string, delay: number = 3000) => {
  //   if (timeoutRef.current) {
  //     clearTimeout(timeoutRef.current);
  //   }
  //   setStatusMessage(message);
  //   timeoutRef.current = window.setTimeout(() => {
  //     setStatusMessage("");
  //     timeoutRef.current = null;
  //   }, delay);
  // }, []);

  // const confirmAndSave = async () => {
  //   if (!categoryId || !quillRef.current || !title.trim()) {
  //     // delayMessage("Błąd");
  //     return;
  //   }
  //
  //   const content = JSON.stringify(quillRef.current.getContents());
  //   const data = {
  //     title,
  //     content,
  //     categoryId,
  //     createdAt: Timestamp.now(),
  //   };
  //
  //   try {
  //     if (articleId && articleId !== "new") {
  //       await setDoc(doc(db, "articles", articleId), data);
  //     } else {
  //       const docRef = await addDoc(collection(db, "articles"), data);
  //       navigate(`/${categoryId}/${docRef.id}`);
  //     }
  //     // delayMessage("Zapisano");
  //   } catch (err) {
  //     console.error("Błąd przy zapisie artykułu:", err);
  //     // delayMessage("Błąd");
  //   }
  // };

  // const handleSave = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   (articleId && articleId !== "new") ? setShowPasswordDialog(true) : confirmAndSave();
  // };
  //
  // const handlePasswordConfirm = (password: string) => {
  //   setShowPasswordDialog(false);
  //   password === PASS ? confirmAndSave() : delayMessage("Błąd hasła");
  // };

  const buttonClass = /*statusMessage*/ false
    ? `border-gray-200 ${error ? "text-red-500" : "text-green-500"}`
    : "bg-purple-600 hover:bg-purple-700 text-white cursor-pointer";

  return (
    <div className="flex flex-col flex-1">
      <div className="w-full py-8 flex-1 max-w-[1200px] mx-auto">
        <div className="font-sans-alt">
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <input
                type="text"
                required
                className="text-3xl font-bold font-sans w-full outline-none"
                placeholder="Tytuł artykułu"
                value={article?.title ?? ""}
                // onChange={(e) => setTitle(e.target.value)}
              />

              {loading && (
                <div className="font-semibold text-gray-500">
                  Ładowanie...
                </div>
              )}

              {error && (
                <div className="font-semibold text-red-500">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className={`px-6 py-2 font-semibold rounded-lg ${buttonClass} whitespace-nowrap border border-transparent`}
              >
                Zapisz
              </button>
            </div>

            {!loading && (
              <Editor
                ref={quillRef}
                defaultValue={article ? new Delta(JSON.parse(article.content)) : new Delta()}
              />
            )}
          </form>
        </div>
      </div>

      {/*{showPasswordDialog && (*/}
      {/*  <PasswordDialog*/}
      {/*    onCancel={() => setShowPasswordDialog(false)}*/}
      {/*    onConfirm={handlePasswordConfirm}*/}
      {/*  />*/}
      {/*)}*/}
    </div>
  );
}

export default Article;
