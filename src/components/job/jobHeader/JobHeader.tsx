import useImportImage from "../../../hooks/useImportImage";
import { useThemeContext } from "../../../providers/ThemeContext";
import styles from "./jobHeader.module.scss";

interface Props {
  logo: string;
  logoBackground: string;
  company: string;
  website: string;
}

const JobHeader = ({ company, logo, logoBackground, website }: Props) => {
  const [darkThemeEnabled] = useThemeContext();
  const [image, error, loading] = useImportImage({ logo });

  return (
    <div
      className={`${styles.jobHeader} ${styles.restrictionWrapper} ${
        darkThemeEnabled ? styles.darkSecondary : "white"
      }`}
    >
      <div
        className={styles.imageContainer}
        style={{ backgroundColor: logoBackground }}
      >
        {!loading && error && <img src={image} alt="" />}
      </div>
      <div className={styles.jobCompanyText}>
        <h2
          className={`${styles.jobHeaderH2} ${
            darkThemeEnabled && styles.whiteText
          }`}
        >
          {company}
        </h2>
        <p className={styles.lightText}>{website}</p>
      </div>
      <button
        className={`${
          darkThemeEnabled ? styles.buttonSecondaryDark : styles.buttonSecondary
        }`}
      >
        Company Site
      </button>
    </div>
  );
};

export default JobHeader;
