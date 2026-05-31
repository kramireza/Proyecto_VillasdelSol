import type {
  Apartment,
} from "../../types/property";

interface Props {
  apartments: Apartment[];
}

export default function ApartmentsTable({
  apartments,
}: Props) {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-white">
          Apartamentos
        </h3>

        <button className="bg-amber-500 hover:bg-amber-600 text-black px-4 py-2 rounded-xl font-semibold">
          Nuevo Apartamento
        </button>
      </div>

      <div className="space-y-3">
        {apartments.map(
          (apartment) => (
            <div
              key={apartment.id}
              className="bg-slate-900 border border-slate-700 rounded-xl p-4 flex justify-between items-center"
            >
              <div>
                <p className="font-semibold text-white">
                  Apartamento {apartment.number}
                </p>

                <p className="text-sm text-slate-400">
                  {apartment.residentName ??
                    "Sin asignar"}
                </p>
              </div>

              <div className="flex gap-2">
                <button className="bg-slate-700 hover:bg-slate-600 px-3 py-2 rounded-lg">
                  Editar
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}