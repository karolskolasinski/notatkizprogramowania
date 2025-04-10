import { useRef, useState } from "react";
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
  const quillRef = useRef<Quill | null>(null);
  const { article, setArticle } = useArticle({ articleId: articleId!, setLoading, setError });
  const { confirmAndSave } = useSaveArticle({ articleId, article, categoryId, quillRef, setError });
  const handlePasswordConfirm = (password: string) => {
    setShowPasswordDialog(false);
    password === PASS ? confirmAndSave() : setError("Błędne hasło");
  };

  return (
    <div className="flex flex-col flex-1">
      <div className="w-full py-8 flex-1 max-w-[1200px] mx-auto font-sans-alt">
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
    </div>
  );
}

export default Article;
