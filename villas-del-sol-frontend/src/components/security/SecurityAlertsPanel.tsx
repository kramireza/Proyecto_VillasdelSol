import type {
  SecurityAlert,
} from "../../types/security";

interface Props {
  alerts: SecurityAlert[];
}

export default function SecurityAlertsPanel({
  alerts,
}: Props) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-6">
        Alertas Administrativas
      </h2>

      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="border border-slate-800 rounded-xl p-4"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold">
                  {alert.title}
                </p>

                <p className="text-slate-400 text-sm mt-2">
                  {alert.description}
                </p>

                <p className="text-xs text-slate-500 mt-3">
                  {alert.createdAt}
                </p>
              </div>

              <PriorityBadge
                priority={
                  alert.priority
                }
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PriorityBadge({
  priority,
}: {
  priority:
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
      className={`px-3 py-1 rounded-full text-sm ${styles[priority]}`}
    >
      {priority}
    </span>
  );
}