import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IS_STUDY } from "../../config";
import { getParticipantID } from "../../hooks/getParticipantID";

interface Props {
  score: number;
}

const GameEnd = ({ score }: Props) => {
  const animationVariants = {
    hidden: { x: "100%" }, // Start off-screen (right)
    visible: { x: 0 }, // Slide to original position (0)
  };

  // console.log("Calling endGame");
  // endGame(getParticipantID())
  //   .then(() => console.log("endGame finished"))
  //   .catch((e) => console.error("endGame error:", e));

  return (
    <motion.div
      variants={animationVariants}
      initial="hidden"
      animate="visible"
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 12,
        mass: 0.8,
      }}
      className="flex flex-col h-screen gap-6 justify-center items-center"
    >
      <div className="text-2xl text-center leading-relaxed">
        You got{" "}
        <span className="text-pink-title font-extrabold text-5xl">{score}</span>{" "}
        out of{" "}
        <span className="text-pink-title font-extrabold text-5xl">9</span>{" "}
        questions correct!
      </div>
      {!IS_STUDY ? (
        <div className="flex flex-row gap-6">
          <Link to={`/game/start`} className="button secondary">
            Play Again
          </Link>
          <Link to={`/#readers-guide`} className="!shadow-sm button ">
            Continue
          </Link>
        </div>
      ) : (
        <div className="flex flex-col p-12 gap-12 justify-center items-center">
          <div className="text-center text-lg">
            Congrats you have finished reading the book and playing the game!
            For the last part of this study, you will complete a short survey so
            we can learn more about you and your child's experience.
            <br></br>Click continue to be automatically redirected to the
            survey.
          </div>
          {/*post-test survey link https://claremontmckenna.co1.qualtrics.com/jfe/form/SV_da3CqEHNFInWUwm */}
          <Link
            to={`https://claremontmckenna.co1.qualtrics.com/jfe/form/SV_da3CqEHNFInWUwm/?participant_id=${getParticipantID()}`}
            className="!shadow-sm button "
          >
            Continue
          </Link>
        </div>
      )}
    </motion.div>
  );
};

export default GameEnd;
