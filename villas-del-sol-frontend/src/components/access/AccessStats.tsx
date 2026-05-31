import {
  FaCar,
  FaQrcode,
  FaExclamationTriangle,
  FaShieldAlt,
} from "react-icons/fa";

const stats = [
  {
    title: "Accesos Hoy",

    value: "842",

    icon: <FaCar />,
  },

  {
    title: "QR Activos",

    value: "126",

    icon: <FaQrcode />,
  },

  {
    title: "Alertas Operativas",

    value: "12",

    icon: <FaExclamationTriangle />,
  },

  {
    title: "Dispositivos Online",

    value: "24",

    icon: <FaShieldAlt />,
  },
];

export default function AccessStats() {
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