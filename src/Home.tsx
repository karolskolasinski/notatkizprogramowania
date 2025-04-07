import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import AddCategoryForm from "./components/AddCategoryForm.tsx";

type Category = {
  id: string;
  name: string;
  icon: string;
  color: string;
};

function Home() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      const snapshot = await getDocs(collection(db, "categories"));
      const res = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Category));
      setCategories(res);
    };

    fetchCategories();
  }, []);

  return (
    <div className="flex flex-col flex-1">
      <div className="w-full p-4 flex-1">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((c) => (
            <Link
              key={c.id}
              to={`/${c.id}`}
              className="h-52 rounded-lg cursor-pointer shadow duration-300 hover:shadow-md flex gap-2 items-center justify-center font-bold text-4xl font-logo border border-gray-500 uppercase"
            >
              <img src={c.icon} alt={c.name} className="min-w-12 w-12" />

              {c.name}
            </Link>
          ))}

          <div
            className="h-52 rounded-lg cursor-pointer shadow duration-300 hover:shadow-md flex gap-2 items-center justify-center font-bold text-4xl font-logo border border-dashed border-gray-500 uppercase text-center"
            onClick={() => setShowForm(true)}
          >
            Dodaj kategorię
          </div>

          {showForm && (
            <AddCategoryForm
              onClose={() => setShowForm(false)}
              onSuccess={() => window.location.reload()}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
