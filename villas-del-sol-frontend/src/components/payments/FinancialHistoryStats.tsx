import {
  FaHistory,
  FaMoneyBillWave,
  FaFileInvoiceDollar,
  FaUserShield,
} from "react-icons/fa";

import StatCard from "../shared/StatCard";

export default function FinancialHistoryStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      <StatCard
        title="Movimientos"
        value="486"
        icon={<FaHistory />}
      />

      <StatCard
        title="Pagos"
        value="214"
        icon={<FaMoneyBillWave />}
      />

      <StatCard
        title="Facturas"
        value="198"
        icon={<FaFileInvoiceDollar />}
      />

      <StatCard
        title="Usuarios"
        value="6"
        icon={<FaUserShield />}
      />
    </div>
  );
}