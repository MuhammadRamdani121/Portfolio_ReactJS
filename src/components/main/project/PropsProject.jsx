import ImgKuliah from "../../../assets/kuliah.png";
export default function PropsProject() {
  return (
    <>
      <main className="bg-[#D9CFC7] ">
        <h1 className="text-2xl text-center">Project</h1>
        <section className="grid md:grid-cols-2 grid-cols-1 gap-4 pt-5 bg-[#F9F8F6] ">
          <Project
            nama="Nama Project"
            tahun="2020"
            isi="isinya"
            img={ImgKuliah}
          />
          <Project
            nama="Nama Project"
            tahun="2020"
            isi="isinya"
            img={ImgKuliah}
          />
          <Project
            nama="Nama Project"
            tahun="2020"
            isi="isinya"
            img={ImgKuliah}
          />
          <Project
            nama="Nama Project"
            tahun="2020"
            isi="isinya"
            img={ImgKuliah}
          />
        </section>
      </main>
    </>
  );
}

export function Project(props) {
  return (
    <>
      <section className="relative border-2 mt-2 mx-6 bg-[#EFE9E3]">
        <p className="absolute text-lg z-30 bg-red-400 -top-3.5 right-3 text-center w-auto px-4 rounded-lg">
          {props.tahun}
        </p>
        <aside className=" flex justify-center">
          <img
            className="flex items-center justify-center "
            src={props.img}
            alt=""
          />
        </aside>

        <nav className="text-center">
          <h1>{props.nama}</h1>
          <p>{props.isi}</p>
        </nav>
        <article className=" flex items-center justify-end my-4 px-4">
          <button className="bg-black text-white w-40 h-10 border-2 rounded-2xl hover:bg-white hover:text-black">
            Lihat Selengkapnya
          </button>
        </article>
      </section>
    </>
  );
}
