import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { useEffect } from "react";

type Props = {
  closeMenu: () => void;
};

const NavigationMenu = ({ closeMenu }: Props) => {
  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
    exit: { x: "100%" },
  };

  const menuItemStyle =
    "flex justify-center items-center px-6 py-4 border-b-1 border-gray-200 hover:bg-blue-primary active:bg-blue-primary";

  useEffect(() => {
    // Disable scrolling on body when component mounts
    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.touchAction = "auto";
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 bg-white z-50"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={menuVariants}
      transition={{ type: "tween", duration: 0.3 }}
    >
      <button
        className="absolute top-2 right-0 p-6 scale-175"
        onClick={closeMenu}
      >
        <IoCloseOutline />
      </button>
      <div className="pt-8  ">
        {/* <h2 className="text-lg font-semibold">Menu</h2> */}
        <Link to={`/read/0`} onClick={closeMenu} className={menuItemStyle}>
          Read
        </Link>
        <Link
          to={`/#readers-guide`}
          onClick={closeMenu}
          className={menuItemStyle}
        >
          Learn
        </Link>
        <Link to={`/#play-game`} onClick={closeMenu} className={menuItemStyle}>
          Play
        </Link>
        <Link to={`/#about`} onClick={closeMenu} className={menuItemStyle}>
          About
        </Link>
      </div>
    </motion.div>
  );
};

export default NavigationMenu;
