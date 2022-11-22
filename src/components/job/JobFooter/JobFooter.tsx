import { useThemeContext } from "../../../providers/ThemeContext";
import styles from "./jobFooter.module.scss";
import { useSizeContext } from "../../../providers/SizeContext";
import { ScreenTypes } from "../../../interfaces";

interface Props {
  position: string;
  company: string;
}

const JobFooter = ({ company, position }: Props) => {
  const [darkThemeEnabled] = useThemeContext();

  const sizeContex = useSizeContext();
  return (
    <div
      className={`${styles.jobFooter} ${
        darkThemeEnabled ? styles.darkSecondary : styles.white
      }`}
    >
      <div className={styles.restrictionWrapper}>
        <div className={styles.content}>
          {sizeContex.screenType !== ScreenTypes.SM && (
            <div>
              <h3 className={darkThemeEnabled ? styles.whiteText : undefined}>
                {position}
              </h3>
              <p className={styles.lightTextColor}>{company}</p>
            </div>
          )}
          <button className={styles.buttonPrimary}>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobFooter;
