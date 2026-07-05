import type {
  FinancialHistory,
} from "../types";

export const mockFinancialHistory: FinancialHistory[] =
  [
    {
      id: 1,
      date: "2026-05-03",
      resident: "Kevin Ramirez",
      type: "PAYMENT",
      description:
        "Pago cuota mantenimiento",
      amount: 3500,
      user: "Administrador",
    },

    {
      id: 2,
      date: "2026-05-03",
      resident: "Kevin Ramirez",
      type: "RECEIPT",
      description:
        "Recibo REC-000001 emitido",
      amount: 3500,
      user: "Administrador",
    },

    {
      id: 3,
      date: "2026-05-10",
      resident: "Carlos Mendoza",
      type: "SURCHARGE",
      description:
        "Aplicación de mora",
      amount: 500,
      user: "Sistema",
    },

    {
      id: 4,
      date: "2026-05-12",
      resident: "Ana Flores",
      type: "INVOICE",
      description:
        "Factura FAC-000010 generada",
      amount: 3500,
      user: "Administrador",
    },
  ];