import type { Receipt } from "../types";

export const mockReceipts: Receipt[] = [
  {
    id: 1,
    number: "REC-000001",
    invoiceNumber: "FAC-000001",
    resident: "Kevin Ramirez",
    amount: 3500,
    paymentMethod: "TRANSFER",
    paymentDate: "2026-05-03",
  },
  {
    id: 2,
    number: "REC-000002",
    invoiceNumber: "FAC-000002",
    resident: "Carlos Mendoza",
    amount: 3500,
    paymentMethod: "CASH",
    paymentDate: "2026-05-08",
  },
  {
    id: 3,
    number: "REC-000003",
    invoiceNumber: "FAC-000003",
    resident: "María Flores",
    amount: 3500,
    paymentMethod: "TRANSFER",
    paymentDate: "2026-05-12",
  },
];