import { Link } from "react-router-dom";
import cover from "/cover.png";
import NavigationBar from "../components/NavigationBar";
const HomePage = () => {
  return (
    <div>
      <NavigationBar />
      <div className="flex flex-col justify-center items-center m-6 gap-6">
        <div className="w-full h-full lg:max-w-1/2">
          <img src={cover} className="w-full h-auto object-cover shadow-md" />
        </div>
        <Link
          to={`/read/0`}
          className="flex justify-center items-center rounded px-6 py-6 h-8 transition-all inset-ring-2 shadow-sm inset-ring-blue-secondary bg-blue-primary font-open font-bold 
          hover:bg-blue-secondary active:scale-95"
        >
          Start Reading
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
