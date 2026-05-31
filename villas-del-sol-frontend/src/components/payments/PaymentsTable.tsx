import type { Payment } from "../../types/payment";

interface Props {
  payments: Payment[];
}

export default function PaymentsTable({
  payments,
}: Props) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
      <div className="overflow-auto">
        <table className="w-full">
          <thead className="bg-slate-950">
            <tr className="text-left text-slate-400">
              <th className="p-5">
                Residente
              </th>

              <th className="p-5">
                Vivienda
              </th>

              <th className="p-5">
                Mes
              </th>

              <th className="p-5">
                Monto
              </th>

              <th className="p-5">
                Método
              </th>

              <th className="p-5">
                Estado
              </th>

              <th className="p-5">
                Fecha Pago
              </th>
            </tr>
          </thead>

          <tbody>
            {payments.map((payment) => (
              <tr
                key={payment.id}
                className="border-t border-slate-800 hover:bg-slate-800/40 transition"
              >
                <td className="p-5">
                  {payment.residentName}
                </td>

                <td className="p-5">
                  {payment.house}
                </td>

                <td className="p-5">
                  {payment.month}
                </td>

                <td className="p-5">
                  L{" "}
                  {payment.amount.toLocaleString()}
                </td>

                <td className="p-5">
                  {payment.paymentMethod}
                </td>

                <td className="p-5">
                  <PaymentStatusBadge
                    status={payment.status}
                  />
                </td>

                <td className="p-5">
                  {payment.paymentDate ||
                    "Pendiente"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

interface BadgeProps {
  status:
    | "PAID"
    | "PENDING"
    | "OVERDUE";
}

function PaymentStatusBadge({
  status,
}: BadgeProps) {
  const styles = {
    PAID:
      "bg-green-500/20 text-green-400",

    PENDING:
      "bg-yellow-500/20 text-yellow-400",

    OVERDUE:
      "bg-red-500/20 text-red-400",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm ${styles[status]}`}
    >
      {status}
    </span>
  );
}