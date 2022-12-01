import "./job.scss";
import useImportImage from "../../hooks/useImportImage";
import { useThemeContext } from "../../providers/ThemeContext";
import { useUserContext } from "../../providers/UserContext";
import { Link } from "react-router-dom";

interface Props {
  jobInfo: {
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
  };
}

const JobItem = ({ jobInfo }: Props) => {
  const {
    id,
    brand,
    model,
    numberOfFreeVehicles,
    numberOfSeats,
    picture,
    pricePerDay,
    vehicleType,
    year,
    logo,
  } = jobInfo;

  const [darkThemeEnabled] = useThemeContext();
  // const [user, setUser] = useUserContext();
  // console.log(user, "let");

  return (
    <div
      className={`jobContent ${darkThemeEnabled ? "darkSecondary" : "white"}`}
    >
      <div className="imageContainer">{<img src={logo}></img>}</div>
      <p className="lightText">
        {brand}
        &nbsp; &middot; &nbsp;
        {model}
      </p>
      <Link style={{ textDecoration: "none" }} to={`/${id}`}>
        <p
          className={`job-tittle ${
            darkThemeEnabled ? "whiteText" : "darkText"
          }`}
        >
          More Info Here
        </p>
      </Link>
      <p className="lightText">Type of vehicle: {vehicleType}</p>
      <p className="location">Year of production {year}</p>
    </div>
  );
};

export default JobItem;
