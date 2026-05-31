import type {
  SurveillanceEvent,
} from "../../types/surveillance";

interface Props {
  events: SurveillanceEvent[];
}

export default function SurveillanceEventsTable({
  events,
}: Props) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
      <table className="w-full">
        <thead className="bg-slate-950">
          <tr className="text-left text-slate-400">
            <th className="p-5">
              Tipo
            </th>

            <th className="p-5">
              Evento
            </th>

            <th className="p-5">
              Descripción
            </th>

            <th className="p-5">
              Prioridad
            </th>

            <th className="p-5">
              Fecha
            </th>
          </tr>
        </thead>

        <tbody>
          {events.map((event) => (
            <tr
              key={event.id}
              className="border-t border-slate-800"
            >
              <td className="p-5">
                {event.type}
              </td>

              <td className="p-5">
                {event.title}
              </td>

              <td className="p-5">
                {event.description}
              </td>

              <td className="p-5">
                <PriorityBadge
                  priority={
                    event.priority
                  }
                />
              </td>

              <td className="p-5">
                {event.timestamp}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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