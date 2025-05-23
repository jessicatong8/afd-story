import { lazy, useEffect, useState } from "react";
import { useReadContext } from "./ReadContext";
import { useSwipeable } from "react-swipeable";
import { Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import LeftClickDetector from "./LeftClickDetector";

// import UI elements lazily
const DoorUIImport = () => import("./UI/DoorUI");
const DoorUI = lazy(DoorUIImport);
const ScratchRevealImport = () => import("./UI/ThoughtReveal/ScratchReveal");
const ScratchReveal = lazy(ScratchRevealImport);
const DumplingFillingUIImport = () =>
  import("./UI/DumplingFilling/DumplingFillingUI");
const DumplingFillingUI = lazy(DumplingFillingUIImport);
const DumplingGivingUIImport = () =>
  import("./UI/DumplingGiving/DumplingGivingUI");
const DumplingGivingUI = lazy(DumplingGivingUIImport);
const LoveLanguagesUIImport = () =>
  import("./UI/LoveLanguages/LoveLanguagesUI");
const LoveLanguagesUI = lazy(LoveLanguagesUIImport);
const StoryEndPageImport = () => import("../pages/StoryEndPage");
const StoryEndPage = lazy(StoryEndPageImport);

// Import all images dynamically from the assets folder
const images = import.meta.glob("/src/assets/pages/*.png");
// console.log(images);

const Page = () => {
  const {
    currentPage,
    numPages,
    nextIsActive,
    handleBack,
    handleNext,
    toggleNext,
    direction,
  } = useReadContext();

  const [imageCache, setImageCache] = useState<Record<number, string>>({}); // Stores loaded images

  // Check if pageNumber is invalid before rendering
  if (isNaN(currentPage) || currentPage < 0 || currentPage > numPages) {
    return <Navigate to="/not-found" replace />; //replace to avoid the browser back button leading back to an invalid page
  }

  // handle swipe gestures, swipe left or right to control page navigation
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handleBack(),
  });

  // handle key presses, use left and right arrow keys to control page navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        handleBack();
      } else if (event.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentPage, nextIsActive]);

  // Disable navigation to next page for UI pages
  // useEffect(() => {
  //   toggleNext(![3, 5, 15, 17].includes(currentPage));
  // }, [currentPage]);

  // Preload page content

  // Dynamically load page images
  const loadImage = async (page: number) => {
    const path = `/src/assets/pages/pg_${page}.png`;
    if (images[path]) {
      const imageModule = (await images[path]()) as { default: string };
      return imageModule.default;
    }
    console.log(`No image found for page: ${page}`); // Debugging: image not found
    return "";
  };

  // imports for UI components on each page
  const loadUIComponents: Record<number, () => Promise<any>> = {
    3: DoorUIImport,
    5: ScratchRevealImport,
    15: DumplingFillingUIImport,
    17: DumplingGivingUIImport,
    32: StoryEndPageImport,
  };

  // Preload 3 pages back and forth around current page
  useEffect(() => {
    const preload = async () => {
      // array of the 5 pages around current page
      const pagesToLoad = Array.from(
        { length: 5 },
        (_, i) => currentPage - 2 + i
      );
      const newCache: Record<number, string> = { ...imageCache };

      for (const page of pagesToLoad) {
        // load page images
        if (page >= 0 && page <= numPages && !newCache[page]) {
          newCache[page] = await loadImage(page);
        }
        // load UI components
        if (loadUIComponents[page]) {
          loadUIComponents[page]();
        }
      }
      setImageCache(newCache);
    };

    preload();
  }, [currentPage]);

  const isStaticPage = [4, 6, 16].includes(currentPage);

  const getAnimationVariants = () => {
    if (isStaticPage) {
      return {
        enter: () => ({
          opacity: 0,
        }),
        center: {
          opacity: 1,
        },
        exit: () => ({
          opacity: 0,
        }),
      };
    }

    return {
      enter: (direction: number) => ({
        scale: 0.5,
        x: direction > 0 ? "100%" : "-100%",
        opacity: 0,
      }),
      center: {
        scale: 1,
        x: 0,
        opacity: 1,
      },
      exit: (direction: number) => ({
        scale: 0.5,
        x: direction > 0 ? "-100%" : "100%",
        opacity: 0,
      }),
    };
  };

  const getAnimationTransition = () =>
    isStaticPage
      ? { ease: "easeOut", duration: 0.2 }
      : {
          type: "spring",
          stiffness: 500,
          damping: 30,
          mass: 0.5,
          duration: 0.2,
        };

  return (
    <div {...swipeHandlers}>
      {/* <LeftClickDetector onLeftClick={() => handleBack()} /> */}
      <AnimatePresence custom={direction} initial={false}>
        {imageCache[currentPage] ? (
          <motion.div
            className="absolute w-full h-full"
            custom={direction}
            variants={getAnimationVariants()}
            initial="enter"
            animate="center"
            exit="exit"
            transition={getAnimationTransition()}
            key={currentPage}
          >
            <img
              src={imageCache[currentPage]}
              className="object-contain pointer-events-none"
            />
            {currentPage === 3 && <DoorUI />}
            {currentPage === 5 && <ScratchReveal />}
            {currentPage === 15 && <DumplingFillingUI />}
            {currentPage === 17 && <DumplingGivingUI />}
            {currentPage === 20 && <LoveLanguagesUI />}
            {currentPage === 28 && <LoveLanguagesUI />}
            {currentPage === 29 && <LoveLanguagesUI />}
            {currentPage === 30 && <LoveLanguagesUI />}
            {currentPage === 31 && <LoveLanguagesUI />}
          </motion.div>
        ) : (
          <p>Loading...</p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Page;
