import { useEffect, useRef, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

type Props = {
  onClose: () => void;
  onSuccess: () => void;
};

function AddCategoryForm({ onClose, onSuccess }: Props) {
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");
  const [color, setColor] = useState("");
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addDoc(collection(db, "categories"), { name, icon, color });
    onSuccess();
    onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      onCancel={onClose}
      className="top-1/4 mx-auto backdrop:backdrop-blur-[1px] backdrop:backdrop-brightness-90 cursor-default"
    >
      <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow space-y-2">
        <input
          type="text"
          placeholder="Nazwa kategorii"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded p-2 w-full"
          required
        />
        <input
          type="text"
          placeholder="Ikona (emoji)"
          value={icon}
          onChange={(e) => setIcon(e.target.value)}
          className="border rounded p-2 w-full"
          required
        />
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-full h-10"
        />
        <div className="flex justify-between">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Dodaj
          </button>
          <button onClick={onClose} type="button" className="text-gray-500">
            Anuluj
          </button>
        </div>
      </form>
    </dialog>
  );
}

export default AddCategoryForm;
