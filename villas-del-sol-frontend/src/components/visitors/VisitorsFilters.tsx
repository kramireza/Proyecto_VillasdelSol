interface Props {
  search: string;

  onSearchChange: (
    value: string
  ) => void;
}

export default function VisitorsFilters({
  search,
  onSearchChange,
}: Props) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <div className="flex gap-4">
        <input
          type="text"
          value={search}
          onChange={(e) =>
            onSearchChange(e.target.value)
          }
          placeholder="Buscar visitante..."
          className="flex-1 h-12 bg-slate-950 border border-slate-700 rounded-xl px-4"
        />

        <button className="bg-amber-500 hover:bg-amber-600 transition text-black font-semibold px-6 rounded-xl">
          Generar QR
        </button>
      </div>
    </div>
  );
}