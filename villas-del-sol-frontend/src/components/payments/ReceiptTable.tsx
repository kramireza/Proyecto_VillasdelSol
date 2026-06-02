const receipts = [
  {
    number: "REC-001",
    resident: "Carlos Mendoza",
    amount: "L 4,500",
  },
  {
    number: "REC-002",
    resident: "Ana Flores",
    amount: "L 3,200",
  },
];

export default function ReceiptTable() {
  return (
    <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
      <table className="w-full">
        <thead className="bg-slate-900">
          <tr>
            <th className="p-4 text-left">
              Recibo
            </th>

            <th className="p-4 text-left">
              Residente
            </th>

            <th className="p-4 text-left">
              Monto
            </th>
          </tr>
        </thead>

        <tbody>
          {receipts.map((receipt) => (
            <tr
              key={receipt.number}
              className="border-t border-slate-700"
            >
              <td className="p-4">
                {receipt.number}
              </td>

              <td className="p-4">
                {receipt.resident}
              </td>

              <td className="p-4">
                {receipt.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}