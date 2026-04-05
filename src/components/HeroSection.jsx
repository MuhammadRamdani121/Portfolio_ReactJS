import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
export default function HeroSection() {
  return (
    <>
      <section className="flex flex-col-reverse justify-evenly items-center md:flex-row px-6 gap-4 h-screen">
        <article className="bg-red-300 md:w-1/2 flex flex-col justify-center items-center">
          <h1 className="md:text-4xl text-lg font-bold">
            Halo, Saya Muhammad Ramdani
          </h1>
          <p className="text-lg">
            Saya Seorang Junior Web Developer & Fresh Graduate
          </p>
          <button className="border-2 bg-black text-white text-lg">
            About Me
          </button>
          <nav className="flex gap-1">
            <IoLogoWhatsapp className="text-3xl text-green-600 bg-white" />
            <FaInstagram className="text-3xl text-pink-600 bg-white" />
          </nav>
        </article>
        <aside className="bg-red-200 md:w-1/2 flex justify-center items-center">
          <img
            className="rounded-full md:w-100 md:h-100 w-75 h-75"
            src="/1.Foto_Profil.jpg"
            alt="HeroSection"
          />
        </aside>
      </section>
    </>
  );
}
