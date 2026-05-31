export interface Payment {
  id: number;

  residentName: string;

  house: string;

  amount: number;

  paymentMethod:
    | "CASH"
    | "TRANSFER";

  status:
    | "PAID"
    | "PENDING"
    | "OVERDUE";

  month: string;

  paymentDate: string | null;
}