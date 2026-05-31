export interface Vehicle {
  id: number;

  plate: string;

  brand: string;

  model: string;

  color: string;
}

export interface Card {
  id: number;

  code: string;

  type:
    | "PEDESTRIAN"
    | "VEHICULAR"
    | "BOTH";

  status:
    | "ACTIVE"
    | "BLOCKED";
}

export interface AccessLog {
  id: number;

  accessType:
    | "VEHICULAR"
    | "PEDESTRIAN";

  result:
    | "AUTHORIZED"
    | "DENIED";

  timestamp: string;
}

export interface Resident {
  id: number;

  fullName: string;

  identityNumber: string;

  phone: string;

  email: string;

  residentType:
    | "OWNER"
    | "TENANT";

  houseNumber: string;

  block: string;

  financialStatus:
    | "ACTIVE"
    | "PENDING"
    | "OVERDUE";

  activeCards: number;

  vehicles: number;

  vehiclesData?: Vehicle[];

  cardsData?: Card[];

  accessLogs?: AccessLog[];
}