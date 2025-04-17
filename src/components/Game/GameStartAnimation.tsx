import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../../assets/game/startPage/lunchbox_open.png";

const GameStartAnimation = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // This updates the URL without reloading the page
    navigate("/game/start", { replace: true }); // `replace: true` to avoid adding to history stack
  }, []);

  useEffect(() => {
    // Eagerly import game component after this one renders
    import("../../pages/GamePage");
  }, []);

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
    <motion.div
      key="open"
      // initial={{ opacity: 0 }}
      animate={{
        // opacity: [1, 1, 1],
        scale: [0.9, 1, 2],
        transition: { duration: 3.5, ease: "easeIn", times: [0, 0.9, 1] },
      }}
      className={`flex h-screen w-screen scale-58 -translate-y-6 justify-center items-center 
            transition-opacity duration-100 ease-out ${fadeOut ? "opacity-0" : "opacity-100"}`}
    >
      <img src={image} className="pointer-events-none" />
    </motion.div>
  );
};

export default GameStartAnimation;
