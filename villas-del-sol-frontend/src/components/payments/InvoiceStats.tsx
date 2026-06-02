export default function InvoiceStats() {
  const stats = [
    {
      title: "Facturas Emitidas",
      value: "245",
    },
    {
      title: "Pendientes",
      value: "58",
    },
    {
      title: "Pagadas",
      value: "187",
    },
    {
      title: "Mora Generada",
      value: "L 34,500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {stats.map((item) => (
        <div
          key={item.title}
          className="bg-slate-800 border border-slate-700 rounded-2xl p-6"
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