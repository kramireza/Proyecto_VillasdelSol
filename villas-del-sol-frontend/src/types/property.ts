export interface ParkingSpace {
  id: number;

  code: string;

  status:
    | "AVAILABLE"
    | "OCCUPIED";

  residentName?: string;
}

export interface Apartment {
  id: number;

  number: string;

  occupied: boolean;

  residentName?: string;
}

export interface Property {
  id: number;

  code: string;

  name: string;

  type:
    | "HOUSE"
    | "BUILDING";

  block: string;

  status:
    | "ACTIVE"
    | "INACTIVE";

  parkingSpaces: number;

  occupiedParkingSpaces: number;

  totalApartments?: number;

  apartments?: Apartment[];

  parkingData?: ParkingSpace[];

  notes?: string;
}