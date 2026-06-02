type Props = {
  open: boolean;
  onClose: () => void;
};

export default function InvoiceDetailsDrawer({
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
            Factura FAC-0001
          </h2>

          <button
            onClick={onClose}
            className="text-slate-400"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <strong>Residente:</strong>
            <p>Carlos Mendoza</p>
          </div>

          <div>
            <strong>Propiedad:</strong>
            <p>Casa A-12</p>
          </div>

          <div>
            <strong>Concepto:</strong>
            <p>Cuota de mantenimiento</p>
          </div>

          <div>
            <strong>Subtotal:</strong>
            <p>L 4,000</p>
          </div>

          <div>
            <strong>Mora:</strong>
            <p>L 500</p>
          </div>

          <div>
            <strong>Total:</strong>
            <p>L 4,500</p>
          </div>

          <div>
            <strong>Estado:</strong>
            <p>Pendiente</p>
          </div>
        </div>
      </div>
    </div>
  );
}