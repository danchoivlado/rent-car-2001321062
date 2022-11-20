import {
  JobAction,
  JobsState,
  JobActionType,
  Job,
} from "../interfaces/jobs.interface";

export default function (state: JobsState, action: JobAction): JobsState {
  switch (action.type) {
    case JobActionType.FILTER:
      let filteredValue = state.jobs;
      const { fullTime, location, title } = action.payload;

      if (fullTime) {
        filteredValue = filteredValue.filter(
          (job) => job.contract === "Full Time"
        );
      }
      if (location) {
        filteredValue = filteredValue.filter((job) =>
          job.location.includes(location)
        );
      }
      if (title) {
        filteredValue = filteredValue.filter((job) =>
          job.position.includes(title)
        );
      }

      return { jobs: filteredValue };
      break;
  }
}
