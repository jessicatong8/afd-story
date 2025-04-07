import { lazy, useEffect, useState } from "react";
import { useReadContext } from "./ReadContext";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useSwipeable } from "react-swipeable";
import { Navigate } from "react-router-dom";

// import DoorUI from "./UI/DoorUI";
// import DumplingFillingUI from "./UI/DumplingFilling/DumplingFillingUI";
// import DumplingGivingUI from "./UI/DumplingGiving/DumplingGivingUI";
// import ScratchReveal from "./UI/ThoughtReveal/ScratchReveal";
// import LoveLanguagesUI from "./UI/LoveLanguages/LoveLanguagesUI";

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
  } = useReadContext();

  const [imageCache, setImageCache] = useState<Record<number, string>>({}); // Stores loaded images
  // const [imageLoaded, setImageLoaded] = useState(false);

  // console.log(currentPage);
  // console.log(imageLoaded);

  // Check if pageNumber is invalid before rendering
  if (isNaN(currentPage) || currentPage < 0 || currentPage > numPages) {
    return <Navigate to="/not-found" replace />; //replace to avoid the browser back button leading back to an invalid page
  }

  useEffect(() => {
    // there's probably a better way to do this with a dictionary, would be nice to preload components in a range like the pages
    // setImageLoaded(false);
    // disable navigation to the next page depending on the current page to facilitate UI
    toggleNext(
      currentPage !== 3 &&
        currentPage !== 5 &&
        currentPage !== 15 &&
        currentPage !== 17
    );
    // preload UI components 2 pages before rendering
    currentPage === 1 && DoorUIImport();
    currentPage === 3 && ScratchRevealImport();
    currentPage === 13 && DumplingFillingUIImport();
    currentPage === 15 && DumplingGivingUIImport();
    currentPage === 15 && LoveLanguagesUIImport();
  }, [currentPage]);

  // Function to load an image dynamically
  const loadImage = async (page: number) => {
    const path = `/src/assets/pages/pg_${page}.png`;

    // console.log(`Trying to load image for page: ${page}`); // Debugging: check page number
    // console.log(`Image path: ${path}`); // Debugging: check the generated path

    if (images[path]) {
      // console.log(`Found image for page: ${page}`); // Debugging: found image
      const imageModule = (await images[path]()) as { default: string };
      // console.log(`Image URL: ${imageModule.default}`); // Debugging: check the image URL
      return imageModule.default;
    }
    console.log(`No image found for page: ${page}`); // Debugging: image not found
    return "";
  };

  useEffect(() => {
    const loadImages = async () => {
      const newCache: Record<number, string> = { ...imageCache };

      const pagesToLoad = [
        currentPage - 2,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        currentPage + 2,
      ];

      for (const page of pagesToLoad) {
        if (page >= 0 && page <= numPages && !newCache[page]) {
          newCache[page] = await loadImage(page);
        }
      }

      setImageCache(newCache);
    };

    loadImages();
  }, [currentPage]);
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

  return (
    <div
      {...swipeHandlers}
      className=" w-full h-screen flex justify-center items-center"
    >
      {imageCache[currentPage] ? (
        <div className="relative border-2 border-sky-200 m-0 p-0">
          <LazyLoadImage
            src={imageCache[currentPage]}
            alt={`Page ${currentPage}`}
            effect="blur"
            // onLoad={() => setImageLoaded(true)}
            className="block max-w-screen max-h-screen object-contain"
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
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Page;
