interface Props {
  search: string;

  onSearchChange: (
    value: string
  ) => void;

  onIssueCard: () => void;
}

export default function CardsFilters({
  search,
  onSearchChange,
  onIssueCard,
}: Props) {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">
      <div className="flex flex-col xl:flex-row gap-4">
        <input
          type="text"
          placeholder="Buscar residente, carnet o RFID..."
          value={search}
          onChange={(e) =>
            onSearchChange(
              e.target.value
            )
          }
          className="flex-1 h-12 bg-slate-800 border border-slate-600 rounded-xl px-4 text-white"
        />

        <button
          onClick={onIssueCard}
          className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 rounded-xl"
        >
          Emitir Carnet
        </button>
      </div>
    </div>
  );
}