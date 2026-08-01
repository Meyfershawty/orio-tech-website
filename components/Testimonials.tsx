"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function Testimonials() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="testemunhos"
      className="bg-black py-24 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Cabeçalho */}
        <div className="text-center">

          <span className="text-blue-500 font-bold uppercase tracking-widest">
            {t.testimonials.badge}
          </span>

          <h2 className="mt-4 text-5xl font-extrabold">
            {t.testimonials.title}
          </h2>

          <p className="mt-6 text-slate-400 max-w-3xl mx-auto">
            {t.testimonials.subtitle}
          </p>

        </div>

        {/* Cartões */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {t.testimonials.items.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-3 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="mb-6 text-4xl">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="leading-8 text-slate-300">
                "{item.text}"
              </p>

              <div className="mt-8">

                <h3 className="text-xl font-bold">
                  {item.name}
                </h3>

                <p className="text-slate-500">
                  {item.company}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}