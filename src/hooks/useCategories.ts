import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../utils/firebase";
import type { Category } from "../types/category.ts";

type Props = {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
};

export function useCategories(props: Props) {
  const { setLoading, setError } = props;
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesCollection = collection(db, "categories");
        const q = query(categoriesCollection, orderBy("createdAt"));
        const snapshot = await getDocs(q);
        const docs = snapshot.docs
          .map((doc) => ({ id: doc.id, ...doc.data() } as Category));

        setCategories(docs);
        setError(null);
      } catch (err) {
        console.error("Error fetching categories: ", err);
        setError(err instanceof Error ? err.message : "Błąd");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const addCategory = (newCategory: Category) => {
    setCategories([...categories, newCategory]);
  };

  return { categories, addCategory };
}
