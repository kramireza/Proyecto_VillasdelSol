import type { Receipt } from "../types/financial";

export const mockReceipts: Receipt[] = [
  {
    id: 1,
    number: "REC-0001",
    invoiceNumber: "FAC-0001",
    resident: "Carlos Mendoza",
    amount: "L 4,500",
    paymentMethod: "Transferencia",
    paymentDate: "2026-06-15",
  },
  {
    id: 2,
    number: "REC-0002",
    invoiceNumber: "FAC-0002",
    resident: "Ana Flores",
    amount: "L 3,200",
    paymentMethod: "Efectivo",
    paymentDate: "2026-06-16",
  },
];