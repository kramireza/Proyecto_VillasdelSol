import type { AccountStatementRow } from "../types";

export const mockAccountStatement: AccountStatementRow[] =
  [
    {
      id: 1,
      document: "FAC-000001",
      concept: "Mantenimiento",
      month: "Mayo 2026",
      amount: 3500,
      status: "PAID",
    },

    {
      id: 2,
      document: "FAC-000002",
      concept: "Mantenimiento",
      month: "Junio 2026",
      amount: 3500,
      status: "PENDING",
    },

    {
      id: 3,
      document: "FAC-000003",
      concept: "Mantenimiento",
      month: "Julio 2026",
      amount: 3500,
      status: "OVERDUE",
    },
  ];