import type { Invoice } from "../../types";

type Props = {
  open: boolean;
  invoice: Invoice | null;
  onClose: () => void;
};

export default function InvoiceDetailsDrawer({
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
            {invoice.number}
          </h2>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-slate-400 text-sm">
              Residente
            </p>

            <p className="font-semibold">
              {invoice.resident}
            </p>
          </div>

          <div>
            <p className="text-slate-400 text-sm">
              Propiedad
            </p>

            <p className="font-semibold">
              Casa A-12
            </p>
          </div>

          <div>
            <p className="text-slate-400 text-sm">
              Concepto
            </p>

            <p className="font-semibold">
              Cuota de mantenimiento mensual
            </p>
          </div>

          <div>
            <p className="text-slate-400 text-sm">
              Subtotal
            </p>

            <p className="font-semibold">
              L 4,000
            </p>
          </div>

          <div>
            <p className="text-slate-400 text-sm">
              Mora
            </p>

            <p className="font-semibold text-red-400">
              L 500
            </p>
          </div>

          <div>
            <p className="text-slate-400 text-sm">
              Total
            </p>

            <p className="text-2xl font-bold text-amber-400">
              {invoice.amount}
            </p>
          </div>

          <div>
            <p className="text-slate-400 text-sm">
              Estado
            </p>

            <p
              className={`font-semibold ${
                invoice.status === "Pagada"
                  ? "text-green-400"
                  : "text-yellow-400"
              }`}
            >
              {invoice.status}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}