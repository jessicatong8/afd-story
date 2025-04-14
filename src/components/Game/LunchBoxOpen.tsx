import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../../assets/game/startPage/lunchbox_open.png";

const LunchBoxOpen = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3300);

    const navTimer = setTimeout(() => {
      navigate("/game");
    }, 3500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(navTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        animate={{
          //   opacity: [0, 1],
          scale: [0.9, 1, 2],
          transition: { duration: 3.5, ease: "easeOut", times: [0, 0.9, 1] },
        }}
        className={`flex h-screen w-screen justify-center items-center 
            transition-opacity duration-100 ease-out ${fadeOut ? "opacity-0" : "opacity-100"}`}
      >
        <img src={image} className="pointer-events-none" />
        {}
      </motion.div>
    </AnimatePresence>
  );
};

export default LunchBoxOpen;
