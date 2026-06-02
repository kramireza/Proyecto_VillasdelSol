type Props = {
  open: boolean;
  onClose: () => void;
};

export default function InvoiceFormDrawer({
  open,
  onClose,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      <div className="relative w-full max-w-xl bg-slate-900 border-l border-slate-700 p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            Nueva Factura
          </h2>

          <button
            onClick={onClose}
            className="text-slate-400"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4">
          <input
            placeholder="Residente"
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3"
          />

          <input
            placeholder="Propiedad"
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3"
          />

          <input
            placeholder="Concepto"
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3"
          />

          <input
            placeholder="Monto"
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3"
          />

          <button className="w-full bg-amber-500 text-black font-semibold py-3 rounded-xl">
            Guardar Factura
          </button>
        </div>
      </div>
    </div>
  );
}