import type { Resident } from "../types/resident";

export const mockResidents: Resident[] = [
  {
    id: 1,

    fullName: "Kevin Ramirez",

    identityNumber:
      "0801-2001-12345",

    phone: "9999-9999",

    email: "kevin@email.com",

    residentType: "OWNER",

    houseNumber: "12",

    block: "A",

    financialStatus: "ACTIVE",

    activeCards: 3,

    vehicles: 2,

    vehiclesData: [
      {
        id: 1,

        plate: "HAA-2034",

        brand: "Toyota",

        model: "Corolla",

        color: "Blanco",
      },

      {
        id: 2,

        plate: "PDH-9921",

        brand: "Honda",

        model: "Civic",

        color: "Negro",
      },
    ],

    cardsData: [
      {
        id: 1,

        code: "RFID-0001",

        type: "VEHICULAR",

        status: "ACTIVE",
      },

      {
        id: 2,

        code: "RFID-0002",

        type: "PEDESTRIAN",

        status: "ACTIVE",
      },
    ],

    accessLogs: [
      {
        id: 1,

        accessType: "VEHICULAR",

        result: "AUTHORIZED",

        timestamp:
          "2026-05-28 10:42 AM",
      },

      {
        id: 2,

        accessType: "PEDESTRIAN",

        result: "AUTHORIZED",

        timestamp:
          "2026-05-28 08:15 AM",
      },
    ],
  },

  {
    id: 2,

    fullName: "Carlos Mendoza",

    identityNumber:
      "0801-1999-44444",

    phone: "9888-7777",

    email: "carlos@email.com",

    residentType: "TENANT",

    houseNumber: "15",

    block: "B",

    financialStatus: "OVERDUE",

    activeCards: 1,

    vehicles: 1,

    vehiclesData: [
      {
        id: 1,

        plate: "PDR-1234",

        brand: "Hyundai",

        model: "Elantra",

        color: "Gris",
      },
    ],

    cardsData: [
      {
        id: 1,

        code: "RFID-0101",

        type: "BOTH",

        status: "BLOCKED",
      },
    ],

    accessLogs: [
      {
        id: 1,

        accessType: "VEHICULAR",

        result: "DENIED",

        timestamp:
          "2026-05-28 09:02 AM",
      },
    ],
  },
];