import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Empresa */}
          <div>
            <h2 className="text-3xl font-extrabold">
              Orion <span className="text-blue-500">Tech</span>
            </h2>

            <p className="mt-5 text-slate-400 leading-7">
              Desenvolvemos websites modernos, Inteligência Artificial,
              automação e soluções digitais para empresas.
            </p>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-xl font-bold mb-5">
              Serviços
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>Desenvolvimento Web</li>
              <li>Inteligência Artificial</li>
              <li>Consultoria</li>
              <li>Aplicações Web</li>
            </ul>
          </div>

          {/* Contactos */}
          <div>
            <h3 className="text-xl font-bold mb-5">
              Contactos
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>📧 oriontech072@gmail.com</li>
              <li>📱 +258 84 797 3689</li>
              <li>📍 Moçambique</li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-xl font-bold mb-5">
              Redes Sociais
            </h3>

            <div className="flex gap-4">

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-blue-600 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-pink-600 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-sky-600 transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-green-600 transition"
              >
                <FaWhatsapp />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-white hover:text-black transition"
              >
                <FaGithub />
              </a>

            </div>

          </div>

        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-slate-500 text-sm">
            © 2026 Orion Tech. Todos os direitos reservados.
          </p>

          <a
            href="/#inicio"
            className="rounded-lg bg-blue-600 px-5 py-2 hover:bg-blue-500 transition"
          >
            ↑ Voltar ao topo
          </a>

        </div>

      </div>

    </footer>
  );
}