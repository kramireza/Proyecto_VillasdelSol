const history = [
  {
    date: "2026-05-01",
    type: "Factura",
    amount: "L 4,500",
  },
  {
    date: "2026-05-02",
    type: "Pago",
    amount: "L 4,500",
  },
];

export default function FinancialHistoryTable() {
  return (
    <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
      <table className="w-full">
        <thead className="bg-slate-900">
          <tr>
            <th className="p-4 text-left">
              Fecha
            </th>

            <th className="p-4 text-left">
              Tipo
            </th>

            <th className="p-4 text-left">
              Monto
            </th>
          </tr>
        </thead>

        <tbody>
          {history.map((item, index) => (
            <tr
              key={index}
              className="border-t border-slate-700"
            >
              <td className="p-4">
                {item.date}
              </td>

              <td className="p-4">
                {item.type}
              </td>

              <td className="p-4">
                {item.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}