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
          job.location.toLowerCase().includes(location.toLowerCase())
        );
      }
      if (title) {
        filteredValue = filteredValue.filter((job) =>
          job.position.toLowerCase().includes(title.toLowerCase())
        );
      }

      return { ...state, filter: filteredValue };

    case JobActionType.CLEAR:
      return { ...state, filter: undefined };
  }
}
