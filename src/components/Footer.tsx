import { Logo } from "./Logo.tsx";

const Footer = () => {
  return (
    <footer className="w-full h-72 bg-black text-white text-2xl p-4 ">
      <div className="max-w-7xl mx-auto flex flex-col justify-between h-full">
        <Logo />

        <div className="text-base flex items-center justify-between font-sans-alt">
          <div>
            2022-2025 | Created by:{"  "}
            <a
              href="https://github.com/karolskolasinski"
              className="text-yellow-400 hover:text-yellow-500 duration-300 ease-in-out"
            >
              karolskolasinski
            </a>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/karolskolasinski" title="GitHub">
              <img
                src="/img/icons/github-original.svg"
                alt="github"
                className="min-w-8 hover:opacity-80 duration-300 ease-in-out"
              />
            </a>

            <a href="https://www.linkedin.com/in/karolskolasinski/" title="LinkedIn">
              <img
                src="/img/icons/linkedin-original.svg"
                alt="linkedin"
                className="min-w-8 hover:opacity-80 duration-300 ease-in-out"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
