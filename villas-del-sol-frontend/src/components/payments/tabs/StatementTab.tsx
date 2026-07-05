import AccountStatementStats from "../AccountStatementStats";
import AccountStatementFilters from "../AccountStatementFilters";
import AccountStatementSummary from "../AccountStatementSummary";
import AccountStatementTable from "../AccountStatementTable";

import type {
  AccountStatementRow,
} from "../../../types";

type Props = {
  search: string;

  onSearchChange: (
    value: string
  ) => void;

  rows: AccountStatementRow[];

  onViewInvoice: (
    row: AccountStatementRow
  ) => void;
};

export default function StatementTab({
  search,
  onSearchChange,
  rows,
  onViewInvoice,
}: Props) {
  return (
    <div className="space-y-8">
      <AccountStatementStats />

      <AccountStatementFilters
        search={search}
        onSearchChange={onSearchChange}
      />

      <AccountStatementSummary />

      <AccountStatementTable
        rows={rows}
        onViewInvoice={
          onViewInvoice
        }
      />
    </div>
  );
}