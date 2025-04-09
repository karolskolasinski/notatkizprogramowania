import { useEffect, useRef, useState } from "react";

type Props = {
  onConfirm: (password: string) => void;
  onCancel: () => void;
};

export default function PasswordDialog({ onConfirm, onCancel }: Props) {
  const [password, setPassword] = useState("");
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirm(password);
  };

  return (
    <dialog
      ref={dialogRef}
      onCancel={onCancel}
      className="top-1/4 mx-auto backdrop:backdrop-blur-[1px] backdrop:backdrop-brightness-90 rounded-lg shadow-lg border border-gray-200 w-full md:w-1/2"
    >
      <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-4">
        <h2 className="text-lg font-semibold">Podaj hasło</h2>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="h-10 border border-gray-500 rounded p-2 w-full"
          required
        />

        <div className="flex justify-end gap-2 font-sans-alt">
          <button
            type="button"
            onClick={onCancel}
            className="relative block w-auto px-6 py-2 overflow-hidden text-base font-semibold text-center text-gray-800 rounded-lg bg-gray-50 hover:text-black hover:bg-white cursor-pointer"
          >
            Anuluj
          </button>

          <button
            type="submit"
            className="relative block w-auto px-6 py-2 overflow-hidden text-base font-semibold text-center text-gray-100 rounded-lg bg-purple-600 hover:bg-purple-700 cursor-pointer"
          >
            Potwierdź
          </button>
        </div>
      </form>
    </dialog>
  );
}
