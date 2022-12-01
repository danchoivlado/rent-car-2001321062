import useImportImage from "../../../hooks/useImportImage";
import { useThemeContext } from "../../../providers/ThemeContext";
import styles from "./jobHeader.module.scss";

interface Props {
  id: number;
  vehicleType: string;
  brand: string;
  model: string;
  year: number;
  numberOfSeats: number;
  picture: string;
  pricePerDay: number;
  logo: string;
  numberOfFreeVehicles: number;
}

const JobHeader = ({
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
}: Props) => {
  const [darkThemeEnabled] = useThemeContext();

  return (
    <div
      className={`${styles.jobHeader} ${styles.restrictionWrapper} ${
        darkThemeEnabled ? styles.darkSecondary : "white"
      }`}
    >
      <div className={styles.imageContainer}>{<img src={logo} alt="" />}</div>
      <div className={styles.jobCompanyText}>
        <h2
          className={`${styles.jobHeaderH2} ${
            darkThemeEnabled && styles.whiteText
          }`}
        >
          {brand}
        </h2>
        <p className={styles.lightText}>{model}</p>
      </div>
      <button
        className={`${
          darkThemeEnabled ? styles.buttonSecondaryDark : styles.buttonSecondary
        }`}
      >
        {`${numberOfFreeVehicles > 0 ? "Available" : "Not Available"}`}
      </button>
    </div>
  );
};

export default JobHeader;
