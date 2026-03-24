export default function Header() {
  return (
    <header className="flex justify-between px-20 bg-red-200 text-lg">
      <h1>R</h1>
      <nav className="flex gap-4 text-lg">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Project</a>
        <a href="">Contact</a>
      </nav>
    </header>
  );
}
