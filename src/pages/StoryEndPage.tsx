import { useNavigate } from "react-router-dom";
import lunchBoxClosed from "../assets/game/startPage/lunchbox_closed.png";
import { useEffect, useState } from "react";
import LunchBoxOpen from "../components/Game/GameStartAnimation";
import { AnimatePresence, motion } from "framer-motion";

const StoryEndPage = () => {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  const handleGameStart = () => {
    setClicked(true);
  };

  return (
    <AnimatePresence>
      {clicked ? (
        <LunchBoxOpen />
      ) : (
        <motion.div
          key="closed"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          // transition-opacity ease-in duration-300
          className={`flex flex-col justify-center items-center p-6 w-screen h-screen`}
        >
          <p className="text-center text-lg">
            <span className="block">
              Do you know all the different ways to express love?
            </span>
            <span className="block mt-4 font-bold">
              Let’s play a game to find out!
            </span>
          </p>

          <button
            onClick={handleGameStart}
            className="active:scale-95 px-2 py-16 cursor-pointer hover:scale-95 transition-transform"
          >
            <img src={lunchBoxClosed} className="pointer-events-none" />
          </button>

          <div className="grid grid-cols-2 gap-6 ">
            <button
              onClick={() => navigate("/read/1")}
              className="rounded px-6 py-4 transition-all  border-blue-primary  bg-blue-tertiary font-semibold 
          hover:bg-blue-secondary active:scale-95"
            >
              Read Again
            </button>
            <button
              onClick={() => navigate("/")}
              className="rounded px-6 py-4 transition-all border-blue-primary  bg-blue-tertiary font-semibold 
          hover:bg-blue-secondary active:scale-95"
            >
              Skip
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StoryEndPage;
