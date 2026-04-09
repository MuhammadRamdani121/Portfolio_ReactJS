export default function Footer() {
  return (
    <>
      <footer className="text-center pb-10 mt-20 bg-amber-400 px-6">
        <h1>Footer</h1>
        <section className="flex flex-row justify-around items-center">
          {/* <h1 className="w-1/4">Muhammad Ramdani</h1> */}
          <aside className="flex flex-col w-1/4 gap-2 justify-center items-center">
            <a
              href=""
              className="border-2 border-black w-30 rounded-lg bg-black text-white hover:bg-white hover:text-black"
            >
              Home
            </a>
            <a
              href=""
              className="border-2 border-black w-30 rounded-lg bg-black text-white hover:bg-white hover:text-black"
            >
              About
            </a>
            <a
              href=""
              className="border-2 border-black w-30 rounded-lg bg-black text-white hover:bg-white hover:text-black"
            >
              Project
            </a>
            <a
              href=""
              className="border-2 border-black w-30 rounded-lg bg-black text-white hover:bg-white hover:text-black"
            >
              Contact
            </a>
          </aside>
          <article className="w-1/2">
            © 2026 Muhammad Ramdani, All rights reserved.
          </article>
        </section>
      </footer>
    </>
  );
}
