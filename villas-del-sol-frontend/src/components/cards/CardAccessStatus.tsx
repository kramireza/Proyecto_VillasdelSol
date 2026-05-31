interface Props {
  active: boolean;
}

export default function CardAccessStatus({
  active,
}: Props) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">

      <h3 className="text-xl font-bold text-white mb-6">
        Estado de Acceso
      </h3>

      <div className="space-y-4">

        <div>
          <p className="text-slate-400 text-sm">
            RFID
          </p>

          <p
            className={
              active
                ? "text-green-400 font-semibold"
                : "text-red-400 font-semibold"
            }
          >
            {active
              ? "HABILITADO"
              : "BLOQUEADO"}
          </p>
        </div>

        <div>
          <p className="text-slate-400 text-sm">
            Torniquete
          </p>

          <p className="text-white">
            {active
              ? "Puede ingresar"
              : "Acceso denegado"}
          </p>
        </div>

        <div>
          <p className="text-slate-400 text-sm">
            Tranca Vehicular
          </p>

          <p className="text-white">
            {active
              ? "Puede ingresar"
              : "Acceso denegado"}
          </p>
        </div>

      </div>

    </div>
  );
}