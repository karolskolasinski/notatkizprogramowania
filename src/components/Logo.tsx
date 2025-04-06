import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link to="/" className="font-bold font-logo w-fit">
      notatki
      <span className="text-yellow-400">z</span>
      programowania
    </Link>
  );
}
