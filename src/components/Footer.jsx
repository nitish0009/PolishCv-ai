import React from "react";
import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
        <p className="mb-2 md:mb-0 text-center md:text-left">
          © {new Date().getFullYear()} <span className="font-semibold">PolishCV AI</span>.
          Built by <span className="text-indigo-600 font-medium">Nitish</span> 💻
        </p>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-indigo-600 hover:underline"
        >
          <Github size={16} />
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
