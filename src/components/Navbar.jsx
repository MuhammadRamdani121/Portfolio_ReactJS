import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="flex justify-between item-center">
        {/* logo */}
        <h1 className="text-4xl font-bold">adasssss</h1>
        {/* desktop menu */}
        <nav className="flex flex-row gap-10">
          <a href="">asd</a>
          <a href="">ss</a>
          <a href="">bbb</a>
          <a href="">ccc</a>
          <a href="">dd</a>
        </nav>

        {/* Button Hamburger */}
        <button onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* hamburger menu */}
        {open && (
          <div>
            <nav>
              <a href="">asd</a>
              <a href="">ss</a>
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
