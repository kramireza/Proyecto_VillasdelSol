export interface FinancialHistory {
  id: number;

  date: string;

  resident: string;

  type:
    | "INVOICE"
    | "PAYMENT"
    | "RECEIPT"
    | "SURCHARGE"
    | "ADJUSTMENT"
    | "CANCELLED";

  description: string;

  amount: number;

  user: string;
}