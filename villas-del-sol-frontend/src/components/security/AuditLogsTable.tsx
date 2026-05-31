import type {
  AuditLog,
} from "../../types/security";

interface Props {
  logs: AuditLog[];
}

export default function AuditLogsTable({
  logs,
}: Props) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
      <table className="w-full">
        <thead className="bg-slate-950">
          <tr className="text-left text-slate-400">
            <th className="p-5">
              Usuario
            </th>

            <th className="p-5">
              Acción
            </th>

            <th className="p-5">
              Módulo
            </th>

            <th className="p-5">
              Severidad
            </th>

            <th className="p-5">
              Fecha
            </th>
          </tr>
        </thead>

        <tbody>
          {logs.map((log) => (
            <tr
              key={log.id}
              className="border-t border-slate-800"
            >
              <td className="p-5">
                {log.user}
              </td>

              <td className="p-5">
                {log.action}
              </td>

              <td className="p-5">
                {log.module}
              </td>

              <td className="p-5">
                <SeverityBadge
                  severity={
                    log.severity
                  }
                />
              </td>

              <td className="p-5">
                {log.timestamp}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SeverityBadge({
  severity,
}: {
  severity:
    | "LOW"
    | "MEDIUM"
    | "HIGH";
}) {
  const styles = {
    LOW:
      "bg-green-500/20 text-green-400",

    MEDIUM:
      "bg-yellow-500/20 text-yellow-400",

    HIGH:
      "bg-red-500/20 text-red-400",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm ${styles[severity]}`}
    >
      {severity}
    </span>
  );
}