export interface Job {
  id: number;
  vehicleType: string;
  brand: string;
  model: string;
  year: number;
  numberOfSeats: number;
  picture: string;
  pricePerDay: number;
  numberOfFreeVehicles: number;
  logo: string;
}

export interface JobSpec {
  content: string;
  items: string[];
}

export interface JobsFilter {
  title: string;
  location: string;
  fullTime: boolean;
}

export enum JobActionType {
  FILTER = "FILTER",
  CLEAR = "CLEAR",
}

export interface JobAction {
  type: JobActionType;
  payload: JobsFilter;
}

export interface JobsState {
  jobs: Job[];
  filter?: Job[];
}
