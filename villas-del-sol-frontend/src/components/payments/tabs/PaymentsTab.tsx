import PaymentsStats from "../PaymentsStats";
import PaymentsFilters from "../PaymentsFilters";
import PaymentsTable from "../PaymentsTable";

import type { Payment } from "../../../types";

type Props = {
  search: string;
  payments: Payment[];
  onSearchChange: (value: string) => void;
};

export default function PaymentsTab({
  search,
  payments,
  onSearchChange,
}: Props) {
  return (
    <>
      <PaymentsStats />

      <PaymentsFilters
        search={search}
        onSearchChange={onSearchChange}
      />

      <PaymentsTable
        payments={payments}
      />
    </>
  );
}