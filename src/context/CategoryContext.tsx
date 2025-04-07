import { createContext, ReactNode, useContext, useState } from "react";
import { Timestamp } from "firebase/firestore";

export type Category = {
  id: string;
  name: string;
  icon: string;
  color: string;
  createdAt: Timestamp;
};

const CategoryContext = createContext<Category[] | null>(null);
const CategoryUpdateContext = createContext<(c: Category[]) => void>(() => {});

export function useCategories() {
  return useContext(CategoryContext);
}

export function useSetCategories() {
  return useContext(CategoryUpdateContext);
}

export function CategoryProvider({ children }: { children: ReactNode }) {
  const [categories, setCategories] = useState<Category[]>([]);

  return (
    <CategoryContext.Provider value={categories}>
      <CategoryUpdateContext.Provider value={setCategories}>
        {children}
      </CategoryUpdateContext.Provider>
    </CategoryContext.Provider>
  );
}
