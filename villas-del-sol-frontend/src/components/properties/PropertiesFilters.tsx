interface Props {
  search: string;

  onSearchChange: (
    value: string
  ) => void;

  onCreate: () => void;
}

export default function PropertiesFilters({
  search,
  onSearchChange,
  onCreate,
}: Props) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <div className="flex flex-col xl:flex-row gap-4">
        <input
          type="text"
          placeholder="Buscar propiedad..."
          value={search}
          onChange={(e) =>
            onSearchChange(
              e.target.value
            )
          }
          className="flex-1 h-12 bg-slate-950 border border-slate-700 rounded-xl px-4"
        />

        <button
          onClick={onCreate}
          className="bg-amber-500 hover:bg-amber-600 transition text-black font-semibold px-6 rounded-xl"
        >
          Nueva Propiedad
        </button>
      </div>
    </div>
  );
}