import {
  FaBuilding,
  FaHome,
  FaParking,
  FaWarehouse,
} from "react-icons/fa";

const stats = [
  {
    title: "Casas",

    value: "125",

    icon: <FaHome />,
  },

  {
    title: "Edificios",

    value: "8",

    icon: <FaBuilding />,
  },

  {
    title: "Apartamentos",

    value: "96",

    icon: <FaWarehouse />,
  },

  {
    title: "Parqueos",

    value: "284",

    icon: <FaParking />,
  },
];

export default function PropertiesStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
        >
          <div className="flex justify-between items-center">
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