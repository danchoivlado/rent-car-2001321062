import { useState } from "react";
import iconLocation from "../../assets/desktop/icon-location.svg";
import iconCheck from "../../assets/desktop/icon-check.svg";
import "./filter.scss";
import { useThemeContext } from "../../providers/ThemeContext";

interface Props {
  fullTimeOnly: boolean;
  setFullTimeOnly: React.Dispatch<React.SetStateAction<boolean>>;
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  inPopUp: boolean;
}

const Filter = ({
  location,
  setLocation,
  fullTimeOnly,
  setFullTimeOnly,
  inPopUp,
}: Props) => {
  const [darkThemeEnabled] = useThemeContext();
  return (
    <>
      <div className={inPopUp ? `insidePopUpElement` : `hideContainerElement`}>
        <div className="iconLocationImageContainer">
          <img src={iconLocation} alt="" />
        </div>
        <input
          className={`${darkThemeEnabled ? "darkSecondary" : "white"}`}
          type="text"
          placeholder="Filter by location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className={inPopUp ? `insidePopUpElement` : `hideContainerElement`}>
        <label className="checkBoxLabel">
          <div className="checkBoxContainer">
            <input
              type="checkbox"
              checked={fullTimeOnly}
              onChange={(e) => {
                setFullTimeOnly(e.target.checked);
              }}
            />
            <div
              className="icon"
              style={{
                backgroundColor: fullTimeOnly
                  ? "#5964e0"
                  : darkThemeEnabled
                  ? "#252B38"
                  : "#eeeffc",
              }}
            >
              {fullTimeOnly && <img src={iconCheck} alt="" />}
            </div>
          </div>
          <span className={`${darkThemeEnabled ? "whiteText" : "darkText"}`}>
            Full Time
          </span>
        </label>
      </div>
    </>
  );
};

export default Filter;
