import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../utils/firebase";
import AddCategoryForm from "../components/AddCategoryForm";
import { Loader } from "../components/Loader";
import type { Category } from "./Category.tsx";

function Home() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesCollection = collection(db, "categories");
        const q = query(categoriesCollection, orderBy("createdAt"));
        const snapshot = await getDocs(q);
        const docs = snapshot.docs
          .map((doc) => ({ id: doc.id, ...doc.data() } as Category));

        setCategories(docs);
      } catch (err) {
        console.error("Error fetching categories: ", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="flex flex-col flex-1">
      <div className="w-full p-4 flex-1">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-3xl md:text-4xl font-bold">
          {loading ? Loader() : categories.map((c) => (
            <Link
              key={c.id}
              to={`/${c.id}`}
              className="p-4 h-52 rounded cursor-pointer shadow duration-300 hover:shadow-md flex gap-2 items-center justify-center border border-gray-500 uppercase"
            >
              <img src={c.icon} alt={c.name} className="min-w-12 w-12" />
              {c.name}
            </Link>
          ))}

          <div
            className="h-52 rounded cursor-pointer shadow duration-300 hover:shadow-md flex gap-2 items-center justify-center border border-dashed border-gray-500 uppercase text-center"
            onClick={() => setShowForm(true)}
          >
            Dodaj
          </div>

          {showForm && (
            <AddCategoryForm
              onClose={() => setShowForm(false)}
              onSuccess={(newCategory) => {
                setCategories([...categories, newCategory]);
                setShowForm(false);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
