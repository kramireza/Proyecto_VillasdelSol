import Drawer from "../shared/Drawer";

import type { Receipt } from "../../types";

type Props = {
  open: boolean;
  receipt: Receipt | null;
  onClose: () => void;
};

export default function ReceiptPrintPreview({
  open,
  receipt,
  onClose,
}: Props) {
  if (!receipt) return null;

  return (
    <Drawer
      open={open}
      title="Vista previa del Recibo"
      width="max-w-4xl"
      onClose={onClose}
    >
      <div className="space-y-8">
        <div className="border rounded-xl border-slate-700 p-6 space-y-3">
          <h2 className="text-2xl font-bold">
            Villas del Sol
          </h2>

          <p>
            <strong>Recibo:</strong>{" "}
            {receipt.number}
          </p>

          <p>
            <strong>Factura:</strong>{" "}
            {receipt.invoiceNumber}
          </p>

          <p>
            <strong>Residente:</strong>{" "}
            {receipt.resident}
          </p>

          <p>
            <strong>Monto:</strong>{" "}
            {receipt.amount.toLocaleString(
              "es-HN",
              {
                style: "currency",
                currency: "HNL",
              }
            )}
          </p>

          <p>
            <strong>Fecha:</strong>{" "}
            {receipt.paymentDate}
          </p>
        </div>

        <div className="flex justify-end">
          <button className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-6 py-3 rounded-xl">
            Imprimir
          </button>
        </div>
      </div>
    </Drawer>
  );
}