type Invoice = {
  number: string;
  resident: string;
  amount: string;
  status: string;
};

type Props = {
  invoices: Invoice[];
  onView: (invoice: Invoice) => void;
};

export default function InvoiceTable({
  invoices,
  onView,
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
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    invoice.status ===
                    "Pagada"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}
                >
                  {invoice.status}
                </span>
              </td>

              <td className="p-4">
                <button
                  onClick={() =>
                    onView(invoice)
                  }
                  className="bg-amber-500 hover:bg-amber-400 text-black px-4 py-2 rounded-lg font-semibold"
                >
                  Ver
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}