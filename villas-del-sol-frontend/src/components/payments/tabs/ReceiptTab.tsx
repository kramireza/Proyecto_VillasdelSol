import ReceiptStats from "../ReceiptStats";
import ReceiptFilters from "../ReceiptFilters";
import ReceiptTable from "../ReceiptTable";

import type { Receipt } from "../../../types";

type Props = {
  search: string;
  receipts: Receipt[];
  onSearchChange: (value: string) => void;

  onView: (receipt: Receipt) => void;

  onPrint: (receipt: Receipt) => void;
};

export default function ReceiptsTab({
  search,
  receipts,
  onSearchChange,
  onView,
  onPrint,
}: Props) {
  return (
    <>
      <ReceiptStats />

      <ReceiptFilters
        search={search}
        onSearchChange={onSearchChange}
      />

      <ReceiptTable
        receipts={receipts}
        onView={onView}
        onPrint={onPrint}
      />
    </>
  );
}