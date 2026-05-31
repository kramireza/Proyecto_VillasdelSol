import type {
  ResidentFinancialStatus,
} from "../types/card";

export const mockResidentsForCards: ResidentFinancialStatus[] =
  [
    {
      residentName:
        "Kevin Ramirez",

      property:
        "Casa A-12",

      balanceStatus:
        "CURRENT",

      pendingMonths: 0,

      activeCards: 1,
    },

    {
      residentName:
        "Carlos Mendoza",

      property:
        "Edificio B1-101",

      balanceStatus:
        "LATE",

      pendingMonths: 2,

      activeCards: 1,
    },
  ];