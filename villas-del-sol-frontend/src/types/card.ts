export interface Card {
  id: number;

  residentName: string;

  property: string;

  cardNumber: string;

  rfidCode: string;

  permissions: {
    pedestrian: boolean;

    vehicle: boolean;
  };

  status:
    | "ACTIVE"
    | "BLOCKED"
    | "EXPIRED";

  issueDate: string;
}

export interface ResidentFinancialStatus {
  residentName: string;

  property: string;

  balanceStatus:
    | "CURRENT"
    | "LATE";

  pendingMonths: number;

  activeCards: number;
}