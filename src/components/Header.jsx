import { useState } from "react";
import { Link } from "react-router-dom";
import fotoDiri from "../assets/Foto_Diri.jpg";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-red-200  text-xl">
      <div className="flex justify-between items-center px-6">
        <img
          className={`${open ? "hidden" : "block"} md:block w-12 h-12 rounded-full`}
          src={fotoDiri}
          alt="foto"
        />

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/project">Project</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* HAMBURGER */}
        <button
          className="ml-auto block text-2xl md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? "X" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <nav
        className={`md:hidden px-6 pb-4 transition-all duration-300 ${
          open ? "block" : "hidden"
        }`}
      >
        {/* tombol X kanan */}
        <div className="flex flex-col gap-4 items-center ">
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link to="/project" onClick={() => setOpen(false)}>
            Project
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
