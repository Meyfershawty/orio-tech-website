"use client";

import Image from "next/image";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import StarsBackground from "@/components/StarsBackground";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-br from-black via-slate-950 to-blue-950 text-white"
    >
      {/* Luzes de fundo */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[150px]" />

      <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[180px]" />

      {/* Estrelas em movimento */}
      <div className="absolute inset-0">
        <StarsBackground />
      </div>

      {/* Grelha */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-between gap-20 px-6 py-28 lg:flex-row">

        {/* Texto */}
        <div className="max-w-2xl text-center lg:text-left">

          <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
            🚀 Orion Tech • Digital Solutions
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
            {t.hero.title}
          </h1>

          <p className="mt-8 text-xl leading-8 text-slate-300">
            {t.hero.subtitle}
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4 lg:justify-start">

            <a
              href="#contacto"
              className="flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 font-semibold shadow-lg shadow-blue-600/30 transition-all duration-300 hover:scale-105 hover:bg-blue-500"
            >
              {t.hero.button1}
              <FaArrowRight />
            </a>

            <a
              href="#portfolio"
              className="rounded-xl border border-slate-700 px-8 py-4 font-semibold transition-all duration-300 hover:border-blue-500 hover:bg-slate-900"
            >
              {t.hero.button2}
            </a>

          </div>

          {/* Estatísticas */}

          <div className="mt-16 grid grid-cols-3 gap-8">

            <div>
              <h3 className="text-4xl font-black text-blue-500">
                100%
              </h3>

              <p className="mt-2 text-slate-400">
                Responsivo
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-blue-500">
                IA
              </h3>

              <p className="mt-2 text-slate-400">
                Automação
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-blue-500">
                24/7
              </h3>

              <p className="mt-2 text-slate-400">
                Suporte
              </p>
            </div>

          </div>

        </div>

        {/* Logótipo */}
        <div className="relative flex justify-center items-center">

          {/* Halo transparente */}
          <div className="absolute h-[520px] w-[520px] rounded-full bg-gradient-to-r from-blue-500/10 via-cyan-400/5 to-transparent blur-[150px]" />

          {/* Logótipo */}
          <Image
            src="/orion-logo.png"
            alt="Orion Tech"
            width={520}
            height={520}
            priority
            className="relative z-10 w-[280px] md:w-[420px] lg:w-[520px] drop-shadow-[0_0_60px_rgba(59,130,246,0.45)]"
          />

        </div>

      </div>

      {/* Seta */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">

        <a href="#sobre">
          <FaChevronDown className="text-3xl text-blue-500" />
        </a>

      </div>

    </section>
  );
}