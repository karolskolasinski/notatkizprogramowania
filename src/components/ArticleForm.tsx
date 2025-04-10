import Quill, { Delta } from "quill";
import Editor from "./Editor";
import { Status } from "./Status";
import { Article } from "../types/article.ts";

type Props = {
  article: Article | null;
  setArticle: React.Dispatch<React.SetStateAction<Article | null>>;
  loading: boolean;
  error: string | null;
  quillRef: React.RefObject<Quill | null>;
  onSubmit: () => void;
};

export default function ArticleForm(props: Props) {
  const { article, setArticle, loading, error, quillRef, onSubmit } = props;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="flex flex-col gap-4"
    >
      <div className="flex gap-4 items-center">
        <input
          type="text"
          required
          className="text-3xl font-bold font-sans w-full outline-none"
          placeholder="Tytuł artykułu"
          value={article?.title ?? ""}
          onChange={(e) => setArticle((prev) => ({ ...prev!, title: e.target.value }))}
        />

        <Status loading={loading} error={error} className="font-semibold whitespace-nowrap" />

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
  );
}
