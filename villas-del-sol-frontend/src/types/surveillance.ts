export interface CameraDevice {
  id: number;

  name: string;

  location: string;

  status:
    | "ONLINE"
    | "OFFLINE"
    | "WARNING";

  streamAvailable: boolean;
}

export interface SurveillanceEvent {
  id: number;

  type:
    | "LPR"
    | "CAMERA"
    | "SECURITY";

  title: string;

  description: string;

  timestamp: string;

  priority:
    | "LOW"
    | "MEDIUM"
    | "HIGH";
}