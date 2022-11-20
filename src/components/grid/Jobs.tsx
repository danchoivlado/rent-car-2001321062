import data from "../../data.json";
import { Job, JobsFilter, JobsState } from "../../interfaces/jobs.interface";
import JobItem from "./JobItem";
import "./jobs.scss";
import { useJobs } from "../../providers/JobsContext";

interface Props {
  // jobsState: JobsState;
}

const Jobs = () => {
  const jobsState = useJobs();

  return (
    <div className="gridContainer">
      {jobsState.jobs.map((job) => {
        return <JobItem key={job.id} jobInfo={{ ...job }}></JobItem>;
      })}
    </div>
  );
};

export default Jobs;
