import type { Invoice } from "../../types";

type Props = {
  invoices: Invoice[];
  onView: (invoice: Invoice) => void;
  onEdit: (invoice: Invoice) => void;
  onPrint: (invoice: Invoice) => void;
};

export default function InvoiceTable({
  invoices,
  onView,
  onEdit,
  onPrint,
}: Props) {
  return (
    <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700">
      <table className="w-full">
        <thead className="bg-slate-900">
          <tr>
            <th className="p-4 text-left">
              Factura
            </th>

            <th className="p-4 text-left">
              Residente
            </th>

            <th className="p-4 text-left">
              Monto
            </th>

            <th className="p-4 text-left">
              Estado
            </th>

            <th className="p-4 text-left">
              Acciones
            </th>
          </tr>
        </thead>

        <tbody>
          {invoices.map((invoice) => (
            <tr
              key={invoice.number}
              className="border-t border-slate-700"
            >
              <td className="p-4">
                {invoice.number}
              </td>

              <td className="p-4">
                {invoice.resident}
              </td>

              <td className="p-4">
                {invoice.amount}
              </td>

              <td className="p-4">
                {invoice.status}
              </td>

              <td className="p-4">
                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      onView(invoice)
                    }
                    className="bg-blue-600 px-3 py-2 rounded-lg"
                  >
                    Ver
                  </button>

                  <button
                    onClick={() =>
                      onEdit(invoice)
                    }
                    className="bg-amber-500 text-black px-3 py-2 rounded-lg"
                  >
                    Editar
                  </button>

                  <button
                    onClick={() =>
                      onPrint(invoice)
                    }
                    className="bg-green-600 px-3 py-2 rounded-lg"
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