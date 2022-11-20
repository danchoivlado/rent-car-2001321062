import "./job.scss";
import useImportImage from "../../hooks/useImportImage";
import { useThemeContext } from "../../providers/ThemeContext";

interface Props {
  jobInfo: {
    logo: string;
    postedAt: string;
    contract: string;
    company: string;
    location: string;
    logoBackground: string;
    position: string;
  };
}

const JobItem = ({ jobInfo }: Props) => {
  const {
    company,
    contract,
    location,
    logo,
    postedAt,
    logoBackground,
    position,
  } = jobInfo;
  const imageName = logo.substring(logo.lastIndexOf("/")).slice(1);
  const [darkThemeEnabled] = useThemeContext();
  const [image, error, loading] = useImportImage({ imageName: imageName });

  return (
    <div
      className={`jobContent ${darkThemeEnabled ? "dark-secondary" : "white"}`}
    >
      <div
        className="imageContainer"
        style={{ backgroundColor: logoBackground }}
      >
        {!loading && !error.error && <img src={image}></img>}
      </div>
      <p className="lightText">
        {postedAt}
        &nbsp; &middot; &nbsp;
        {contract}
      </p>
      <p
        className={`job-tittle ${darkThemeEnabled ? "whiteText" : "darkText"}`}
      >
        {position}
      </p>
      <p className="lightText">{company}</p>
      <p className="location">{location}</p>
    </div>
  );
};

export default JobItem;
