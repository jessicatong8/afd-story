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
          className={`flex flex-col justify-center items-center gap-12 p-6 w-screen h-screen`}
        >
          <p className="text-center">
            Do you know all the different ways to express love?
            <br />
            Let’s play a game to find out!
          </p>

          <button onClick={handleGameStart} className="active:scale-95">
            <img src={lunchBoxClosed} className="pointer-events-none" />
          </button>

          <div className="grid grid-cols-2 gap-4 ">
            <button
              onClick={() => navigate("/read/1")}
              className="border-2  border-gray-200 px-4 py-2 rounded "
            >
              Read Again
            </button>
            <button
              onClick={() => navigate("/")}
              className="border-2  border-gray-200 px-4 py-2 rounded"
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
