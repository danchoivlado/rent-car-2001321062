import Search from "../components/search/Search";
import JobsContex from "../providers/JobsContext";
import Jobs from "../components/grid/Jobs";

const Home = () => {
  return (
    <>
      <div className="wrapperContainer">
        <Search />
        <Jobs />
      </div>
    </>
  );
};

export default Home;
