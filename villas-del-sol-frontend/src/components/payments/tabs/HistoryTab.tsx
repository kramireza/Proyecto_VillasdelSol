import FinancialHistoryStats from "../FinancialHistoryStats";
import FinancialHistoryFilters from "../FinancialHistoryFilters";
import FinancialHistoryTable from "../FinancialHistoryTable";

import type {
  FinancialHistory,
} from "../../../types";

type Props = {
  search: string;

  history: FinancialHistory[];

  onSearchChange: (
    value: string
  ) => void;
};

export default function HistoryTab({
  search,
  history,
  onSearchChange,
}: Props) {
  return (
    <div className="space-y-8">
      <FinancialHistoryStats />

      <FinancialHistoryFilters
        search={search}
        onSearchChange={onSearchChange}
      />

      <FinancialHistoryTable
        history={history}
      />
    </div>
  );
}