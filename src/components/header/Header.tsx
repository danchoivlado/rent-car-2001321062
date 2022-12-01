import "./header.scss";
import logo from "../../assets/desktop/RentCar.svg";
import Toggle from "../toggle/Toggle";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="headerContainer contentPadding">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
        <Toggle />
      </div>
    </header>
  );
};

export default Header;
