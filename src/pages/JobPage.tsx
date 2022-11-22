import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import JobHeader from "../components/job/jobHeader/JobHeader";
import { useJobs } from "../providers/JobsContext";
import { useThemeContext } from "../providers/ThemeContext";
import JobMain from "../components/job/jobMain/JobMain";
import "./job-page.scss";
import JobFooter from "../components/job/JobFooter/JobFooter";

const JobPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { jobs } = useJobs();
  const [darkThemeEnabled] = useThemeContext();

  const currentJob = jobs.filter((job) => job.id === Number(id));
  const { company, position } = currentJob[0];

  useEffect(() => {
    if (!currentJob.length) {
      navigate("/");
    }
  }, [currentJob]);

  return (
    <div className="job">
      <JobHeader {...currentJob[0]} />
      <JobMain job={currentJob[0]}></JobMain>
      <JobFooter company={company} position={position} />
    </div>
  );
};

export default JobPage;
