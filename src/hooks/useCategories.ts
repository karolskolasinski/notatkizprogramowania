import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../utils/firebase";
import type { Category } from "../types/category.ts";

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  return { categories, indicatorData: { loading, error }, addCategory };
}
