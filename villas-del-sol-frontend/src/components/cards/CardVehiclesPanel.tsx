const vehicles = [
  {
    plate: "PDE-1234",
    brand: "Toyota",
    model: "Hilux",
  },

  {
    plate: "HAB-7788",
    brand: "Honda",
    model: "CRV",
  },
];

export default function CardVehiclesPanel() {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">

      <h3 className="text-xl font-bold text-white mb-6">
        Vehículos Asociados
      </h3>

      <div className="space-y-4">

        {vehicles.map(
          (vehicle) => (
            <div
              key={vehicle.plate}
              className="bg-slate-900 border border-slate-700 rounded-xl p-4"
            >
              <p className="text-white font-semibold">
                {vehicle.plate}
              </p>

              <p className="text-slate-400">
                {vehicle.brand} {vehicle.model}
              </p>
            </div>
          )
        )}

      </div>

    </div>
  );
}