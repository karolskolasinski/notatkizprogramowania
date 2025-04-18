import Quill, { Delta } from "quill";
import Editor from "./Editor";
import { Status } from "./Status";
import { Article } from "../types/article.ts";
import { useState } from "react";

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
  const [readOnly, setReadOnly] = useState(true);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="flex flex-col gap-4 bg-white rounded-lg py-4 px-2 md:p-8 z-20 relative"
    >
      <div className="flex gap-4 items-center">
        <input
          type="text"
          required
          className="text-3xl font-bold font-sans outline-none w-full"
          placeholder="Tytuł artykułu"
          disabled={readOnly}
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

      <div className="flex gap-2 items-center">
        <label>
          {readOnly ? <Icon name="pen" /> : <Icon name="draw" />}

          <input
            type="checkbox"
            hidden
            checked={readOnly}
            onChange={() => setReadOnly(!readOnly)}
          />
        </label>

        {article?.createdAt && new Date(article.createdAt.seconds * 1000).toLocaleString("pl-PL", {
          dateStyle: "long",
          timeStyle: "short",
        })}
      </div>

      {!loading && (
        <Editor
          ref={quillRef}
          defaultValue={new Delta(article?.content && JSON.parse(article.content))}
          readOnly={readOnly}
        />
      )}
    </form>
  );

  function Icon({ name }: { name: string }) {
    const isPen = name === "pen";
    return (
      <img
        src={isPen ? "/img/icons/pen.svg" : "/img/icons/draw.svg"}
        alt={isPen ? "edit mode" : "read only"}
        title={isPen ? "edit mode" : "read only"}
        className="min-w-7 w-7 hover:bg-gray-100 duration-100 ease-in-out px-[5px] py-[3px] rounded-lg cursor-pointer"
      />
    );
  }
}
