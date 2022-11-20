import { useParams } from "react-router-dom";

const JobPage = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id);

  return <div>JobPage</div>;
};

export default JobPage;
