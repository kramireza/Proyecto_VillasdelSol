type Props = {
  search: string;
  onSearchChange: (value: string) => void;
};

export default function AccountStatementFilters({
  search,
  onSearchChange,
}: Props) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
      <input
        type="text"
        placeholder="Buscar residente..."
        value={search}
        onChange={(e) =>
          onSearchChange(e.target.value)
        }
        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3"
      />
    </div>
  );
}