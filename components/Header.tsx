"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <a href="/#inicio" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white">
            O
          </div>

          <div>
            <h1 className="text-2xl font-extrabold text-white">
              Orion <span className="text-blue-500">Tech</span>
            </h1>

            <p className="text-xs text-slate-400">
              Digital Solutions
            </p>
          </div>
        </a>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-slate-300">
          <a href="/#inicio" className="hover:text-blue-500 transition">
            {t.nav.home}
          </a>

          <a href="/#sobre" className="hover:text-blue-500 transition">
            {t.nav.about}
          </a>

          <a href="/#servicos" className="hover:text-blue-500 transition">
            {t.nav.services}
          </a>

          <Link href="/servicos-premium" className="hover:text-blue-500 transition">
            {t.nav.premium}
          </Link>

          <a href="/#portfolio" className="hover:text-blue-500 transition">
            {t.nav.portfolio}
          </a>

          <a href="/#contacto" className="hover:text-blue-500 transition">
            {t.nav.contact}
          </a>
        </nav>

        {/* Área direita Desktop */}
        <div className="hidden md:flex items-center gap-4">

          <div className="flex gap-2">

            <button
              onClick={() => setLanguage("pt")}
              className={`px-3 py-2 rounded-lg transition ${
                language === "pt"
                  ? "bg-blue-600 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              🇵🇹 PT
            </button>

            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-2 rounded-lg transition ${
                language === "en"
                  ? "bg-blue-600 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              🇬🇧 EN
            </button>

          </div>

          <button className="rounded-xl bg-blue-600 hover:bg-blue-500 transition px-5 py-2 font-semibold text-white shadow-lg shadow-blue-600/30">
            {language === "pt"
              ? "Solicitar Orçamento"
              : "Request Quote"}
          </button>

        </div>

        {/* Botão Menu Mobile */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Menu Mobile */}

      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">

          <nav className="flex flex-col p-6 gap-5 text-white">

            <a href="/#inicio" onClick={() => setMenuOpen(false)}>
              {t.nav.home}
            </a>

            <a href="/#sobre" onClick={() => setMenuOpen(false)}>
              {t.nav.about}
            </a>

            <a href="/#servicos" onClick={() => setMenuOpen(false)}>
              {t.nav.services}
            </a>

            <Link href="/servicos-premium" onClick={() => setMenuOpen(false)}>
              {t.nav.premium}
            </Link>

            <a href="/#portfolio" onClick={() => setMenuOpen(false)}>
              {t.nav.portfolio}
            </a>

            <a href="/#contacto" onClick={() => setMenuOpen(false)}>
              {t.nav.contact}
            </a>

            <hr className="border-slate-700" />

            <div className="flex gap-2">

              <button
                onClick={() => setLanguage("pt")}
                className={`px-3 py-2 rounded-lg ${
                  language === "pt"
                    ? "bg-blue-600"
                    : "bg-slate-700"
                }`}
              >
                🇵🇹 PT
              </button>

              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-2 rounded-lg ${
                  language === "en"
                    ? "bg-blue-600"
                    : "bg-slate-700"
                }`}
              >
                🇬🇧 EN
              </button>

            </div>

            <button className="mt-4 rounded-xl bg-blue-600 hover:bg-blue-500 transition px-5 py-3 font-semibold text-white">
              {language === "pt"
                ? "Solicitar Orçamento"
                : "Request Quote"}
            </button>

          </nav>

        </div>
      )}

    </header>
  );
}