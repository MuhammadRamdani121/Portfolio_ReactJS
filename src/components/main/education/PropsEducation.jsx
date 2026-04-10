import ImgKuliah from "../../../assets/kuliah.png";
import ImgSmk from "../../../assets/smk.png";
import ImgSmp from "../../../assets/smp.png";
export default function PropsEducation() {
  return (
    <>
      <main className="h-screen w-full ">
        <h1 className="text-center text-2xl">Pendidikan</h1>
        <article className="flex flex-col items-center h-auto text-center">
          <HeaderEducation
            nama="Universitas Pamulang"
            studi="Program Studi Teknik Informatika"
            tahun="2020-2024"
            img={ImgKuliah}
          />
          <HeaderEducation
            nama="SMK Letris Indonesia 2"
            studi="Rekayasa Perangkat Lunak (RPL)"
            tahun="2017-2020"
            img={ImgSmk}
            reverse
          />
          <HeaderEducation
            nama="SMPI AT-Taqwa"
            studi="Pendidikan Menengah Pertama (SMP)"
            tahun="2014-2017"
            img={ImgSmp}
          />
        </article>
      </main>
    </>
  );
}

export function HeaderEducation(props) {
  return (
    <>
      <section
        className={`flex ${props.reverse ? "flex-row-reverse" : ""} justify-center h-full w-full relative`}
      >
        <aside
          className={`w-1/2 flex items-center justify-center pb-10 ${
            props.reverse ? "border-l-2" : "border-r-2"
          }`}
        >
          <img className="w-38 h-38" src={props.img} alt="" />
        </aside>

        <h1 className="absolute h-4 w-4 border-2 rounded-xl bg-white top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2"></h1>

        <nav
          className={`w-1/2 flex flex-col justify-center items-center ${
            props.reverse ? "border-r-2" : "border-l-2"
          }`}
        >
          <h1>{props.nama}</h1>
          <h2>{props.studi}</h2>
          <p>{props.tahun}</p>
        </nav>
      </section>
    </>
  );
}
