import { useEffect, useRef, useState } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../utils/firebase.ts";
import type { Category } from "../pages/Category.tsx";

type Props = {
  onClose: () => void;
  onSuccess: (category: Category) => void;
};

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}

const AddCategoryForm = ({ onClose, onSuccess }: Props) => {
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");
  const [color, setColor] = useState(getRandomColor());
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const toAdd = { name, icon, color, createdAt: Timestamp.fromDate(new Date()) };
      const doc = await addDoc(collection(db, "categories"), toAdd);
      onSuccess({ id: doc.id, ...toAdd });
    } catch (error) {
      console.error("Error adding category: ", error);
    }

    onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      onCancel={onClose}
      className="top-1/4 mx-auto backdrop:backdrop-blur-[1px] backdrop:backdrop-brightness-90 cursor-default rounded-lg shadow-lg border border-gray-200 w-full md:w-1/2"
    >
      <form onSubmit={handleSubmit} className="p-4 text-base font-normal flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Nowa kategoria</h1>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Nazwa"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-10 border border-gray-500 rounded p-2 flex-1"
            required
          />

          <div className="w-10 h-10">
            <label htmlFor="color">
              <div className="w-full h-full rounded-full" style={{ background: color }} />

              <input
                id="color"
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="opacity-0 w-0 h-0"
              />
            </label>
          </div>
        </div>

        <input
          type="text"
          placeholder="svg URL"
          value={icon}
          onChange={(e) => setIcon(e.target.value)}
          className="h-10 border border-gray-500 rounded p-2 w-full"
          required
        />

        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="relative block w-auto px-6 py-3 overflow-hidden text-base font-semibold text-center text-gray-800 rounded-lg bg-gray-50 hover:text-black hover:bg-white cursor-pointer"
          >
            Anuluj
          </button>

          <button className="relative block w-auto px-6 py-3 overflow-hidden text-base font-semibold text-center text-gray-100 rounded-lg bg-purple-600 hover:bg-purple-700 cursor-pointer">
            Zapisz
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default AddCategoryForm;
