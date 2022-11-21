import Jobs from "../components/grid/Jobs";
import Search from "../components/search/Search";

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
