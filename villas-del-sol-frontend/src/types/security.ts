export interface AuditLog {
  id: number;

  user: string;

  action: string;

  module: string;

  timestamp: string;

  severity:
    | "LOW"
    | "MEDIUM"
    | "HIGH";
}

export interface SecurityAlert {
  id: number;

  title: string;

  description: string;

  createdAt: string;

  priority:
    | "LOW"
    | "MEDIUM"
    | "HIGH";
}