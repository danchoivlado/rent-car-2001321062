import { Job, ListType } from "../../../interfaces";
import { useThemeContext } from "../../../providers/ThemeContext";
import JobSpecs from "../JobSpecs/JobSpecs";
import JobSpec from "../JobSpecs/JobSpecs";
import styles from "./jobMain.module.scss";

interface Props {
  job: Job;
}

const JobMain = ({
  job: { location, position, postedAt, description, requirements, role },
}: Props) => {
  const [darkThemeEnabled] = useThemeContext();

  return (
    <div
      className={`${styles.jobMain} ${styles.restrictionWrapper} ${
        darkThemeEnabled ? styles.darkSecondary : "white"
      }`}
    >
      <div className={styles.jobMainHeader}>
        <div>
          <p className={styles.lightText}>{postedAt}</p>
          <h1
            className={`${styles.jobTittleH1} ${
              darkThemeEnabled && styles.whiteText
            }`}
          >
            {position}
          </h1>
          <p className={`${styles.accentTextColor} ${styles.heavyFont}`}>
            {location}
          </p>
        </div>
        <div>
          <button className={styles.buttonPrimary}>Apply Now</button>
        </div>
      </div>
      <div
        className={`${styles.specs} ${darkThemeEnabled && styles.whiteText} `}
      >
        <p>{description}</p>
        <JobSpecs
          listType={ListType.UL}
          specsTypeText="Requirements"
          specs={requirements}
        />
        <JobSpecs
          listType={ListType.OL}
          specsTypeText="What You Will Do"
          specs={role}
        />
      </div>
    </div>
  );
};

export default JobMain;
