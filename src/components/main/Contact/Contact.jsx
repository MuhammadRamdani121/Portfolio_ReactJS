import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_eecu6hs",
        "template_uwsqwmh",
        form.current,
        "N0fI9fZqZ05hH6JqX",
      )
      .then(
        () => {
          alert("Pesan berhasil dikirim!");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          alert("Gagal mengirim!");
          console.log(error);
          setLoading(false);
        },
      );
  };

  return (
    <main className="mt-10 ">
      <h1 className="text-xl font-bold text-center">Hubungi Saya</h1>
      <section className="flex justify-center items-center  ">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-3 w-full max-w-xl md:max-w-3xl p-5 shadow-lg rounded-xl"
        >
          <input name="nama" placeholder="Nama" className="border p-2" />
          <input name="email" placeholder="Email" className="border p-2" />
          <textarea name="pesan" placeholder="Pesan" className="border p-2" />

          <button
            disabled={loading}
            className={`p-2 rounded text-white ${
              loading ? "bg-gray-400" : "bg-blue-500"
            }`}
          >
            {loading ? "Mengirim..." : "Kirim"}
          </button>
        </form>
      </section>
    </main>
  );
}
