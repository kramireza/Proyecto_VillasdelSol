import {
  FaMoneyBillWave,
  FaFileInvoiceDollar,
  FaExclamationTriangle,
  FaWallet,
} from "react-icons/fa";

const stats = [
  {
    title: "Ingresos del Mes",

    value: "L 1,250,000",

    icon: <FaWallet />,
  },

  {
    title: "Facturas Emitidas",

    value: "1,245",

    icon: <FaFileInvoiceDollar />,
  },

  {
    title: "Pagos Pendientes",

    value: "57",

    icon: <FaMoneyBillWave />,
  },

  {
    title: "Residentes en Mora",

    value: "24",

    icon: <FaExclamationTriangle />,
  },
];

export default function PaymentsStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">
                {stat.title}
              </p>

              <h2 className="text-3xl font-bold mt-4">
                {stat.value}
              </h2>
            </div>

            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-2xl">
              {stat.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}