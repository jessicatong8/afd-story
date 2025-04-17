import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NavigationMenu = () => {
  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
    exit: { x: "100%" },
  };

  const menuItemStyle =
    "flex justify-left items-center px-6 py-4 border-b-1 border-gray-200 hover:bg-blue-primary active:bg-blue-primary";

  return (
    <motion.div
      className="fixed top-0 right-0 h-full w-50 bg-white shadow-lg z-50"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={menuVariants}
      transition={{ type: "tween", duration: 0.3 }}
      onClick={(e) => e.stopPropagation()} // Prevent click bubbling from closing menu
    >
      <div className="pt-8  ">
        {/* <h2 className="text-lg font-semibold">Menu</h2> */}
        <Link to={`/`} className={menuItemStyle}>
          Home
        </Link>
        <Link to={`/read/0`} className={menuItemStyle}>
          Read
        </Link>
        <Link to={`/game/start`} className={menuItemStyle}>
          Game
        </Link>
      </div>
    </motion.div>
  );
};

export default NavigationMenu;
