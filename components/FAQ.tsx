"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function FAQ() {
  const { language } = useLanguage();
  const t = translations[language];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="bg-slate-950 py-24 px-6 text-white"
    >
      <div className="max-w-5xl mx-auto">

        {/* Cabeçalho */}
        <div className="text-center mb-16">

          <span className="text-blue-500 uppercase tracking-widest font-bold">
            {t.faq.badge}
          </span>

          <h2 className="mt-4 text-5xl font-extrabold">
            {t.faq.title}
          </h2>

          <p className="mt-6 text-slate-400">
            {t.faq.subtitle}
          </p>

        </div>

        {/* Perguntas */}
        <div className="space-y-5">

          {t.faq.items.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden transition-all duration-300 hover:border-blue-500"
            >

              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex items-center justify-between px-8 py-6 text-left"
              >

                <span className="text-lg font-semibold">
                  {faq.question}
                </span>

                {open === index ? (
                  <FaChevronUp className="text-blue-500" />
                ) : (
                  <FaChevronDown className="text-blue-500" />
                )}

              </button>

              {open === index && (
                <div className="px-8 pb-6 text-slate-400 leading-7">
                  {faq.answer}
                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}