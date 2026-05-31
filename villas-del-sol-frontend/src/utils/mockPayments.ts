import type { Payment } from "../types/payment";

export const mockPayments: Payment[] = [
  {
    id: 1,

    residentName: "Kevin Ramirez",

    house: "A-12",

    amount: 3500,

    paymentMethod: "TRANSFER",

    status: "PAID",

    month: "Mayo 2026",

    paymentDate: "2026-05-03",
  },

  {
    id: 2,

    residentName: "Carlos Mendoza",

    house: "B-15",

    amount: 3500,

    paymentMethod: "CASH",

    status: "OVERDUE",

    month: "Mayo 2026",

    paymentDate: null,
  },

  {
    id: 3,

    residentName: "María Flores",

    house: "C-22",

    amount: 3500,

    paymentMethod: "TRANSFER",

    status: "PENDING",

    month: "Mayo 2026",

    paymentDate: null,
  },
];