import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
export default function HeroSection() {
  return (
    <>
      <section className="bg-[#F9F8F6] flex flex-col-reverse justify-evenly items-center md:flex-row px-6 gap-4 h-screen">
        <article className=" md:w-1/2 flex flex-col justify-center items-center text-center">
          <h1 className="md:text-4xl text-lg font-bold">
            Halo, Saya Muhammad Ramdani
          </h1>
          <p className="md:text-lg text-md">
            Saya Seorang Junior Web Developer & Fresh Graduate
          </p>
          <button className="border-2 w-30 rounded-lg hover:bg-black/60 bg-black text-white text-lg">
            About Me
          </button>
          <nav className="flex gap-1 pt-2 hover:bg-black/60">
            <IoLogoWhatsapp className="text-3xl text-green-600 bg-white w-10" />
            <FaInstagram className="text-3xl text-pink-600 bg-white w-10" />
            <SiGmail className="text-3xl text-red-600 bg-white w-10" />
          </nav>
        </article>
        <aside className=" md:w-1/2 flex justify-center items-center">
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
