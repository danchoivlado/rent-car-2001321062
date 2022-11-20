import sunIcon from "../../assets/desktop/icon-sun.svg";
import moonIcon from "../../assets/desktop/icon-moon.svg";
import "./toggle.scss";
import { useState } from "react";
import { useThemeContext } from "../../providers/ThemeContext";

const Toggle = () => {
  const [toggle, setToggle] = useThemeContext();

  const handleChange = () => {
    setToggle && setToggle((prev) => !prev);
  };

  return (
    <div className="toggleContainer">
      <div>
        <img src={sunIcon} alt="" />
      </div>
      <label className="switch">
        <input type="checkbox" checked={toggle} onChange={handleChange} />
        <span className="slider round"></span>
      </label>
      <div>
        <img src={moonIcon} alt="" />
      </div>
    </div>
  );
};

export default Toggle;
