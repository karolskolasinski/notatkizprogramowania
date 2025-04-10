import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../utils/firebase";
import type { Category } from "../types/category.ts";

type Props = {
  categoryId: string;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export function useCategory(props: Props) {
  const { categoryId, loading, setLoading } = props;
  const [category, setCategory] = useState<Category | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const ref = doc(db, "categories", categoryId!);
        const snapshot = await getDoc(ref);

        if (snapshot.exists()) {
          const category = { id: snapshot.id, ...snapshot.data() } as Category;
          setCategory(category);
        }

        setError(null);
      } catch (err) {
        console.error("Error fetching category: ", err);
        setError(err instanceof Error ? err.message : "Błąd");
      } finally {
        setLoading(false);
      }
    };

    if (categoryId) {
      fetchCategory();
    }
  }, [categoryId]);

  return { category, indicatorData: { loading, error } };
}
