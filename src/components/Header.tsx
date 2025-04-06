import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-black text-white text-2xl p-4">
      <nav className="max-w-[1200px] mx-auto">
        <Link to="/" className="font-bold">
          notatki
          <span className="text-yellow-400">z</span>
          programowania
        </Link>
      </nav>
    </header>
  );
};

export default Header;
