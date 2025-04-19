import { ReadContextProvider } from "../components/ReadContext";

import Page from "../components/Page";
import BackButton from "../components/BackButton";
import NextButton from "../components/NextButton";
import ProgressBar from "../components/ProgressBar";
import { useEffect, useRef, useState } from "react";

import AutoHideNavController from "../components/AutoHideNavClick";

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
    <div className="w-screen h-[100dvh] flex flex-col ">
      <ReadContextProvider>
        <AutoHideNavController />

        <section
          ref={containerRef}
          className="flex flex-grow w-full min-h-0 h-full items-center justify-evenly select-none z-0"
        >
          <span className="hidden md:block">
            <BackButton />
          </span>

          <div
            className={`relative border-2 border-blue-tertiary overflow-clip aspect-square
              ${isLandscape ? "h-full" : "w-full"}`} //set size according to height when parent landscape and width when parent portrait
          >
            <Page />
          </div>

          <span className="hidden md:block">
            <NextButton />
          </span>
        </section>

        <div className="shrink-0">
          <ProgressBar />
        </div>
      </ReadContextProvider>
    </div>
  );
}

export default ReadPage;
