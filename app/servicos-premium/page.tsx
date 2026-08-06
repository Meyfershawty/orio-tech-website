"use client";

import Image from "next/image";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import Background from "@/components/Background";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FadeIn from "@/components/animations/FadeIn";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function ServicosPremiumPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const p = t.premiumServices;

  const whatsappBase =
    "https://wa.me/258847973689?text=";

  return (
    <>
      <Background />
      <Header />

      <main className="pt-32 pb-24 px-6 text-white">
        <div className="max-w-7xl mx-auto">

          {/* Cabeçalho */}
          <FadeIn>
            <div className="text-center">
              <span className="text-blue-500 uppercase tracking-[0.25em] font-bold">
                {p.badge}
              </span>

              <h1 className="mt-4 text-4xl md:text-5xl font-black">
                {p.title}
              </h1>

              <p className="mt-6 max-w-3xl mx-auto text-slate-400 leading-8">
                {p.subtitle}
              </p>
            </div>
          </FadeIn>

          {/* Cards de Serviços */}
          <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {p.items.map((service, index) => {
              const message = encodeURIComponent(
                language === "pt"
                  ? `Olá Orion Tech! Tenho interesse no serviço "${service.title}".`
                  : `Hello Orion Tech! I'm interested in the "${service.title}" service.`
              );

              return (
                <FadeIn key={service.title} delay={index * 0.15}>
                  <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 transition-all duration-500 hover:-translate-y-3 hover:border-blue-500 hover:shadow-[0_20px_60px_rgba(37,99,235,0.35)]">

                    {/* Imagem */}
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                      <span className="absolute left-5 top-5 rounded-full bg-blue-600 px-4 py-2 text-xs font-bold uppercase tracking-wider shadow-lg shadow-blue-600/40">
                        {p.badge}
                      </span>
                    </div>

                    {/* Conteúdo */}
                    <div className="flex flex-1 flex-col p-8">
                      <h3 className="text-2xl font-bold">
                        {service.title}
                      </h3>

                      <p className="mt-4 leading-7 text-slate-400">
                        {service.description}
                      </p>

                      <ul className="mt-6 space-y-3">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 text-slate-300"
                          >
                            <FaCheck className="mt-1 shrink-0 text-blue-500" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <a
                        href={`${whatsappBase}${message}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-500"
                      >
                        {p.cta}
                        <FaArrowRight />
                      </a>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          {/* CTA Final */}
          <FadeIn>
            <div className="mt-24 rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-600/20 via-slate-900 to-slate-950 p-10 text-center md:p-16">
              <h2 className="text-3xl md:text-4xl font-extrabold">
                {p.finalTitle}
              </h2>

              <p className="mt-4 max-w-2xl mx-auto text-slate-300">
                {p.finalSubtitle}
              </p>

              <a
                href="https://wa.me/258847973689?text=Ol%C3%A1%20Orion%20Tech!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20premium."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:scale-105 hover:bg-blue-500"
              >
                {p.finalButton}
                <FaArrowRight />
              </a>
            </div>
          </FadeIn>

        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
