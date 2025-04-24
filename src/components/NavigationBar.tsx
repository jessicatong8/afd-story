import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import NavigationMenu from "./NavigationMenu";
import { AnimatePresence, motion } from "framer-motion";

const NavigationBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navItemStyle =
    "flex justify-center px-6 py-6 items-center hover:bg-blue-primary";

  return (
    <>
      <nav className="w-full flex items-center justify-between px-6 bg-white shadow-sm lg:px-12">
        <Link to={`/`} className="py-4">
          <div className="flex flex-row justify-center items-center gap-3">
            <img src="/favicon.png" className="w-11 h-11"></img>
            <div>
              <p className="font-grand font-semibold mt-0.5">
                Food is My Love Language
                <br />
              </p>
              <p className="font-medium italic text-sm -mt-1">
                {" "}
                An Interactive Story
              </p>
            </div>
          </div>
        </Link>

        {/* Right: Nav Items */}
        <div className=" hidden sm:flex ">
          <Link to={`/read/0`} className={navItemStyle}>
            Read
          </Link>
          <Link to={`/#readers-guide`} className={navItemStyle}>
            Learn
          </Link>
          <Link to={`/#play-game`} className={navItemStyle}>
            Play
          </Link>
          <Link to={`/#about`} className={navItemStyle}>
            About
          </Link>
        </div>

        {/* Mobile Menu Overlay */}
        <button onClick={() => setShowMenu(true)} className="block sm:hidden">
          <FiMenu className="scale-130" />
        </button>
      </nav>

      <AnimatePresence>
        {showMenu && <NavigationMenu closeMenu={() => setShowMenu(false)} />}
      </AnimatePresence>
    </>
  );
};

export default NavigationBar;
