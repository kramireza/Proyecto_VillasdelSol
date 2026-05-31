import {
  FaIdCard,
  FaBan,
  FaPrint,
  FaWifi,
} from "react-icons/fa";

const stats = [
  {
    title:
      "Carnets Activos",

    value:
      "642",

    icon:
      <FaIdCard />,
  },

  {
    title:
      "RFID Registrados",

    value:
      "642",

    icon:
      <FaWifi />,
  },

  {
    title:
      "Reposiciones",

    value:
      "34",

    icon:
      <FaPrint />,
  },

  {
    title:
      "Bloqueados",

    value:
      "18",

    icon:
      <FaBan />,
  },
];

export default function CardsStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="bg-slate-900 border border-slate-700 rounded-2xl p-6"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-slate-400 text-sm">
                {stat.title}
              </p>

              <h2 className="text-3xl font-bold text-white mt-4">
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