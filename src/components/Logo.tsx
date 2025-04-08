import { Link } from "react-router-dom";

export const Logo = () => (
  <Link to="/" className="font-bold w-fit">
    notatki
    <span className="text-yellow-400">z</span>
    programowania
  </Link>
);
