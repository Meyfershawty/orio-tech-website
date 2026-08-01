"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import FadeIn from "@/components/animations/FadeIn";

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
  id="sobre"
  className="bg-slate-950 py-24 px-6 text-white"
>
  <FadeIn>
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Texto */}
        <div>

          <span className="text-blue-500 font-bold uppercase tracking-widest">
            {t.about.badge}
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold">
            {t.about.title}
          </h2>

          <p className="mt-8 text-lg text-slate-400 leading-8">
            {t.about.paragraph1}
          </p>

          <p className="mt-6 text-lg text-slate-400 leading-8">
            {t.about.paragraph2}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <div className="rounded-xl bg-slate-900 border border-slate-800 px-6 py-4">
              <h3 className="text-3xl font-bold text-blue-500">
                100%
              </h3>

              <p className="text-slate-400">
                {t.about.card1}
              </p>
            </div>

            <div className="rounded-xl bg-slate-900 border border-slate-800 px-6 py-4">
              <h3 className="text-3xl font-bold text-blue-500">
                IA
              </h3>

              <p className="text-slate-400">
                {t.about.card2}
              </p>
            </div>

            <div className="rounded-xl bg-slate-900 border border-slate-800 px-6 py-4">
              <h3 className="text-3xl font-bold text-blue-500">
                24/7
              </h3>

              <p className="text-slate-400">
                {t.about.card3}
              </p>
            </div>

          </div>

        </div>

        {/* Caixa lateral */}
        <div className="rounded-3xl bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 p-[2px]">

          <div className="rounded-3xl bg-slate-950 p-12 h-full flex items-center justify-center">

            <div className="text-center">

              <h3 className="text-5xl font-extrabold text-blue-500">
                Orion Tech
              </h3>

              <p className="mt-6 text-slate-300 text-lg">
                {t.about.slogan}
              </p>

            </div>

          </div>

        </div>

      </div>
       </FadeIn>
    </section>
  );
}