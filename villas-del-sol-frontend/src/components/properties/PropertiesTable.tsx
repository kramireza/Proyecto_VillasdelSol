import type {
  Property,
} from "../../types/property";

interface Props {
  properties: Property[];

  onSelectProperty: (
    property: Property
  ) => void;
}

export default function PropertiesTable({
  properties,
  onSelectProperty,
}: Props) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
      <div className="overflow-auto">
        <table className="w-full">
          <thead className="bg-slate-950">
            <tr className="text-left text-slate-400">
              <th className="p-5">
                Código
              </th>

              <th className="p-5">
                Nombre
              </th>

              <th className="p-5">
                Tipo
              </th>

              <th className="p-5">
                Bloque
              </th>

              <th className="p-5">
                Parqueos
              </th>

              <th className="p-5">
                Estado
              </th>
            </tr>
          </thead>

          <tbody>
            {properties.map(
              (property) => (
                <tr
                  key={property.id}
                  onClick={() =>
                    onSelectProperty(
                      property
                    )
                  }
                  className="border-t border-slate-800 hover:bg-slate-800/40 transition cursor-pointer"
                >
                  <td className="p-5">
                    {property.code}
                  </td>

                  <td className="p-5">
                    {property.name}
                  </td>

                  <td className="p-5">
                    {property.type}
                  </td>

                  <td className="p-5">
                    {property.block}
                  </td>

                  <td className="p-5">
                    {
                      property.occupiedParkingSpaces
                    }
                    /
                    {
                      property.parkingSpaces
                    }
                  </td>

                  <td className="p-5">
                    <StatusBadge
                      status={
                        property.status
                      }
                    />
                  </td>
                </tr>
              )
            )}
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
    | "INACTIVE";
}) {
  return (
    <span
      className={`px-3 py-1 rounded-full text-sm ${
        status === "ACTIVE"
          ? "bg-green-500/20 text-green-400"
          : "bg-red-500/20 text-red-400"
      }`}
    >
      {status}
    </span>
  );
}