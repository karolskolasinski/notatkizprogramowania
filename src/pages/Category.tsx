import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../utils/firebase";
import type { Article } from "../types/article.ts";
import { useCategory } from "../hooks/useCategory.ts";
import { FetchArticlesIndicator } from "../components/FetchArticlesIndicator.tsx";

function Category() {
  const { categoryId } = useParams();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const { category, indicatorData } = useCategory({ categoryId: categoryId!, loading, setLoading });

  useEffect(() => {
    if (!categoryId) return;

    const fetchArticles = async () => {
      try {
        const ref = collection(db, "articles");
        const q = query(ref, orderBy("createdAt"), where("categoryId", "==", categoryId));
        const snapshot = await getDocs(q);
        const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Article));

        setArticles(docs);
      } catch (error) {
        console.error("Error fetching articles: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [categoryId]);

  const color = category?.color;
  const style = { "--hover-color": color } as React.CSSProperties;
  const className =
    "relative cursor-pointer border rounded-[2%_6%_5%_4%_/_1%_1%_2%_4%] border-gray-500 text-center p-4 hover:border-[color:var(--hover-color)] font-sans-alt " +
    "before:content-[''] before:w-full before:h-full before:absolute before:border-l-24 before:left-0 before:top-0 before:border-[color:var(--hover-color)] " +
    "after:content-[''] after:h-full after:absolute after:border after:block after:left-1/2 after:top-1/2 after:w-full after:-translate-x-1/2 after:-translate-y-1/2 after:scale-[1.015] after:rotate-[.5deg] after:rounded-[1%_1%_2%_4%_/_2%_6%_5%_4%] hover:after:border-[color:var(--hover-color)]";

  return (
    <div className="flex flex-col flex-1">
      <div className="w-full p-4 flex-1">
        <h1 className="max-w-[1200px] mx-auto text-4xl font-bold mb-4">{category?.name}</h1>

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-bold">
          <FetchArticlesIndicator indicatorData={indicatorData} />

          {articles.map((a) => (
            <Link
              key={a.id}
              to={`${a.id}`}
              data-color={color}
              className={className}
              style={style}
            >
              {a.title}
            </Link>
          ))}

          <Link to="new" className={`${className} border-dotted after:border-dashed`} style={style}>
            Nowy artykuł
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Category;
