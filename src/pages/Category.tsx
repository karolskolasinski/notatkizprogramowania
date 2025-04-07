import { useParams } from "react-router-dom";
import { useCategories } from "../context/CategoryContext.tsx";

function Category() {
  const { categoryId } = useParams();
  const categories = useCategories();
  const categoryName = categories?.find((c) => c.id === categoryId)?.name;

  return (
    <div className="flex flex-col flex-1">
      <div className="w-full p-4 flex-1">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-3xl md:text-4xl font-bold">
          <h1 className="text-xl font-bold mb-4">{categoryName}</h1>
        </div>
      </div>
    </div>
  );
}

export default Category;
