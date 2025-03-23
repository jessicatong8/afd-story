import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="flex flex-col gap-2">
      HomePage
      <Link to={`/read`}>Read</Link>
    </div>
  );
};

export default HomePage;
