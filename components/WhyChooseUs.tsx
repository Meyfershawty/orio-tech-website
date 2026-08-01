"use client";

import {
  FaRocket,
  FaShieldAlt,
  FaBrain,
  FaHeadset,
} from "react-icons/fa";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function WhyChooseUs() {
  const { language } = useLanguage();
  const t = translations[language];

  const icons = [
    <FaRocket size={34} key="rocket" />,
    <FaBrain size={34} key="brain" />,
    <FaShieldAlt size={34} key="shield" />,
    <FaHeadset size={34} key="support" />,
  ];

  return (
    <section
      id="vantagens"
      className="bg-gradient-to-b from-slate-900 to-black py-24 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Cabeçalho */}
        <div className="text-center">

          <span className="text-blue-500 uppercase tracking-widest font-bold">
            {t.whyChooseUs.badge}
          </span>

          <h2 className="mt-4 text-5xl font-extrabold">
            {t.whyChooseUs.title}
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-400">
            {t.whyChooseUs.subtitle}
          </p>

        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {t.whyChooseUs.items.map((feature, index) => (
            <div
              key={index}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20"
            >
              <div className="text-blue-500">
                {icons[index]}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-4 text-slate-400 leading-7">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}