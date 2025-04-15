import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-md lg:px-12">
      <Link to={`/`} className="">
        <div className="flex flex-row justify-center items-center gap-2">
          <img src="/favicon.png" className="w-8 h-8"></img>
          Food is My Love Language
        </div>
      </Link>
      {/* Right: Nav Items */}
      <div className="flex space-x-6">
        <Link to={`/read/0`} className="flex justify-center items-center">
          Read
        </Link>
        <Link to={`/game/start`} className="flex justify-center items-center">
          Game
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
