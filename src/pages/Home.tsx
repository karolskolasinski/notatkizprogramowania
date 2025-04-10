import { useState } from "react";
import { Link } from "react-router-dom";
import AddCategoryForm from "../components/AddCategoryForm.tsx";
import { useCategories } from "../hooks/useCategories.ts";
import { Status } from "../components/Status.tsx";

function Home() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { categories, addCategory } = useCategories({ setLoading, setError });
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col flex-1">
      <div className="w-full p-4 flex-1">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-3xl md:text-4xl font-bold">
          <Status
            loading={loading}
            error={error}
            className="h-52 rounded-lg shadow duration-300 hover:shadow-md flex items-center justify-center uppercase text-center border border-gray-200"
          />

          {categories.map((c) => (
            <Link
              key={c.id}
              to={c.id}
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
                addCategory(newCategory);
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
