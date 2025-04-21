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
      <p> You got {score} out of 9 questions correct!</p>
      <Link
        to={`/game/start`}
        className="border-2  border-gray-200 px-4 py-2 rounded"
      >
        Play Again
      </Link>
      <Link
        to={`/#readers-guide`}
        className="border-2  border-gray-200 px-4 py-2 rounded "
      >
        Learn More
      </Link>
    </motion.div>
  );
};

export default GameEnd;
