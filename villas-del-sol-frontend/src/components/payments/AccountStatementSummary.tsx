export default function AccountStatementSummary() {
  return (
    <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6">
      <h2 className="text-2xl font-bold mb-6">
        Resumen Financiero
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <p className="text-slate-400">
            Residente
          </p>

          <h3 className="text-xl font-semibold">
            Kevin Ramirez
          </h3>
        </div>

        <div>
          <p className="text-slate-400">
            Propiedad
          </p>

          <h3 className="text-xl font-semibold">
            Casa A-12
          </h3>
        </div>

        <div>
          <p className="text-slate-400">
            Total Pendiente
          </p>

          <h3 className="text-red-400 text-xl font-bold">
            L 7,000.00
          </h3>
        </div>

        <div>
          <p className="text-slate-400">
            Último Pago
          </p>

          <h3 className="text-green-400 text-xl font-bold">
            03/05/2026
          </h3>
        </div>
      </div>
    </div>
  );
}