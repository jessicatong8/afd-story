import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import NavigationMenu from "./NavigationMenu";
import { AnimatePresence, motion } from "framer-motion";

import logoImage from "/logo.png";

const NavigationBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navItemStyle =
    "flex justify-center px-3.5 py-6 md:px-6 items-center hover:bg-blue-primary";

  return (
    <>
      <nav className="w-full flex items-center justify-between px-6 bg-white shadow-sm lg:px-12">
        <Link to={`/`} className="py-4">
          <div className="flex flex-row justify-center items-center gap-2 md:gap-3">
            <img src={logoImage} className="w-10 aspect-square md:w-11"></img>
            <div>
              <p className="font-grand text-base md:text-lg font-semibold mt-0.5 text-pink-title">
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
          {/* <FiMenu className="scale-130" /> */}
        </button>
      </nav>

      <AnimatePresence>
        {showMenu && <NavigationMenu closeMenu={() => setShowMenu(false)} />}
      </AnimatePresence>
    </>
  );
};

export default NavigationBar;
