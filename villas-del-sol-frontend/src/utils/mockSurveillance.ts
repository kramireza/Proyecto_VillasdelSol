import type {
  CameraDevice,
  SurveillanceEvent,
} from "../types/surveillance";

export const mockCameras: CameraDevice[] =
  [
    {
      id: 1,

      name:
        "Camara Entrada Principal",

      location:
        "Portón Principal",

      status: "ONLINE",

      streamAvailable: true,
    },

    {
      id: 2,

      name:
        "Camara Torniquete",

      location:
        "Acceso Peatonal",

      status: "ONLINE",

      streamAvailable: true,
    },

    {
      id: 3,

      name:
        "Camara LPR Norte",

      location:
        "Tranca Norte",

      status: "WARNING",

      streamAvailable: true,
    },

    {
      id: 4,

      name:
        "Camara Perimetral Este",

      location:
        "Perímetro Este",

      status: "OFFLINE",

      streamAvailable: false,
    },
  ];

export const mockSurveillanceEvents =
  [
    {
      id: 1,

      type: "LPR",

      title:
        "Placa Detectada",

      description:
        "Vehículo HAA-2034 detectado.",

      timestamp:
        "2026-05-28 10:42",

      priority: "LOW",
    },

    {
      id: 2,

      type: "SECURITY",

      title:
        "Intento de Acceso Denegado",

      description:
        "Carnet bloqueado utilizado.",

      timestamp:
        "2026-05-28 10:35",

      priority: "HIGH",
    },

    {
      id: 3,

      type: "CAMERA",

      title:
        "Cámara Sin Conexión",

      description:
        "Perimetral Este fuera de línea.",

      timestamp:
        "2026-05-28 10:10",

      priority: "HIGH",
    },
  ] satisfies SurveillanceEvent[];