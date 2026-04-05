import { useState } from "react";
import { Link } from "react-router-dom";
import fotoDiri from "../assets/Foto_Diri.jpg";

export default function Header() {
  const [open, setOpen] = useState(false);

  const menus = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Project", path: "/project" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-red-200 text-xl fixed w-full z-50">
      <div className="flex justify-between items-center px-6">
        <img className="w-12 h-12 rounded-full" src={fotoDiri} alt="foto" />

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex gap-6">
          {menus.map((menu) => (
            <Link key={menu.name} to={menu.path}>
              {menu.name}
            </Link>
          ))}
        </nav>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="ml-auto text-2xl md:hidden relative z-40 "
        >
          {open ? "X" : "☰"}
        </button>
      </div>

      {/* 🔥 OVERLAY BLUR */}
      {open && (
        <div
          className="fixed top-12 left-0 right-0 bottom-0 backdrop-blur-sm bg-black/30 z-30"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* MOBILE MENU */}
      <nav
        className={`md:hidden px-6 pb-4 fixed top-0 left-0 w-full bg-red-200 z-50 transition-all duration-300 ${
          open ? "translate-y-12" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col gap-4 items-center">
          {menus.map((menu) => (
            <Link key={menu.name} to={menu.path} onClick={() => setOpen(false)}>
              {menu.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
