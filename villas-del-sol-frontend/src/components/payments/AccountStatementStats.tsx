import {
  FaMoneyBillWave,
  FaFileInvoiceDollar,
  FaExclamationTriangle,
  FaCheckCircle,
} from "react-icons/fa";

import StatCard from "../shared/StatCard";

export default function AccountStatementStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      <StatCard
        title="Saldo Pendiente"
        value="L 18,500"
        icon={<FaMoneyBillWave />}
      />

      <StatCard
        title="Facturas"
        value="5"
        icon={<FaFileInvoiceDollar />}
      />

      <StatCard
        title="En Mora"
        value="2"
        icon={<FaExclamationTriangle />}
      />

      <StatCard
        title="Pagadas"
        value="12"
        icon={<FaCheckCircle />}
      />
    </div>
  );
}