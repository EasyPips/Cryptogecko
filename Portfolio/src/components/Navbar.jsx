import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center p-6 border-b border-gray-800">
      <h1 className="text-2xl font-bold text-emerald-400">Emmanuel.</h1>
      <nav className="space-x-6 hidden md:block">
        <Link to="/" className="hover:text-emerald-400">
          Home
        </Link>
        <Link to="/projects" className="hover:text-emerald-400">
          Featured projects
        </Link>
        <Link to="/about" className="hover:text-emerald-400">
          About me
        </Link>
        <Link to="/contact"  className="hover:text-emerald-400">
          Contact me
        </Link>
      </nav>
      <button className="bg-emerald-400 text-black px-4 py-2 rounded font-semibold">
        My Resume
      </button>
    </header>
  );
};

export default Navbar;
