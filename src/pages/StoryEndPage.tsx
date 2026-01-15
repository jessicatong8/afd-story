import { useNavigate } from "react-router-dom";
import lunchBoxClosed from "../assets/game/startPage/lunchbox_closed.png";
import { useEffect, useState } from "react";
import LunchBoxOpen from "../components/Game/GameStartAnimation";
import { AnimatePresence, motion } from "framer-motion";
import { IS_STUDY } from "../config";
import { getParticipantID } from "../hooks/getParticipantID";
import { endBook, startGame } from "../utils/tracker";

const StoryEndPage = () => {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);
  const participantId = getParticipantID();

  const handleGameStart = () => {
    setClicked(true);
    // log game start time
    if (IS_STUDY) {
      startGame();
    }
  };
  const animationVariants = {
    hidden: { x: "100%" }, // Start off-screen (right)
    visible: { x: 0 }, // Slide to original position (0)
    exit: { opacity: 50 },
  };

  useEffect(() => {
    if (IS_STUDY) {
      endBook(participantId);
    }
  }, []);

  return (
    <AnimatePresence>
      {clicked ? (
        <LunchBoxOpen />
      ) : (
        <motion.div
          variants={animationVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 12,
            mass: 0.8,
          }}
          key="closed"
          // transition={{ duration: 0.2, ease: "easeOut" }}
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
            <img src={lunchBoxClosed} className="pointer-events-none w-90" />
          </button>

          {!IS_STUDY && (
            <div className="grid grid-cols-2 gap-6 ">
              <button
                onClick={() => navigate("/read/1")}
                className="button secondary"
              >
                Read Again
              </button>
              <button
                onClick={() => navigate("/#readers-guide")}
                className="button secondary"
              >
                Skip
              </button>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StoryEndPage;
