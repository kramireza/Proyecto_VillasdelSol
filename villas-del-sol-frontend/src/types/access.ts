export interface AccessEvent {
  id: number;

  resident: string;

  accessType:
    | "VEHICULAR"
    | "PEDESTRIAN"
    | "QR"
    | "LPR";

  plate?: string;

  result:
    | "AUTHORIZED"
    | "DENIED"
    | "ALERT";

  device: string;

  timestamp: string;
}

export interface DeviceStatus {
  id: number;

  name: string;

  type:
    | "BARRIER"
    | "TURNSTILE"
    | "CAMERA"
    | "RFID";

  status:
    | "ONLINE"
    | "OFFLINE"
    | "WARNING";
}