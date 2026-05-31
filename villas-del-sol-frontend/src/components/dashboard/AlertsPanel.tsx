const alerts = [
  {
    title: "Residente en mora",
    description:
      "Casa B-14 tiene acceso bloqueado.",
    priority: "Alta",
  },

  {
    title: "Cámara desconectada",
    description:
      "Entrada principal sin conexión.",
    priority: "Crítica",
  },

  {
    title: "Placa desconocida",
    description:
      "Vehículo no registrado detectado.",
    priority: "Media",
  },
];

export default function AlertsPanel() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">
          Alertas Operativas
        </h2>

        <p className="text-slate-400 mt-2">
          Eventos críticos del sistema.
        </p>
      </div>

      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.title}
            className="border border-slate-800 rounded-xl p-4 bg-slate-950"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">
                {alert.title}
              </h3>

              <span className="text-xs px-3 py-1 rounded-full bg-red-500/20 text-red-400">
                {alert.priority}
              </span>
            </div>

            <p className="text-slate-400 text-sm mt-3">
              {alert.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}