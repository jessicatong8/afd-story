import { Link } from "react-router-dom";
import cover from "/cover.png";
const HomePage = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full h-screen object-scale-down">
        <img src={cover} className="object-scale-down" />
      </div>
      <Link to={`/read/0`}>Read</Link>
      <Link to={`/game`}>Game</Link>
    </div>
  );
};

export default HomePage;
