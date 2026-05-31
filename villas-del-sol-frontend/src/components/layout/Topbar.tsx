import {
  FaBell,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";

export default function Topbar() {
  return (
    <header className="h-20 border-b border-slate-800 bg-slate-950 flex items-center justify-between px-8">
      <div>
        <h2 className="text-2xl font-bold">
          Centro de Monitoreo
        </h2>

        <p className="text-slate-400 text-sm mt-1">
          Villas del Sol
        </p>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative">
          <FaSearch className="absolute top-4 left-4 text-slate-500" />

          <input
            type="text"
            placeholder="Buscar residentes, placas, accesos..."
            className="bg-slate-900 border border-slate-700 rounded-xl h-12 w-96 pl-12 pr-4 text-sm outline-none focus:border-amber-400"
          />
        </div>

        <button className="relative w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center hover:border-amber-400 transition">
          <FaBell />

          <span className="absolute -top-1 -right-1 bg-red-500 text-xs w-5 h-5 rounded-full flex items-center justify-center">
            4
          </span>
        </button>

        <div className="flex items-center gap-3">
          <FaUserCircle className="text-4xl text-slate-400" />

          <div>
            <p className="font-semibold">
              Administrador
            </p>

            <p className="text-sm text-slate-400">
              Sistema Principal
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}