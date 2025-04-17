import { useEffect, useState } from "react";
import NavigationBar from "./NavigationBar";
import MiddleClickDetector from "./MiddleClickDetector";
import { useReadContext } from "./ReadContext";
import { AnimatePresence, motion } from "framer-motion";

const AutoHideNavController = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { currentPage } = useReadContext();

  // Auto-close the nav after 3 seconds
  useEffect(() => {
    if (!isNavOpen) return;

    const timer = setTimeout(() => {
      setIsNavOpen(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup if nav closes early
  }, [isNavOpen]);

  // Close nav when page changes
  useEffect(() => {
    setIsNavOpen(false);
  }, [currentPage]);

  const animationVariants = {
    enter: {
      y: "-100%",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: "-100%",
      opacity: 0,
    },
  };

  return (
    <>
      <MiddleClickDetector onMiddleClick={() => setIsNavOpen(!isNavOpen)} />
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            variants={animationVariants}
            initial="enter"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-0 w-full z-50"
          >
            <NavigationBar />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AutoHideNavController;
