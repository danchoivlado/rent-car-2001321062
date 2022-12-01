import { useState } from "react";
import searchIcon from "../../assets/desktop/icon-search.svg";
import filterIcon from "../../assets/mobile/icon-filter.svg";
import { useThemeContext } from "../../providers/ThemeContext";

import "../../sassStyles/index.scss";
import Filter from "../filter/Filter";
import PopUp from "../popUp/PopUp";
import SearchButton from "../searchButton/SearchButton";
import "./search.scss";
import { JobAction, JobActionType } from "../../interfaces";
import { useDispatch } from "../../providers/JobsContext";

interface Props {}

const Search = ({}: Props) => {
  const [fullTimeOnly, setFullTimeOnly] = useState(false);
  const [isFileterClicked, setIsFilterClicked] = useState(false);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [darkThemeEnabled] = useThemeContext();

  const dispatch = useDispatch();

  const handleSearchClcik = () => {
    const isEmpty = [fullTimeOnly, location, title].every((x) => !x);
    if (isEmpty) {
      dispatch &&
        dispatch({
          type: JobActionType.CLEAR,
          payload: { fullTime: fullTimeOnly, location, title },
        });
      return;
    }

    const jobAction: JobAction = {
      payload: { fullTime: fullTimeOnly, location, title },
      type: JobActionType.FILTER,
    };

    dispatch && dispatch(jobAction);
  };

  const handleFilterClick = () => {
    setIsFilterClicked((prev) => !prev);
  };

  return (
    <>
      <div
        className={`searchContainer ${
          darkThemeEnabled ? "darkSecondary" : "white"
        }`}
      >
        <div className="containerElement">
          <div className="searchImageContainer">
            <img src={searchIcon} alt="" />
          </div>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`${darkThemeEnabled ? "darkSecondary" : "white"}`}
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
            <SearchButton handleClick={handleSearchClcik} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
