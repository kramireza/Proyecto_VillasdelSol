import type {
  AccountStatementRow,
} from "../../types";

type Props = {
  rows: AccountStatementRow[];

  onViewInvoice: (
    row: AccountStatementRow
  ) => void;
};

export default function AccountStatementTable({
  rows,
  onViewInvoice,
}: Props) {
  const getStatusClass = (
    status: AccountStatementRow["status"]
  ) => {
    switch (status) {
      case "PAID":
        return "bg-green-500/20 text-green-400";

      case "PENDING":
        return "bg-yellow-500/20 text-yellow-400";

      case "OVERDUE":
        return "bg-red-500/20 text-red-400";
    }
  };

  const getStatusLabel = (
    status: AccountStatementRow["status"]
  ) => {
    switch (status) {
      case "PAID":
        return "Pagado";

      case "PENDING":
        return "Pendiente";

      case "OVERDUE":
        return "En Mora";
    }
  };

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden">
      <table className="w-full">
        <thead className="bg-slate-900">
          <tr>
            <th className="p-4 text-left">
              Documento
            </th>

            <th className="p-4 text-left">
              Concepto
            </th>

            <th className="p-4 text-left">
              Mes
            </th>

            <th className="p-4 text-left">
              Vencimiento
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
          {rows.map((row) => (
            <tr
              key={row.id}
              className="border-t border-slate-700 hover:bg-slate-700/40"
            >
              <td className="p-4">
                {row.document}
              </td>

              <td className="p-4">
                {row.concept}
              </td>

              <td className="p-4">
                {row.month}
              </td>

              <td className="p-4">
                {row.dueDate}
              </td>

              <td className="p-4">
                {row.amount.toLocaleString(
                  "es-HN",
                  {
                    style: "currency",
                    currency: "HNL",
                  }
                )}
              </td>

              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${getStatusClass(
                    row.status
                  )}`}
                >
                  {getStatusLabel(
                    row.status
                  )}
                </span>
              </td>

              <td className="p-4">
                <button
                  onClick={() =>
                    onViewInvoice(row)
                  }
                  className="bg-blue-600 hover:bg-blue-500 px-3 py-2 rounded-lg"
                >
                  Ver Factura
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}