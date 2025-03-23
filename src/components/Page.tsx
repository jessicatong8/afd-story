import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface Props {
  pageNumber: number;
  numPages: number;
}

// Import all images dynamically from the assets folder
const images = import.meta.glob("/src/assets/pages/*.png");
// console.log(images);

const Page = ({ pageNumber, numPages }: Props) => {
  const [imageCache, setImageCache] = useState<Record<number, string>>({}); // Stores loaded images

  // Function to load an image dynamically
  const loadImage = async (page: number) => {
    const path = `/src/assets/pages/pg_${page}.png`;

    console.log(`Trying to load image for page: ${page}`); // Debugging: check page number
    console.log(`Image path: ${path}`); // Debugging: check the generated path

    if (images[path]) {
      console.log(`Found image for page: ${page}`); // Debugging: found image
      const imageModule = (await images[path]()) as { default: string };
      console.log(`Image URL: ${imageModule.default}`); // Debugging: check the image URL
      return imageModule.default;
    }
    console.log(`No image found for page: ${page}`); // Debugging: image not found
    return "";
  };

  useEffect(() => {
    const loadImages = async () => {
      const newCache: Record<number, string> = { ...imageCache };

      // Load current page
      if (!newCache[pageNumber]) {
        console.log(`Loading image for page ${pageNumber}`);
        newCache[pageNumber] = await loadImage(pageNumber);
      }

      // Preload previous and next pages
      if (pageNumber > 1 && !newCache[pageNumber - 1]) {
        newCache[pageNumber - 1] = await loadImage(pageNumber - 1);
      }
      if (pageNumber < numPages && !newCache[pageNumber + 1]) {
        newCache[pageNumber + 1] = await loadImage(pageNumber + 1);
      }
      console.log(newCache);
      setImageCache(newCache);
    };

    loadImages();
  }, [pageNumber]);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      {imageCache[pageNumber] ? (
        <LazyLoadImage
          src={imageCache[pageNumber]}
          alt={`Page ${pageNumber}`}
          effect="blur"
          className="max-w-full max-h-screen object-contain"
          // width="100%"
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Page;
