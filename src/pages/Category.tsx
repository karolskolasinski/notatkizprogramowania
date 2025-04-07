import { Link, useParams } from "react-router-dom";

function Category() {
  const { categoryId } = useParams();

  return (
    <div className="p-4 flex-1">
      <h1 className="text-xl font-bold mb-4">Kategoria: {categoryId}</h1>
      <ul className="list-disc pl-5">
        <li>
          <Link to={`/${categoryId}/arrays`}>Tablice</Link>
        </li>
        <li>
          <Link to={`/${categoryId}/objects`}>Obiekty</Link>
        </li>
      </ul>
    </div>
  );
}

export default Category;
