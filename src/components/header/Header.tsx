import "./header.scss";
import logo from "../../assets/desktop/RentCar.svg";
import Toggle from "../toggle/Toggle";
import { Link } from "react-router-dom";
import { useUserContext } from "../../providers/UserContext";

const Header = () => {
  const [user, setUser] = useUserContext();

  return (
    <header>
      <div className="headerContainer contentPadding">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
        {user?.email && <h2>You are logged in: {user.email}</h2>}
        <Toggle />
      </div>
    </header>
  );
};

export default Header;
