import type {
  AccessEvent,
  DeviceStatus,
} from "../types/access";

export const mockAccessEvents: AccessEvent[] =
  [
    {
      id: 1,

      resident: "Kevin Ramirez",

      accessType: "VEHICULAR",

      plate: "HAA-2034",

      result: "AUTHORIZED",

      device:
        "Tranca Principal Norte",

      timestamp:
        "2026-05-28 10:42 AM",
    },

    {
      id: 2,

      resident: "Carlos Mendoza",

      accessType: "PEDESTRIAN",

      result: "DENIED",

      device:
        "Torniquete Principal",

      timestamp:
        "2026-05-28 10:35 AM",
    },

    {
      id: 3,

      resident: "Vehículo Desconocido",

      accessType: "LPR",

      plate: "PDH-9921",

      result: "ALERT",

      device: "Cámara LPR Entrada",

      timestamp:
        "2026-05-28 10:30 AM",
    },

    {
      id: 4,

      resident: "Visitante QR",

      accessType: "QR",

      result: "AUTHORIZED",

      device:
        "Acceso Visitantes",

      timestamp:
        "2026-05-28 10:20 AM",
    },
  ];

export const mockDevices: DeviceStatus[] =
  [
    {
      id: 1,

      name:
        "Tranca Principal Norte",

      type: "BARRIER",

      status: "ONLINE",
    },

    {
      id: 2,

      name:
        "Torniquete Principal",

      type: "TURNSTILE",

      status: "ONLINE",
    },

    {
      id: 3,

      name:
        "Cámara LPR Entrada",

      type: "CAMERA",

      status: "WARNING",
    },

    {
      id: 4,

      name:
        "Lector RFID Norte",

      type: "RFID",

      status: "ONLINE",
    },
  ];