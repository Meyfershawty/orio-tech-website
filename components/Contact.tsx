"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];
  const [formData, setFormData] = useState({
  from_name: "",
  from_email: "",
  message: "",
});

const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState("");
const [error, setError] = useState("");

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setLoading(true);
  setSuccess("");
  setError("");

  try {
    await emailjs.send(
      "service_qz8ehgk",
      "template_q80q5az",
      {
        from_name: formData.from_name,
        from_email: formData.from_email,
        message: formData.message,
        subject: "Contacto pelo Website",
      },
      "jpv3F0ffFXMQtjcon"
    );

    setSuccess("Mensagem enviada com sucesso!");

    setFormData({
      from_name: "",
      from_email: "",
      message: "",
    });
  } catch (err) {
    setError("Erro ao enviar a mensagem.");
    console.error(err);
  } finally {
    setLoading(false);
  }
};
  return (
    <section
      id="contacto"
      className="bg-black py-24 px-6 text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Cabeçalho */}
        <div className="text-center mb-16">

          <span className="text-blue-500 uppercase tracking-widest font-bold">
            {t.contact.badge}
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            {t.contact.title}
          </h2>

          <p className="mt-4 text-slate-400">
            {t.contact.subtitle}
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Informações */}
          <div>

            <h3 className="text-3xl font-bold mb-6">
              Orion Tech
            </h3>

            <p className="text-slate-400 mb-8">
              {t.contact.companyDescription}
            </p>

            <div className="space-y-6">

              <div>
                <h4 className="font-bold text-blue-500">
                  {t.contact.email}
                </h4>

                <p>oriontech072@gmail.com</p>
              </div>

              <div>
                <h4 className="font-bold text-blue-500">
                  {t.contact.whatsapp}
                </h4>

                <p>+258 84 797 3689</p>
              </div>

              <div>
                <h4 className="font-bold text-blue-500">
                  {t.contact.location}
                </h4>

                <p>Moçambique</p>
              </div>

            </div>

          </div>

          {/* Formulário */}
          <form
  onSubmit={handleSubmit}
  className="bg-slate-900 rounded-2xl p-8 border border-slate-800"
>

            <div className="mb-6">

              <label className="block mb-2">
                {t.contact.form.name}
              </label>

              <input
  type="text"
  name="from_name"
  value={formData.from_name}
  onChange={handleChange}
  placeholder={t.contact.form.placeholderName}
  required
  className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 outline-none focus:border-blue-500"
/>

            </div>

            <div className="mb-6">

              <label className="block mb-2">
                {t.contact.form.email}
              </label>

            <input
  type="email"
  name="from_email"
  value={formData.from_email}
  onChange={handleChange}
  placeholder={t.contact.form.placeholderEmail}
  required
  className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 outline-none focus:border-blue-500"
/>

            </div>

            <div className="mb-6">

              <label className="block mb-2">
                {t.contact.form.message}
              </label>

              <textarea
  rows={6}
  name="message"
  value={formData.message}
  onChange={handleChange}
  placeholder={t.contact.form.placeholderMessage}
  required
  className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 outline-none focus:border-blue-500"
/>

            </div>

            <button
  type="submit"
  disabled={loading}
  className="w-full rounded-xl bg-blue-600 py-4 font-bold transition hover:bg-blue-500 disabled:opacity-60"
>
  {loading ? "A enviar..." : t.contact.form.button}
</button>
{success && (
  <p className="mt-4 text-center text-green-400">
    {success}
  </p>
)}

{error && (
  <p className="mt-4 text-center text-red-400">
    {error}
  </p>
)}

          </form>

        </div>

      </div>
    </section>
  );
}