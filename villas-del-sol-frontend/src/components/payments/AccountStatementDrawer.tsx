export default function AccountStatementDrawer() {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
      <h2 className="text-xl font-bold mb-4">
        Estado de Cuenta
      </h2>

      <div className="space-y-3">
        <div>
          Facturas Pendientes: L 8,500
        </div>

        <div>
          Facturas Pagadas: L 25,000
        </div>

        <div>
          Mora: L 500
        </div>

        <div className="font-bold text-amber-400">
          Saldo Actual: L 9,000
        </div>
      </div>
    </div>
  );
}