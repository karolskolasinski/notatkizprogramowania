import { Timestamp } from "firebase/firestore";

export type Category = {
  id: string;
  name: string;
  icon: string;
  color: string;
  createdAt: Timestamp;
};
