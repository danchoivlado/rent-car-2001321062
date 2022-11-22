import { useJobs } from "../../providers/JobsContext";
import JobItem from "./JobItem";
import "./jobs.scss";

interface Props {
  // jobsState: JobsState;
}

const Jobs = () => {
  const jobsState = useJobs();

  const jobs = jobsState.filter ? jobsState.filter : jobsState.jobs;

  return (
    <div className="gridContainer">
      {jobs.map((job) => {
        return <JobItem key={job.id} jobInfo={{ ...job }}></JobItem>;
      })}
    </div>
  );
};

export default Jobs;
