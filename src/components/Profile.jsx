import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
export default function Profile() {
  return (
    <>
      <main className="h-1/2 px-6">
        <h1 className="text-3xl text-center">Tentang Saya</h1>
        <section className="flex flex-col items-center w-full gap-2 md:flex-row">
          <article className="md:w-1/2 bg-red-300">
            <h1 className="text-justify indent-4">
              Saya, Muhammad Ramdani adalah lulusan baru yang penuh semangat dan
              siap untuk membawa energi positif ke dunia profesional. Dengan
              latar belakang pendidikan dalam teknik informatika, saya telah
              mendapatkan pemahaman yang kuat tentang ilmu komputer dan
              keterampilan praktis yang diperlukan untuk berkembang di dunia
              kerja.
            </h1>
          </article>

          <aside className="md:w-1/2 bg-red-100 md:px-20 flex flex-col items-center justify-center px-10">
            <h1 className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste vero
              natus facere, nobis iusto quo molestiae quia quam inventore hic
              est assumenda similique labore debitis consequuntur amet, eligendi
              soluta quibusdam.
            </h1>
            <button className="border-2 w-30 rounded-lg hover:bg-black/60 bg-black text-white text-lg">
              Lihat Project
            </button>
            <nav className="flex gap-1 pt-2 hover:bg-black/60">
              <IoLogoWhatsapp className="text-3xl text-green-600 bg-white w-10" />
              <FaInstagram className="text-3xl text-pink-600 bg-white w-10" />
              <SiGmail className="text-3xl text-red-600 bg-white w-10" />
            </nav>
          </aside>
        </section>
      </main>
    </>
  );
}
