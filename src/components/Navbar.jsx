import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="flex justify-between item-center fixed z-50 w-full bg-amber-200">
        {/* logo */}
        <h1 className="text-4xl font-bold">adasssss</h1>
        {/* desktop menu */}
        <nav className="hidden md:flex md:items-center md:justify-center gap-10 w-1/3 ">
          <a href="">asd</a>
          <a href="">ss</a>
          <a href="">bbb</a>
          <a href="">ccc</a>
          <a href="">dd</a>
        </nav>

        {/* Button Hamburger */}
        <button
          className="text-4xl px-6 md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? "X" : "☰"}
          {/* {open ? <X size={28} /> : <Menu size={28} />} */}
        </button>

        {/* hamburger menu */}
        {open && (
          <div className="flex flex-row bg-red-300 fixed w-full top-10">
            <nav className="flex flex-col items-center justify-center gap-10 h-auto w-full bg-amber-900">
              <a href="" className="bg-white">
                a
              </a>
              <a href="" className="bg-white">
                b
              </a>
              <a href="">bbb</a>
              <a href="">ccc</a>
              <a href="">dd</a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
