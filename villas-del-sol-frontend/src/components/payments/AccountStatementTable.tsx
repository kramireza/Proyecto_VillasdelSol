type StatementRow = {
  id: number;
  document: string;
  concept: string;
  month: string;
  amount: number;
  status: "PAID" | "PENDING" | "OVERDUE";
};

type Props = {
  rows: StatementRow[];
};

export default function AccountStatementTable({
  rows,
}: Props) {
  const getStatusClass = (
    status: StatementRow["status"]
  ) => {
    switch (status) {
      case "PAID":
        return "bg-green-600/20 text-green-400";

      case "PENDING":
        return "bg-yellow-600/20 text-yellow-400";

      case "OVERDUE":
        return "bg-red-600/20 text-red-400";
    }
  };

  const getStatusLabel = (
    status: StatementRow["status"]
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
    <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
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
              Monto
            </th>

            <th className="p-4 text-left">
              Estado
            </th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr
              key={row.id}
              className="border-t border-slate-700 hover:bg-slate-700/30"
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}