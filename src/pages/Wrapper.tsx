import Header from "../components/header/Header";
import { useThemeContext } from "../providers/ThemeContext";
import { Outlet } from "react-router-dom";

const Wrapper = () => {
  const [darkThemeEnabled] = useThemeContext();
  return (
    <div className="mainwrapper">
      <Header />
      <main
        className={`${darkThemeEnabled ? "dark-primary" : "white-secondary"}`}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default Wrapper;
