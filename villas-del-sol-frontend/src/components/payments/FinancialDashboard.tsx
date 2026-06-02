export default function FinancialDashboard() {
  const stats = [
    {
      title: "Facturación Mes",
      value: "L 485,000",
    },
    {
      title: "Cobrado",
      value: "L 410,000",
    },
    {
      title: "Pendiente",
      value: "L 75,000",
    },
    {
      title: "Morosos",
      value: "23",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {stats.map((item) => (
        <div
          key={item.title}
          className="bg-slate-800 rounded-2xl p-6 border border-slate-700"
        >
          <p className="text-slate-400 text-sm">
            {item.title}
          </p>

          <h3 className="text-2xl font-bold mt-2">
            {item.value}
          </h3>
        </div>
      ))}
    </div>
  );
}