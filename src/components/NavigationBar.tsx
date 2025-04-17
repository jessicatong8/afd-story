import { Link } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import NavigationMenu from "./NavigationMenu";
import { AnimatePresence, motion } from "framer-motion";

const NavigationBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-md lg:px-12">
        <Link to={`/`} className="">
          <div className="flex flex-row justify-center items-center gap-2">
            <img src="/favicon.png" className="w-8 h-8"></img>
            <p className="">Food is My Love Language</p>
          </div>
        </Link>

        {/* Right: Nav Items */}
        <div className=" hidden sm:flex space-x-6">
          <Link to={`/read/0`} className="flex justify-center items-center">
            Read
          </Link>
          <Link to={`/game/start`} className="flex justify-center items-center">
            Game
          </Link>
        </div>

        {/* Mobile Menu Overlay */}
        <button onClick={() => setShowMenu(true)} className="block sm:hidden">
          <FiMenu className="scale-130" />
        </button>
      </nav>

      <AnimatePresence>
        {showMenu && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-30 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMenu(false)} // Clicking backdrop closes menu
            />
            <NavigationMenu />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavigationBar;
