import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface Props {
  score: number;
}

const GameEnd = ({ score }: Props) => {
  const animationVariants = {
    hidden: { x: "100%" }, // Start off-screen (right)
    visible: { x: 0 }, // Slide to original position (0)
  };
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

      <div className="flex flex-row gap-6">
        <Link to={`/game/start`} className="button secondary">
          Play Again
        </Link>
        <Link to={`/#readers-guide`} className="!shadow-sm button ">
          Learn More
        </Link>
      </div>
    </motion.div>
  );
};

export default GameEnd;
