import type { VisitorQr } from "../../types/visitor";

interface Props {
  visitors: VisitorQr[];
}

export default function VisitorsTable({
  visitors,
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
                Visitante
              </th>

              <th className="p-5">
                Código
              </th>

              <th className="p-5">
                Tipo
              </th>

              <th className="p-5">
                Vigencia
              </th>

              <th className="p-5">
                Estado
              </th>
            </tr>
          </thead>

          <tbody>
            {visitors.map((visitor) => (
              <tr
                key={visitor.id}
                className="border-t border-slate-800 hover:bg-slate-800/40"
              >
                <td className="p-5">
                  {visitor.residentName}
                </td>

                <td className="p-5">
                  {visitor.visitorName}
                </td>

                <td className="p-5">
                  {visitor.qrCode}
                </td>

                <td className="p-5">
                  {visitor.usageType}
                </td>

                <td className="p-5">
                  {visitor.validUntil}
                </td>

                <td className="p-5">
                  <StatusBadge
                    status={visitor.status}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StatusBadge({
  status,
}: {
  status:
    | "ACTIVE"
    | "USED"
    | "EXPIRED"
    | "BLOCKED";
}) {
  const styles = {
    ACTIVE:
      "bg-green-500/20 text-green-400",

    USED:
      "bg-blue-500/20 text-blue-400",

    EXPIRED:
      "bg-red-500/20 text-red-400",

    BLOCKED:
      "bg-yellow-500/20 text-yellow-400",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm ${styles[status]}`}
    >
      {status}
    </span>
  );
}