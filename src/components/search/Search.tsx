import { useState } from "react";
import filterIcon from "../../assets/mobile/icon-filter.svg";
import searchIcon from "../../assets/desktop/icon-search.svg";
import iconLocation from "../../assets/desktop/icon-location.svg";
import iconCheck from "../../assets/desktop/icon-check.svg";
import "./search.scss";
import PopUp from "../popUp/PopUp";
import SearchButton from "../searchButton/SearchButton";
import Filter from "../filter/Filter";
import { JobsFilter } from "../../interfaces/jobs.interface";
import { useThemeContext } from "../../providers/ThemeContext";
import "../../sassStyles/index.scss";

interface Props {
  // handleFilter: (filter: JobsFilter) => void;
}

const Search = ({}: Props) => {
  const [fullTimeOnly, setFullTimeOnly] = useState(false);
  const [isFileterClicked, setIsFilterClicked] = useState(false);
  const [location, setLocation] = useState("");
  const [darkThemeEnabled] = useThemeContext();

  const handleFilterClick = () => {
    setIsFilterClicked((prev) => !prev);
  };

  return (
    <>
      <div
        className={`searchContainer ${
          darkThemeEnabled ? "dark-secondary" : "white"
        }`}
      >
        <div className="containerElement">
          <div className="searchImageContainer">
            <img src={searchIcon} alt="" />
          </div>
          <input
            className={`${darkThemeEnabled ? "dark-secondary" : "white"}`}
            type="text"
            placeholder="Filter by tittle..."
          />
        </div>
        <Filter
          fullTimeOnly={fullTimeOnly}
          inPopUp={false}
          location={location}
          setFullTimeOnly={setFullTimeOnly}
          setLocation={setLocation}
        />
        <div className="btn-container containerElement">
          <div
            className="filterImageContainer"
            onClick={() => handleFilterClick()}
          >
            <img src={filterIcon} alt="" />
          </div>
          <div>
            <SearchButton />
          </div>
        </div>
      </div>
      <div className="popUpContainer">
        <PopUp close={handleFilterClick} show={isFileterClicked}>
          <div className="popUpContent">
            <Filter
              fullTimeOnly={fullTimeOnly}
              inPopUp={true}
              location={location}
              setFullTimeOnly={setFullTimeOnly}
              setLocation={setLocation}
            />
            <SearchButton inPopUp={true} />
          </div>
        </PopUp>
      </div>
    </>
  );
};

export default Search;
