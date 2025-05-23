import { ReadContextProvider } from "../components/ReadContext";

import Page from "../components/Page";
import BackButton from "../components/BackButton";
import NextButton from "../components/NextButton";
import ProgressBar from "../components/ProgressBar";
import { useEffect, useRef, useState } from "react";

import AutoHideNavController from "../components/AutoHideNavClick";
import { AnimatePresence, motion } from "framer-motion";

function ReadPage() {
  useEffect(() => {
    // Disable scrolling when component mounts
    document.body.classList.add("overflow-hidden");

    return () => {
      // Re-enable scrolling when component unmounts
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const containerRef = useRef(null);
  const [isLandscape, setIsLandscape] = useState(true);

  useEffect(() => {
    // observe size of reference container to detect when it's landscape (width > height)
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setIsLandscape(width > height);
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-screen h-[100dvh] flex flex-col "
      >
        <ReadContextProvider>
          <AutoHideNavController />

          <section
            ref={containerRef}
            className="flex w-full min-h-0 h-full items-center justify-evenly select-none z-0"
          >
            <span className="hide-portrait">
              <BackButton />
            </span>

            <div
              className={`relative  border-blue-tertiary overflow-clip aspect-square shadow-[3px_0_3px_-2px_rgba(0,0,0,0.1),_-3px_0_3px_-2px_rgba(0,0,0,0.1)]
              ${isLandscape ? "h-full" : "w-full"}`} //set size according to height when parent landscape and width when parent portrait
            >
              <Page />
            </div>

            <span className=" hide-portrait ">
              <NextButton />
            </span>
          </section>

          <div className="shrink-0">
            <ProgressBar />
          </div>
        </ReadContextProvider>
      </motion.div>
    </AnimatePresence>
  );
}

export default ReadPage;
