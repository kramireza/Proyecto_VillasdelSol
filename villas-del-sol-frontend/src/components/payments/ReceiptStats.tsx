import {
  FaFileInvoiceDollar,
  FaMoneyBillWave,
  FaCalendarCheck,
  FaPrint,
} from "react-icons/fa";

import StatCard from "../shared/StatCard";

export default function ReceiptStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      <StatCard
        title="Recibos Emitidos"
        value="187"
        icon={<FaFileInvoiceDollar />}
      />

      <StatCard
        title="Monto Cobrado"
        value="L 654,200.00"
        icon={<FaMoneyBillWave />}
      />

      <StatCard
        title="Emitidos Hoy"
        value="12"
        icon={<FaCalendarCheck />}
      />

      <StatCard
        title="Reimpresiones"
        value="8"
        icon={<FaPrint />}
      />
    </div>
  );
}