import Drawer from "../shared/Drawer";

import type { Receipt } from "../../types";

type Props = {
  open: boolean;
  receipt: Receipt | null;
  onClose: () => void;
};

export default function ReceiptDetailsDrawer({
  open,
  receipt,
  onClose,
}: Props) {
  if (!receipt) return null;

  return (
    <Drawer
      open={open}
      title="Detalle del Recibo"
      onClose={onClose}
    >
      <div className="space-y-6">
        <div>
          <p className="text-slate-400 text-sm">
            Número
          </p>

          <p className="font-semibold">
            {receipt.number}
          </p>
        </div>

        <div>
          <p className="text-slate-400 text-sm">
            Factura
          </p>

          <p>{receipt.invoiceNumber}</p>
        </div>

        <div>
          <p className="text-slate-400 text-sm">
            Residente
          </p>

          <p>{receipt.resident}</p>
        </div>

        <div>
          <p className="text-slate-400 text-sm">
            Método
          </p>

          <p>
            {receipt.paymentMethod ===
            "TRANSFER"
              ? "Transferencia"
              : "Efectivo"}
          </p>
        </div>

        <div>
          <p className="text-slate-400 text-sm">
            Monto
          </p>

          <p className="text-2xl font-bold text-amber-400">
            {receipt.amount.toLocaleString(
              "es-HN",
              {
                style: "currency",
                currency: "HNL",
              }
            )}
          </p>
        </div>

        <div>
          <p className="text-slate-400 text-sm">
            Fecha de Pago
          </p>

          <p>{receipt.paymentDate}</p>
        </div>
      </div>
    </Drawer>
  );
}