import "./header.scss";
import logo from "../../assets/desktop/logo.svg";
import Toggle from "../toggle/Toggle";

const Header = () => {
  return (
    <header>
      <div className="headerContainer contentPadding">
        <img src={logo} alt="" />
        <Toggle />
      </div>
    </header>
  );
};

export default Header;
