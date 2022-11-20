import "./app.scss";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import second from "./components/grid/Jobs";
import JobsContex from "../src/providers/JobsContext";
import Jobs from "./components/grid/Jobs";
import { useThemeContext } from "./providers/ThemeContext";

function App() {
  const [darkThemeEnabled] = useThemeContext();
  return (
    <div className="mainwrapper">
      <Header />
      <main
        className={`${darkThemeEnabled ? "dark-primary" : "white-secondary"}`}
      >
        <div className="wrapperContainer">
          <JobsContex>
            <Search />
            <Jobs />
          </JobsContex>
        </div>
      </main>
    </div>
  );
}

export default App;
