import { Job, ListType } from "../../../interfaces";
import { useThemeContext } from "../../../providers/ThemeContext";
import { useUserContext } from "../../../providers/UserContext";
import JobSpecs from "../JobSpecs/JobSpecs";
import JobSpec from "../JobSpecs/JobSpecs";
import styles from "./jobMain.module.scss";
import { useNavigate } from "react-router-dom";

interface Props {
  job: Job;
}

const JobMain = ({
  job: {
    brand,
    id,
    logo,
    model,
    numberOfFreeVehicles,
    numberOfSeats,
    picture,
    pricePerDay,
    vehicleType,
    year,
  },
}: Props) => {
  const [darkThemeEnabled] = useThemeContext();
  const [user, setUser] = useUserContext();
  const navigate = useNavigate();

  const handleClick = () => {
    if (!user!.email) {
      // nav;
    }
  };

  return (
    <div
      className={`${styles.jobMain} ${styles.restrictionWrapper} ${
        darkThemeEnabled ? styles.darkSecondary : "white"
      }`}
    >
      <div className={styles.jobMainHeader}>
        <div>
          <p className={`${darkThemeEnabled && styles.whiteText}`}>
            Number of free vehicles: {numberOfFreeVehicles}
          </p>
          <p className={`${darkThemeEnabled && styles.whiteText}`}>
            Number of seats: {numberOfSeats}
          </p>
          <p className={`${darkThemeEnabled && styles.whiteText}`}>
            Price per day: {pricePerDay}
          </p>
          <p className={`${darkThemeEnabled && styles.whiteText}`}>
            Vehicle type: {vehicleType}
          </p>
          <p className={`${darkThemeEnabled && styles.whiteText}`}>
            Year of production: {year}
          </p>
        </div>
        <div>
          <button onClick={handleClick} className={styles.buttonPrimary}>
            Rent
          </button>
        </div>
      </div>
      <div
        className={`${styles.specs} ${darkThemeEnabled && styles.whiteText} `}
      >
        <img src={picture}></img>
      </div>
    </div>
  );
};

export default JobMain;
