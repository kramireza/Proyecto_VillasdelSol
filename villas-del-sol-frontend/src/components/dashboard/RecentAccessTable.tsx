const accesses = [
  {
    resident: "Kevin Ramirez",
    type: "Vehicular",
    plate: "HAA-2034",
    status: "Autorizado",
    time: "10:42 AM",
  },

  {
    resident: "Carlos Mendoza",
    type: "Peatonal",
    plate: "-",
    status: "Autorizado",
    time: "10:38 AM",
  },

  {
    resident: "Vehículo Desconocido",
    type: "LPR",
    plate: "PDH-9921",
    status: "Alerta",
    time: "10:31 AM",
  },
];

export default function RecentAccessTable() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">
          Accesos Recientes
        </h2>

        <p className="text-slate-400 mt-2">
          Actividad operativa en tiempo real.
        </p>
      </div>

      <div className="overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 text-left">
              <th className="pb-4">Residente</th>
              <th className="pb-4">Tipo</th>
              <th className="pb-4">Placa</th>
              <th className="pb-4">Estado</th>
              <th className="pb-4">Hora</th>
            </tr>
          </thead>

          <tbody>
            {accesses.map((access) => (
              <tr
                key={access.time}
                className="border-b border-slate-800"
              >
                <td className="py-4">
                  {access.resident}
                </td>

                <td className="py-4">
                  {access.type}
                </td>

                <td className="py-4">
                  {access.plate}
                </td>

                <td className="py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      access.status ===
                      "Autorizado"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {access.status}
                  </span>
                </td>

                <td className="py-4">
                  {access.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}