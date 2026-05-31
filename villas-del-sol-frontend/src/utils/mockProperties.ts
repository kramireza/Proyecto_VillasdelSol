import type {
  Property,
} from "../types/property";

export const mockProperties: Property[] =
  [
    {
      id: 1,

      code: "CASA-A12",

      name: "Casa A-12",

      type: "HOUSE",

      block: "A",

      status: "ACTIVE",

      parkingSpaces: 2,

      occupiedParkingSpaces: 2,

      parkingData: [
        {
          id: 1,

          code: "A12-P1",

          status: "OCCUPIED",

          residentName:
            "Kevin Ramirez",
        },

        {
          id: 2,

          code: "A12-P2",

          status: "OCCUPIED",

          residentName:
            "Kevin Ramirez",
        },
      ],
    },

    {
      id: 2,

      code: "EDIF-B1",

      name:
        "Edificio Los Robles",

      type: "BUILDING",

      block: "B",

      status: "ACTIVE",

      parkingSpaces: 10,

      occupiedParkingSpaces: 6,

      apartments: [
        {
          id: 1,

          number: "101",

          residentName:
            "Carlos Mendoza",

          occupied: true,
        },

        {
          id: 2,

          number: "102",

          occupied: false,
        },
      ],

      parkingData: [
        {
          id: 1,

          code: "B1-P1",

          status: "OCCUPIED",

          residentName:
            "Carlos Mendoza",
        },

        {
          id: 2,

          code: "B1-P2",

          status: "AVAILABLE",
        },
      ],
    },
  ];