"use client";

import CountUp from "react-countup";
import { FaCode, FaRobot, FaUsers, FaGlobe } from "react-icons/fa";

export default function Stats() {
  const stats = [
    {
      icon: <FaCode size={40} />,
      number: 50,
      suffix: "+",
      title: "Projetos Desenvolvidos",
    },
    {
      icon: <FaRobot size={40} />,
      number: 20,
      suffix: "+",
      title: "Soluções com IA",
    },
    {
      icon: <FaUsers size={40} />,
      number: 100,
      suffix: "%",
      title: "Clientes Satisfeitos",
    },
    {
      icon: <FaGlobe size={40} />,
      number: 24,
      suffix: "/7",
      title: "Suporte",
    },
  ];

  return (
    <section className="bg-slate-950 py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center hover:border-blue-500 transition duration-300"
            >
              <div className="text-blue-500 flex justify-center mb-6">
                {item.icon}
              </div>

              <h2 className="text-5xl font-black text-white">
                <CountUp
                  end={item.number}
                  duration={3}
                />
                {item.suffix}
              </h2>

              <p className="mt-4 text-slate-400">
                {item.title}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}