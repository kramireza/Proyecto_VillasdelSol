import type {
  AccessEvent,
} from "../../types/access";

interface Props {
  events: AccessEvent[];
}

export default function AccessEventsTable({
  events,
}: Props) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
      <div className="overflow-auto">
        <table className="w-full">
          <thead className="bg-slate-950">
            <tr className="text-left text-slate-400">
              <th className="p-5">
                Residente
              </th>

              <th className="p-5">
                Tipo
              </th>

              <th className="p-5">
                Placa
              </th>

              <th className="p-5">
                Dispositivo
              </th>

              <th className="p-5">
                Resultado
              </th>

              <th className="p-5">
                Hora
              </th>
            </tr>
          </thead>

          <tbody>
            {events.map((event) => (
              <tr
                key={event.id}
                className="border-t border-slate-800 hover:bg-slate-800/40 transition"
              >
                <td className="p-5">
                  {event.resident}
                </td>

                <td className="p-5">
                  {event.accessType}
                </td>

                <td className="p-5">
                  {event.plate || "-"}
                </td>

                <td className="p-5">
                  {event.device}
                </td>

                <td className="p-5">
                  <ResultBadge
                    result={event.result}
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
    </div>
  );
}

function ResultBadge({
  result,
}: {
  result:
    | "AUTHORIZED"
    | "DENIED"
    | "ALERT";
}) {
  const styles = {
    AUTHORIZED:
      "bg-green-500/20 text-green-400",

    DENIED:
      "bg-red-500/20 text-red-400",

    ALERT:
      "bg-yellow-500/20 text-yellow-400",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm ${styles[result]}`}
    >
      {result}
    </span>
  );
}