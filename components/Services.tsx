"use client";

import FadeIn from "@/components/animations/FadeIn";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function Services() {
  const { language } = useLanguage();
  const t = translations[language];

  const icons = ["🌐", "🤖", "📱", "☁️", "🛡️", "💡"];

  return (
    <section
  id="servicos"
  className="bg-black py-24 px-6 text-white"
>
  <FadeIn>
    <div className="max-w-7xl mx-auto">

        {/* Título */}
        <div className="text-center">

          <span className="text-blue-500 font-bold uppercase tracking-widest">
            {t.services.badge}
          </span>

          <h2 className="mt-4 text-5xl font-extrabold">
            {t.services.title}
          </h2>

          <p className="mt-6 text-slate-400 max-w-3xl mx-auto">
            {t.services.subtitle}
          </p>

        </div>

        {/* Cards */}
        <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">

          {t.services.items.map((service, index) => (

            <FadeIn delay={index * 0.15}>
  <div
    key={service.title}
    className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-3 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20"
  >

              <div className="text-5xl">
                {icons[index]}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {service.title}
              </h3>

              <p className="mt-4 text-slate-400 leading-7">
                {service.description}
              </p>

            </div>
            </FadeIn>

          ))}

        </div>

      </div>
       </FadeIn>
    </section>
  );
}