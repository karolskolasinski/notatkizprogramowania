import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase";
import AddCategoryForm from "../components/AddCategoryForm";
import { Loader } from "../components/Loader";
import { Category, useCategories, useSetCategories } from "../context/CategoryContext";

function Home() {
  const categories = useCategories() || [];
  const setCategories = useSetCategories();
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const snapshot = await getDocs(collection(db, "categories"));
        const docs = snapshot.docs
          .map((doc) => ({ id: doc.id, ...doc.data() } as Category))
          .sort((a, b) => a.createdAt.toDate().getTime() - b.createdAt.toDate().getTime());

        setCategories(docs);
      } catch (error) {
        console.error("Error fetching categories: ", error);
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
          {loading && Loader()}

          {!loading && categories.map((c) => (
            <Link
              key={c.id}
              to={`/${c.id}`}
              className="p-4 h-52 rounded-lg cursor-pointer shadow duration-300 hover:shadow-md flex gap-2 items-center justify-center font-logo border border-gray-500 uppercase"
            >
              <img src={c.icon} alt={c.name} className="min-w-12 w-12" />
              {c.name}
            </Link>
          ))}

          <div
            className="h-52 rounded-lg cursor-pointer shadow duration-300 hover:shadow-md flex gap-2 items-center justify-center font-logo border border-dashed border-gray-500 uppercase text-center"
            onClick={() => setShowForm(true)}
          >
            Dodaj kategorię
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
