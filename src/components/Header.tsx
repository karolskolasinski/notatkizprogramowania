import { Logo } from "./Logo.tsx";

const Header = () => {
  return (
    <header className="w-full bg-black text-white text-2xl p-4">
      <nav className="max-w-[1200px] mx-auto">
        <Logo />
      </nav>
    </header>
  );
};

export default Header;
