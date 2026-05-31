export default function CardHistoryTable() {
  const records = [
    {
      id: 1,
      date: "2026-01-05",
      action: "EMISIÓN",
      user: "Administrador",
    },

    {
      id: 2,
      date: "2026-03-10",
      action: "REIMPRESIÓN",
      user: "Administrador",
    },
  ];

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden">
      <table className="w-full">
        <thead className="bg-slate-700">
          <tr>
            <th className="p-4 text-left">
              Fecha
            </th>

            <th className="p-4 text-left">
              Acción
            </th>

            <th className="p-4 text-left">
              Usuario
            </th>
          </tr>
        </thead>

        <tbody>
          {records.map(
            (record) => (
              <tr
                key={record.id}
                className="border-t border-slate-700"
              >
                <td className="p-4 text-white">
                  {record.date}
                </td>

                <td className="p-4 text-white">
                  {record.action}
                </td>

                <td className="p-4 text-white">
                  {record.user}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}