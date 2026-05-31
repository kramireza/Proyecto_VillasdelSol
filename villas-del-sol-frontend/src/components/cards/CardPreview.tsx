interface Props {
  residentName: string;

  property: string;

  pedestrian: boolean;

  vehicle: boolean;

  rfidCode: string;
}

export default function CardPreview({
  residentName,
  property,
  pedestrian,
  vehicle,
  rfidCode,
}: Props) {
  return (
    <div className="max-w-md mx-auto">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden">
        <div className="bg-amber-500 p-4">
          <h3 className="text-black font-bold text-xl">
            Villas del Sol
          </h3>
        </div>

        <div className="p-6 space-y-4">

          <div>
            <p className="text-slate-400 text-sm">
              Residente
            </p>

            <p className="font-semibold text-white">
              {residentName}
            </p>
          </div>

          <div>
            <p className="text-slate-400 text-sm">
              Propiedad
            </p>

            <p className="font-semibold text-white">
              {property}
            </p>
          </div>

          <div>
            <p className="text-slate-400 text-sm">
              Permisos
            </p>

            <div className="mt-2 space-y-1">
              {pedestrian && (
                <div className="text-green-400">
                  ✓ Acceso Peatonal
                </div>
              )}

              {vehicle && (
                <div className="text-green-400">
                  ✓ Acceso Vehicular
                </div>
              )}
            </div>
          </div>

          <div>
            <p className="text-slate-400 text-sm">
              RFID
            </p>

            <p className="font-semibold text-white">
              {rfidCode}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}