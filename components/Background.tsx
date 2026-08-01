export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-950">

      {/* Luzes */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"></div>
      <div className="absolute top-32 right-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl"></div>

      {/* Estrelas */}
      <div className="absolute top-20 left-20 h-2 w-2 rounded-full bg-white"></div>
      <div className="absolute top-40 left-1/3 h-1.5 w-1.5 rounded-full bg-blue-300"></div>
      <div className="absolute top-60 right-40 h-2 w-2 rounded-full bg-white"></div>
      <div className="absolute bottom-40 left-1/4 h-1.5 w-1.5 rounded-full bg-cyan-300"></div>
      <div className="absolute bottom-24 right-1/3 h-2 w-2 rounded-full bg-white"></div>
      <div className="absolute top-1/2 right-20 h-1.5 w-1.5 rounded-full bg-blue-200"></div>

      {/* Linhas da constelação */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="180" y1="90" x2="350" y2="180" stroke="#60A5FA" strokeWidth="1" />
        <line x1="350" y1="180" x2="500" y2="300" stroke="#60A5FA" strokeWidth="1" />
        <line x1="500" y1="300" x2="720" y2="220" stroke="#60A5FA" strokeWidth="1" />
      </svg>

    </div>
  );
}