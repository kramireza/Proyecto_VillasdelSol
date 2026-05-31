import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { day: "Lun", accesses: 120 },
  { day: "Mar", accesses: 210 },
  { day: "Mié", accesses: 180 },
  { day: "Jue", accesses: 260 },
  { day: "Vie", accesses: 320 },
  { day: "Sáb", accesses: 290 },
  { day: "Dom", accesses: 150 },
];

export default function AccessChart() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 h-[400px]">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">
          Accesos Semanales
        </h2>

        <p className="text-slate-400 mt-2">
          Actividad vehicular y peatonal.
        </p>
      </div>

      <ResponsiveContainer width="100%" height="80%">
        <AreaChart data={data}>
          <XAxis dataKey="day" />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="accesses"
            stroke="#f59e0b"
            fill="#f59e0b"
            fillOpacity={0.2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}