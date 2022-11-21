import { useParams, useNavigate } from "react-router-dom";
import { useJobs } from "../providers/JobsContext";
import { useEffect } from "react";
import "./job-page.scss";
import { useThemeContext } from "../providers/ThemeContext";
import useImportImage from "../hooks/useImportImage";
import SizeContext, { useSizeContext } from "../providers/SizeContext";
import "./job-page.scss";

const JobPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { jobs } = useJobs();
  const [darkThemeEnabled] = useThemeContext();

  const currentJob = jobs.filter((job) => job.id === Number(id));

  useEffect(() => {
    if (!currentJob.length) {
      navigate("/");
    }
  }, [currentJob]);

  const { logo, logoBackground, company, website } = currentJob[0];

  const sizeContext = useSizeContext();

  const [image, error, loading] = useImportImage({ logo });

  return (
    <div className="job">
      <div
        className={`jobHeader restrictionWrapper ${
          darkThemeEnabled ? "dark-secondary" : "white"
        }`}
      >
        <div
          className="imageContainer"
          style={{ backgroundColor: logoBackground }}
        >
          {!loading && error && <img src={image} alt="" />}
        </div>
        <div className="jobCompanyText">
          <h2 className="job-header-h2">{company}</h2>
          <p className="lightText">{website}</p>
        </div>
        <button
          className={`${
            darkThemeEnabled ? "buttonSecondaryDark" : "buttonSecondary"
          }`}
        >
          Company Site
        </button>
      </div>
      <div
        className={`jobMain restrictionWrapper ${
          darkThemeEnabled ? "dark-secondary" : "white"
        }`}
      >
        2
      </div>
      <div
        className={`jobFooter ${darkThemeEnabled ? "dark-secondary" : "white"}`}
      >
        <div className="restrictionWrapper">3</div>
      </div>
    </div>
  );
};

export default JobPage;
