interface Props {
  current: boolean;

  pendingMonths: number;
}

export default function CardFinancialStatus({
  current,
  pendingMonths,
}: Props) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">

      <h3 className="text-xl font-bold text-white mb-6">
        Estado Financiero
      </h3>

      <div className="space-y-4">

        <div>
          <p className="text-slate-400 text-sm">
            Estado
          </p>

          <p
            className={
              current
                ? "text-green-400 font-semibold"
                : "text-red-400 font-semibold"
            }
          >
            {current
              ? "AL DÍA"
              : "MOROSO"}
          </p>
        </div>

        <div>
          <p className="text-slate-400 text-sm">
            Meses Pendientes
          </p>

          <p className="text-white font-semibold">
            {pendingMonths}
          </p>
        </div>

      </div>

    </div>
  );
}