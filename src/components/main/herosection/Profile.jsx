import { IoMdDownload } from "react-icons/io";
export default function Profile() {
  return (
    <>
      <main className="h-1/2 px-6 bg-[#EFE9E3] ">
        <h1 className="text-3xl text-center">Tentang Sayaa</h1>
        <section className="flex flex-col items-center w-full gap-2 md:flex-row  pt-6">
          <article className="md:w-1/2 ">
            <h1 className="text-justify indent-4">
              Saya, Muhammad Ramdani adalah lulusan baru yang penuh semangat dan
              siap untuk membawa energi positif ke dunia profesional. Dengan
              latar belakang pendidikan dalam teknik informatika, saya telah
              mendapatkan pemahaman yang kuat tentang ilmu komputer dan
              keterampilan praktis yang diperlukan untuk berkembang di dunia
              kerja.
            </h1>
          </article>

          <aside className="md:w-1/2 h-full w-full mb-4 rounded-lg bg-[#F9F8F6] md:mx-20 flex flex-col items-center justify-center px-10 ">
            <h1 className="text-justify">Download CV/RESUME</h1>
            <button className="border-2 w-30 rounded-lg hover:bg-black/60 bg-black text-white text-lg">
              Lihat Project
            </button>
            <nav className="flex gap-1 pt-2 ">
              <button
                href=""
                className="w-33 flex flex-row hover:bg-white hover:text-black bg-black text-white items-center justify-center rounded-lg border-2"
              >
                Download CV <IoMdDownload className="text-2xl " />
              </button>
              <button
                href=""
                className="w-42 flex flex-row hover:bg-white hover:text-black bg-black text-white items-center justify-center rounded-lg border-2"
              >
                Download RESUME <IoMdDownload className="text-2xl " />
              </button>
            </nav>
          </aside>
        </section>
      </main>
    </>
  );
}
