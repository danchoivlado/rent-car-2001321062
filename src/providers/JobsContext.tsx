import { createContext, useContext } from "react";
import { JobAction, JobsState } from "../interfaces";
import useJobsReducer from "../hooks/useJobsReducer";

const JobsContextProvider = createContext<JobsState>({ jobs: [] });
const DispatchContextProvider = createContext<React.Dispatch<JobAction> | null>(
  null
);

interface Props {
  children?: React.ReactNode;
}

const JobsContext = ({ children }: Props) => {
  const [jobs, dispatch] = useJobsReducer();

  return (
    <JobsContextProvider.Provider value={jobs}>
      <DispatchContextProvider.Provider value={dispatch}>
        {children}
      </DispatchContextProvider.Provider>
    </JobsContextProvider.Provider>
  );
};

export const useJobs = () => {
  const jobs = useContext(JobsContextProvider);
  return jobs;
};

export const useDispatch = () => {
  const dispatch = useContext(DispatchContextProvider);
  return dispatch;
};

export default JobsContext;
