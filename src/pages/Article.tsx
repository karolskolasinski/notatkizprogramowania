import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "quill/dist/quill.snow.css";
import Quill from "quill";
import PasswordDialog from "../components/PasswordDialog";
import { useArticle } from "../hooks/useArticle.ts";
import { useSaveArticle } from "../hooks/useSaveArticle.ts";
import ArticleForm from "../components/ArticleForm.tsx";

const PASS = import.meta.env.VITE_SAVE_PASS;

function Article() {
  const { categoryId, articleId } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [randomImage, setRandomImage] = useState("");
  const quillRef = useRef<Quill | null>(null);
  const { article, setArticle } = useArticle({ articleId: articleId!, setLoading, setError });
  const { confirmAndSave } = useSaveArticle({ articleId, article, categoryId, quillRef, setError });

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * 13) + 1;
    const formattedNum = randomNum < 10 ? `0${randomNum}` : `${randomNum}`;

    try {
      import(`../img/cover/${formattedNum}.jpg`).then((module) => setRandomImage(module.default));
    } catch (err) {
      console.error("Nie udało się załadować obrazka:", err);
    }
  }, []);

  const handlePasswordConfirm = (password: string) => {
    setShowPasswordDialog(false);
    password === PASS ? confirmAndSave() : setError("Błędne hasło");
  };

  return (
    <>
      <div className="w-full md:h-[40rem] absolute top-16 z-10">
        {randomImage && (
          <img
            src={randomImage}
            alt="cover"
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <article className="flex flex-col flex-1 bg-gray-100">
        <div className="w-full py-8 px-1 md:px-4 xl:px-0 flex-1 max-w-7xl mx-auto font-sans-alt">
          <ArticleForm
            article={article}
            setArticle={setArticle}
            loading={loading}
            error={error}
            quillRef={quillRef}
            onSubmit={() => setShowPasswordDialog(true)}
          />
        </div>

        {showPasswordDialog && (
          <PasswordDialog
            onCancel={() => setShowPasswordDialog(false)}
            onConfirm={handlePasswordConfirm}
          />
        )}
      </article>
    </>
  );
}

export default Article;
