import { useState } from "react";
import { Link } from "react-router-dom";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "./firebase"; // konfiguracja Firebase

type Category = {
  id: string;
  name: string;
  icon: string;
};

import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

function Home() {
  const [categories, setCategories] = useState<Category[]>([{ id: "123", name: "JS", icon: "js" }]);

  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     const snapshot = await getDocs(collection(db, "categories"));
  //     const cats = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Category));
  //     setCategories(cats);
  //   };
  //   fetchCategories();
  // }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="w-full p-4 flex-1">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/${cat.id}`}
              className="bg-blue-200 p-4 rounded hover:bg-blue-300 text-center"
            >
              {cat.name}
            </Link>
          ))}
          <div
            className="bg-green-200 p-4 rounded hover:bg-green-300 text-center cursor-pointer"
            onClick={() => alert("Dodaj kategorię")}
          >
            ➕
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
