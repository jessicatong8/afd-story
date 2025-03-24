import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useReadContext } from "./ReadContext";
import { useSwipeable } from "react-swipeable";
import DoorUI from "./DoorUI";

// Import all images dynamically from the assets folder
const images = import.meta.glob("/src/assets/pages/*.png");
// console.log(images);

const Page = () => {
  const { currentPage, numPages, handleBack, handleNext } = useReadContext();
  const [imageCache, setImageCache] = useState<Record<number, string>>({}); // Stores loaded images

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

      // Load current page
      if (!newCache[currentPage]) {
        // console.log(`Loading image for page ${currentPage}`);
        newCache[currentPage] = await loadImage(currentPage);
      }

      // Preload previous and next pages
      if (currentPage > 1 && !newCache[currentPage - 1]) {
        newCache[currentPage - 1] = await loadImage(currentPage - 1);
      }
      if (currentPage < numPages && !newCache[currentPage + 1]) {
        newCache[currentPage + 1] = await loadImage(currentPage + 1);
      }
      // console.log(newCache);
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
  }, [currentPage]);

  return (
    <div
      {...swipeHandlers}
      className=" w-full h-screen flex justify-center items-center"
    >
      {imageCache[currentPage] ? (
        <div className="relative border-2 border-amber-500">
          <LazyLoadImage
            src={imageCache[currentPage]}
            alt={`Page ${currentPage}`}
            effect="blur"
            className="max-w-full max-h-screen object-contain"
          />
          <span>{currentPage === 3 && <DoorUI />}</span>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Page;
