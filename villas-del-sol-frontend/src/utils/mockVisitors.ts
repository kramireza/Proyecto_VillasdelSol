import type { VisitorQr } from "../types/visitor";

export const mockVisitors: VisitorQr[] =
  [
    {
      id: 1,

      residentName:
        "Kevin Ramirez",

      visitorName:
        "José Hernández",

      qrCode:
        "QR-2026-0001",

      validFrom:
        "2026-05-28 08:00",

      validUntil:
        "2026-05-28 18:00",

      usageType:
        "SINGLE_USE",

      status: "ACTIVE",
    },

    {
      id: 2,

      residentName:
        "Carlos Mendoza",

      visitorName:
        "María Flores",

      qrCode:
        "QR-2026-0002",

      validFrom:
        "2026-05-27 08:00",

      validUntil:
        "2026-05-27 18:00",

      usageType:
        "SINGLE_USE",

      status: "EXPIRED",
    },

    {
      id: 3,

      residentName:
        "Kevin Ramirez",

      visitorName:
        "Proveedor Internet",

      qrCode:
        "QR-2026-0003",

      validFrom:
        "2026-05-28 07:00",

      validUntil:
        "2026-05-28 19:00",

      usageType:
        "MULTIPLE_USE",

      status: "USED",
    },
  ];