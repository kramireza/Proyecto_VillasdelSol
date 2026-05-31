interface Props {
  residentName: string;

  property: string;

  pedestrian: boolean;

  vehicle: boolean;

  rfidCode: string;
}

export default function CardPrintPreview({
  residentName,
  property,
  pedestrian,
  vehicle,
  rfidCode,
}: Props) {
  return (
    <div className="max-w-xl mx-auto">
      <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
        <div className="bg-amber-500 p-4">
          <h2 className="text-black text-xl font-bold">
            Villas del Sol
          </h2>
        </div>

        <div className="p-6 text-black space-y-4">

          <div>
            <strong>
              Residente:
            </strong>
            {" "}
            {residentName}
          </div>

          <div>
            <strong>
              Propiedad:
            </strong>
            {" "}
            {property}
          </div>

          <div>
            <strong>
              Permisos:
            </strong>

            <ul className="mt-2 list-disc pl-5">
              {pedestrian && (
                <li>
                  Acceso Peatonal
                </li>
              )}

              {vehicle && (
                <li>
                  Acceso Vehicular
                </li>
              )}
            </ul>
          </div>

          <div>
            <strong>
              RFID:
            </strong>
            {" "}
            {rfidCode}
          </div>

        </div>
      </div>
    </div>
  );
}