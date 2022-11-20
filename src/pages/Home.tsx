import Search from "../components/search/Search";
import JobsContex from "../providers/JobsContext";
import Jobs from "../components/grid/Jobs";

const Home = () => {
  return (
    <>
      <div className="wrapperContainer">
        <JobsContex>
          <Search />
          <Jobs />
        </JobsContex>
      </div>
    </>
  );
};

export default Home;
