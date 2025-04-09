import { Timestamp } from "firebase/firestore";

export type Article = {
  id: string;
  title: string;
  content: string;
  categoryId: string;
  createdAt: Timestamp;
};
