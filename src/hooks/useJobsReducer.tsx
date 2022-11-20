import data from "../data.json";
import { useReducer } from "react";
import jobsReducer from "../reducers/jobsReducer";
import {
  Job,
  JobAction,
  JobActionType,
  JobsFilter,
  JobsState,
} from "../interfaces/jobs.interface";

const useJobsReducer = (): [JobsState, React.Dispatch<JobAction>] => {
  const [jobs, dispatch] = useReducer(jobsReducer, { jobs: [...data] });

  return [jobs, dispatch];
};

export default useJobsReducer;
