import type {
  AuditLog,
  SecurityAlert,
} from "../types/security";

export const mockAuditLogs: AuditLog[] =
  [
    {
      id: 1,

      user: "Administrador",

      action:
        "Creó nuevo residente",

      module:
        "Residentes",

      timestamp:
        "2026-05-28 09:12",

      severity: "LOW",
    },

    {
      id: 2,

      user: "Cajero",

      action:
        "Registró pago",

      module:
        "Finanzas",

      timestamp:
        "2026-05-28 09:55",

      severity: "LOW",
    },

    {
      id: 3,

      user: "Administrador",

      action:
        "Desbloqueó carnet",

      module:
        "Accesos",

      timestamp:
        "2026-05-28 10:02",

      severity: "MEDIUM",
    },

    {
      id: 4,

      user: "Administrador",

      action:
        "Modificó datos de residente",

      module:
        "Residentes",

      timestamp:
        "2026-05-28 10:15",

      severity: "HIGH",
    },
  ];

export const mockSecurityAlerts: SecurityAlert[] =
  [
    {
      id: 1,

      title:
        "Carnet Bloqueado Utilizado",

      description:
        "Intento de acceso con carnet suspendido.",

      createdAt:
        "2026-05-28 10:35",

      priority: "HIGH",
    },

    {
      id: 2,

      title:
        "Residente en Mora",

      description:
        "Acceso suspendido automáticamente.",

      createdAt:
        "2026-05-28 08:00",

      priority: "MEDIUM",
    },

    {
      id: 3,

      title:
        "Cámara Desconectada",

      description:
        "Perimetral Este fuera de línea.",

      createdAt:
        "2026-05-28 10:10",

      priority: "HIGH",
    },
  ];