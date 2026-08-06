"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import FadeIn from "@/components/animations/FadeIn";

export default function Portfolio() {
  const { language } = useLanguage();
  const t = translations[language];

  const images = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",
  ];

  return (
    <section
      id="portfolio"
      className="bg-slate-950 py-24 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Cabeçalho */}
        <FadeIn>
          <div className="text-center">

            <span className="text-blue-500 uppercase tracking-[0.25em] font-bold">
              {t.portfolio.badge}
            </span>

            <h2 className="mt-4 text-5xl font-black">
              {t.portfolio.title}
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-slate-400 leading-8">
              {t.portfolio.subtitle}
            </p>

          </div>
        </FadeIn>

        {/* Projetos */}
        <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {t.portfolio.items.map((project, index) => (

            <FadeIn
              key={project.title}
              delay={index * 0.2}
            >

              <div
                className="group overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 transition-all duration-500 hover:-translate-y-3 hover:border-blue-500 hover:shadow-[0_20px_60px_rgba(37,99,235,0.35)]"
              >

                {/* Imagem */}
                <div className="relative h-64 overflow-hidden">

                  <Image
                    src={images[index]}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />

                  <span className="absolute left-5 top-5 rounded-full bg-blue-600 px-4 py-2 text-xs font-bold uppercase tracking-wider">
                    {project.category}
                  </span>

                </div>

                {/* Conteúdo */}
                <div className="p-8">

                  <h3 className="text-2xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-400">
                    {project.description}
                  </p>

                  {/* Tecnologias */}
                  <div className="mt-6 flex flex-wrap gap-2">

                    {project.technologies?.map((tech: string) => (

                      <span
                        key={tech}
                        className="rounded-full border border-blue-500/30 bg-blue-600/20 px-3 py-1 text-xs font-semibold text-blue-300"
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                  {/* Botão */}
                  <a
                    href="#"
                    className="mt-8 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-500"
                  >
                    {t.portfolio.button}
                    <FaArrowRight />
                  </a>

                </div>

              </div>

            </FadeIn>

          ))}

        </div>

      </div>
    </section>
  );
}