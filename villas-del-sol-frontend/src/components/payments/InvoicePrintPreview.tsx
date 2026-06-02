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

export default function InvoicePrintPreview({
  open,
  invoice,
  onClose,
}: Props) {
  if (!open || !invoice) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 w-full max-w-3xl">
        <div className="flex justify-between mb-8">
          <h2 className="text-2xl font-bold">
            Vista Previa Factura
          </h2>

          <button
            onClick={onClose}
            className="text-slate-400"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4">
          <p>
            <strong>Factura:</strong>{" "}
            {invoice.number}
          </p>

          <p>
            <strong>Residente:</strong>{" "}
            {invoice.resident}
          </p>

          <p>
            <strong>Total:</strong>{" "}
            {invoice.amount}
          </p>

          <p>
            <strong>Estado:</strong>{" "}
            {invoice.status}
          </p>
        </div>

        <div className="mt-8 flex justify-end">
          <button className="bg-amber-500 text-black px-6 py-3 rounded-xl font-semibold">
            Imprimir
          </button>
        </div>
      </div>
    </div>
  );
}