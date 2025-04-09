import Editor from "./Editor.tsx";
import Quill, { Delta } from "quill";

type Props = {
  title: string;
  setTitle: (title: string) => void;
  handleSave: (e: React.FormEvent) => void;
  content: string;
  quillRef: React.RefObject<Quill | null>;
  statusMessage: string;
};

function ArticleForm(props: Props) {
  const { title, setTitle, handleSave, content, quillRef, statusMessage } = props;
  const isErr = statusMessage.startsWith("Błąd");
  const buttonClass = statusMessage
    ? `border-gray-200 ${isErr ? "text-red-500" : "text-green-500"}`
    : "bg-purple-600 hover:bg-purple-700 text-white cursor-pointer";

  return (
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
            className={`px-6 py-2 font-semibold rounded-lg ${buttonClass} whitespace-nowrap border border-transparent`}
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
  );
}

export default ArticleForm;
