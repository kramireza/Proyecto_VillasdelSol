export interface AccountStatementRow {
  id: number;

  document: string;

  concept: string;

  month: string;

  amount: number;

  status:
    | "PAID"
    | "PENDING"
    | "OVERDUE";
}