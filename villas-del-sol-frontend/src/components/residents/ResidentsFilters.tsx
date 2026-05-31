interface Props {
  search: string;

  onSearchChange: (
    value: string
  ) => void;
}

export default function ResidentsFilters({
  search,
  onSearchChange,
}: Props) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <div className="flex flex-col xl:flex-row gap-4">
        <input
          type="text"
          placeholder="Buscar residente..."
          value={search}
          onChange={(e) =>
            onSearchChange(e.target.value)
          }
          className="flex-1 h-12 bg-slate-950 border border-slate-700 rounded-xl px-4 outline-none focus:border-amber-400"
        />

        <button className="bg-amber-500 hover:bg-amber-600 transition text-black font-semibold px-6 rounded-xl">
          Nuevo Residente
        </button>
      </div>
    </div>
  );
}