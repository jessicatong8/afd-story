import { Link } from "react-router-dom";
import cover from "/cover_button_right.png";
import NavigationBar from "../components/NavigationBar";
const HomePage = () => {
  return (
    <div>
      <NavigationBar />
      <div className="flex flex-col justify-center items-center m-6 gap-6">
        <div className=" relative flex justify-center w-full h-full lg:max-w-1/2">
          <img src={cover} className="w-full h-auto object-cover shadow-md" />
          <Link
            to={`/read/0`}
            className="absolute top-[85%] left-[70%] flex justify-center items-center rounded px-4 py-6 h-1/12 transition-all border-2 border-blue-secondary shadow-md bg-blue-primary font-bold 
          hover:bg-blue-secondary active:scale-95"
          >
            Start Reading
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
