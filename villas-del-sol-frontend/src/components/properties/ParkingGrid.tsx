import type {
  ParkingSpace,
} from "../../types/property";

interface Props {
  parkingSpaces: ParkingSpace[];
}

export default function ParkingGrid({
  parkingSpaces,
}: Props) {
  return (
    <div>
      <h3 className="text-xl font-bold text-white mb-4">
        Parqueos
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {parkingSpaces.map(
          (parking) => (
            <div
              key={parking.id}
              className={`rounded-xl p-4 border ${
                parking.status ===
                "OCCUPIED"
                  ? "border-red-500 bg-red-500/10"
                  : "border-green-500 bg-green-500/10"
              }`}
            >
              <p className="font-semibold text-white">
                {parking.code}
              </p>

              <p
                className={`text-sm mt-2 ${
                  parking.status ===
                  "OCCUPIED"
                    ? "text-red-400"
                    : "text-green-400"
                }`}
              >
                {parking.status}
              </p>

              <p className="text-xs text-slate-300 mt-2">
                {parking.residentName ||
                  "Disponible"}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
}