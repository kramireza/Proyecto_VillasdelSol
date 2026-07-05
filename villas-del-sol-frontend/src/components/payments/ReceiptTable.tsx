import type { Receipt } from "../../types";

type Props = {
  receipts: Receipt[];
  onView: (receipt: Receipt) => void;
  onPrint: (receipt: Receipt) => void;
};

export default function ReceiptTable({
  receipts,
  onView,
  onPrint,
}: Props) {
  return (
    <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
      <table className="w-full">
        <thead className="bg-slate-900">
          <tr>
            <th className="p-4 text-left">Recibo</th>

            <th className="p-4 text-left">Factura</th>

            <th className="p-4 text-left">Residente</th>

            <th className="p-4 text-left">Método</th>

            <th className="p-4 text-left">Monto</th>

            <th className="p-4 text-left">Fecha</th>

            <th className="p-4 text-left">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {receipts.map((receipt) => (
            <tr
              key={receipt.id}
              className="border-t border-slate-700 hover:bg-slate-700/30"
            >
              <td className="p-4">
                {receipt.number}
              </td>

              <td className="p-4">
                {receipt.invoiceNumber}
              </td>

              <td className="p-4">
                {receipt.resident}
              </td>

              <td className="p-4">
                {receipt.paymentMethod ===
                "TRANSFER"
                  ? "Transferencia"
                  : "Efectivo"}
              </td>

              <td className="p-4">
                {receipt.amount.toLocaleString(
                  "es-HN",
                  {
                    style: "currency",
                    currency: "HNL",
                  }
                )}
              </td>

              <td className="p-4">
                {receipt.paymentDate}
              </td>

              <td className="p-4">
                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      onView(receipt)
                    }
                    className="bg-blue-600 hover:bg-blue-500 px-3 py-2 rounded-lg"
                  >
                    Ver
                  </button>

                  <button
                    onClick={() =>
                      onPrint(receipt)
                    }
                    className="bg-green-600 hover:bg-green-500 px-3 py-2 rounded-lg"
                  >
                    Imprimir
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}