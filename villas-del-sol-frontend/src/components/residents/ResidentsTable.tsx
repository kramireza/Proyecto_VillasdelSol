import type { Resident } from "../../types/resident";

interface Props {
  residents: Resident[];

  onSelectResident: (
    resident: Resident
  ) => void;
}

export default function ResidentsTable({
  residents,
  onSelectResident,
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
                Identidad
              </th>

              <th className="p-5">
                Tipo
              </th>

              <th className="p-5">
                Vivienda
              </th>

              <th className="p-5">
                Vehículos
              </th>

              <th className="p-5">
                Carnets
              </th>

              <th className="p-5">
                Estado
              </th>
            </tr>
          </thead>

          <tbody>
            {residents.map((resident) => (
              <tr
                key={resident.id}
                onClick={() =>
                  onSelectResident(
                    resident
                  )
                }
                className="border-t border-slate-800 hover:bg-slate-800/40 transition cursor-pointer"
              >
                <td className="p-5">
                  <div>
                    <p className="font-semibold">
                      {resident.fullName}
                    </p>

                    <p className="text-sm text-slate-400 mt-1">
                      {resident.phone}
                    </p>
                  </div>
                </td>

                <td className="p-5">
                  {resident.identityNumber}
                </td>

                <td className="p-5">
                  {resident.residentType}
                </td>

                <td className="p-5">
                  Bloque {resident.block} -
                  Casa{" "}
                  {
                    resident.houseNumber
                  }
                </td>

                <td className="p-5">
                  {resident.vehicles}
                </td>

                <td className="p-5">
                  {resident.activeCards}
                </td>

                <td className="p-5">
                  <StatusBadge
                    status={
                      resident.financialStatus
                    }
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

interface BadgeProps {
  status:
    | "ACTIVE"
    | "PENDING"
    | "OVERDUE";
}

function StatusBadge({
  status,
}: BadgeProps) {
  const styles = {
    ACTIVE:
      "bg-green-500/20 text-green-400",

    PENDING:
      "bg-yellow-500/20 text-yellow-400",

    OVERDUE:
      "bg-red-500/20 text-red-400",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm ${styles[status]}`}
    >
      {status}
    </span>
  );
}