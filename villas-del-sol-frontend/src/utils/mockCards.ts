import type {
  Card,
} from "../types/card";

export const mockCards: Card[] =
  [
    {
      id: 1,

      residentName:
        "Kevin Ramirez",

      property:
        "Casa A-12",

      cardNumber:
        "CRD-0001",

      rfidCode:
        "RFID-0001",

      permissions: {
        pedestrian: true,

        vehicle: true,
      },

      status:
        "ACTIVE",

      issueDate:
        "2026-01-01",
    },

    {
      id: 2,

      residentName:
        "Carlos Mendoza",

      property:
        "Edificio B1-101",

      cardNumber:
        "CRD-0002",

      rfidCode:
        "RFID-0002",

      permissions: {
        pedestrian: true,

        vehicle: false,
      },

      status:
        "BLOCKED",

      issueDate:
        "2026-02-01",
    },
  ];