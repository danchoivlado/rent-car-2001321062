import Header from "../components/header/Header";
import { useThemeContext } from "../providers/ThemeContext";
import { Outlet } from "react-router-dom";

const Wrapper = () => {
  const [darkThemeEnabled] = useThemeContext();
  return (
    <>
      <Header />
      <main
        className={`${darkThemeEnabled ? "dark-primary" : "white-secondary"}`}
      >
        <Outlet />
      </main>
    </>
  );
};

export default Wrapper;
