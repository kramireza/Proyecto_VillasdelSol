import type { FinancialHistory } from "../../types";

type Props = {
  history: FinancialHistory[];

  onView: (
    item: FinancialHistory
  ) => void;
};

export default function FinancialHistoryTable({
  history,
  onView,
}: Props) {
  const getTypeLabel = (
    type: FinancialHistory["type"]
  ) => {
    switch (type) {
      case "INVOICE":
        return "Factura";

      case "PAYMENT":
        return "Pago";

      case "RECEIPT":
        return "Recibo";

      case "SURCHARGE":
        return "Mora";

      case "ADJUSTMENT":
        return "Ajuste";

      case "CANCELLED":
        return "Anulada";
    }
  };

  const getBadgeClass = (
    type: FinancialHistory["type"]
  ) => {
    switch (type) {
      case "INVOICE":
        return "bg-blue-500/20 text-blue-400";

      case "PAYMENT":
        return "bg-green-500/20 text-green-400";

      case "RECEIPT":
        return "bg-purple-500/20 text-purple-400";

      case "SURCHARGE":
        return "bg-red-500/20 text-red-400";

      case "ADJUSTMENT":
        return "bg-yellow-500/20 text-yellow-400";

      case "CANCELLED":
        return "bg-slate-500/20 text-slate-300";
    }
  };

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden">
      <table className="w-full">
        <thead className="bg-slate-900">
          <tr>
            <th className="p-4 text-left">
              Fecha
            </th>

            <th className="p-4 text-left">
              Residente
            </th>

            <th className="p-4 text-left">
              Tipo
            </th>

            <th className="p-4 text-left">
              Descripción
            </th>

            <th className="p-4 text-left">
              Monto
            </th>

            <th className="p-4 text-left">
              Usuario
            </th>

            <th className="p-4 text-left">
              Acciones
            </th>
          </tr>
        </thead>

        <tbody>
          {history.map((item) => (
            <tr
              key={item.id}
              className="border-t border-slate-700 hover:bg-slate-700/40"
            >
              <td className="p-4">
                {item.date}
              </td>

              <td className="p-4">
                {item.resident}
              </td>

              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${getBadgeClass(
                    item.type
                  )}`}
                >
                  {getTypeLabel(item.type)}
                </span>
              </td>

              <td className="p-4">
                {item.description}
              </td>

              <td className="p-4">
                {item.amount.toLocaleString(
                  "es-HN",
                  {
                    style: "currency",
                    currency: "HNL",
                  }
                )}
              </td>

              <td className="p-4">
                {item.user}
              </td>

              <td className="p-4">
                <button
                  onClick={() =>
                    onView(item)
                  }
                  className="bg-blue-600 hover:bg-blue-500 px-3 py-2 rounded-lg"
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