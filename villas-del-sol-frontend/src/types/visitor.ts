export interface VisitorQr {
  id: number;

  residentName: string;

  visitorName: string;

  qrCode: string;

  validFrom: string;

  validUntil: string;

  usageType:
    | "SINGLE_USE"
    | "MULTIPLE_USE";

  status:
    | "ACTIVE"
    | "USED"
    | "EXPIRED"
    | "BLOCKED";
}