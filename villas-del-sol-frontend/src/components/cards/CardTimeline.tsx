const events = [
  {
    id: 1,
    title: "Carnet Emitido",
    date: "05/01/2026",
  },

  {
    id: 2,
    title: "Reimpresión",
    date: "10/03/2026",
  },

  {
    id: 3,
    title: "Reposición RFID",
    date: "15/05/2026",
  },
];

export default function CardTimeline() {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">

      <h3 className="text-xl font-bold text-white mb-6">
        Historial Operativo
      </h3>

      <div className="space-y-6">

        {events.map(
          (event) => (
            <div
              key={event.id}
              className="flex gap-4"
            >
              <div className="w-4 h-4 rounded-full bg-amber-500 mt-1" />

              <div>
                <p className="font-semibold text-white">
                  {event.title}
                </p>

                <p className="text-slate-400 text-sm">
                  {event.date}
                </p>
              </div>
            </div>
          )
        )}

      </div>

    </div>
  );
}