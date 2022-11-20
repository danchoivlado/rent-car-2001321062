export interface Job {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: {
    content: string;
    items: string[];
  };
  role: {
    content: string;
    items: string[];
  };
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
