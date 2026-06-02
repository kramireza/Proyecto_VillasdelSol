type Invoice = {
  number: string;
  resident: string;
  amount: string;
  status: string;
};

type Props = {
  open: boolean;
  invoice: Invoice | null;
  onClose: () => void;
};

export default function InvoiceEditDrawer({
  open,
  invoice,
  onClose,
}: Props) {
  if (!open || !invoice) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      <div className="relative w-full max-w-xl bg-slate-900 border-l border-slate-700 p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">
            Editar Factura
          </h2>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4">
          <input
            defaultValue={invoice.resident}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3"
          />

          <input
            defaultValue={invoice.amount}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3"
          />

          <select
            defaultValue={invoice.status}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3"
          >
            <option>Pendiente</option>
            <option>Pagada</option>
            <option>Anulada</option>
          </select>

          <button className="w-full bg-amber-500 text-black font-semibold py-3 rounded-xl">
            Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  );
}