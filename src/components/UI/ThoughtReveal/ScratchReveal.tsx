import { useState, useLayoutEffect, useEffect, useRef } from "react";
import ScratchCard from "react-scratchcard-v2";

import dumplingImage from "/src/assets/heart-dumpling.png";

const ScratchReveal = () => {
  const containerRef = useRef(null); // Reference the parent <div>
  const [size, setSize] = useState({ width: 300, height: 300 }); // State to store the size
  //   console.log(size);

  //   if (containerRef.current) {
  //     const { offsetWidth, offsetHeight } = containerRef.current;
  //     console.log(offsetWidth, offsetHeight);
  //   }

  useLayoutEffect(() => {
    // Runs after the component mounts
    const updateSize = () => {
      if (containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current;
        setSize({ width: offsetWidth, height: offsetHeight }); // Update the size
        console.log("container size: " + offsetWidth + ", " + offsetHeight);
        // console.log("Updated size: " + size.width + ", " + size.height); // Debugging: check the updated size
      }
    };
    requestAnimationFrame(updateSize);
    window.addEventListener("resize", updateSize); // Listen for resizes
    return () => window.removeEventListener("resize", updateSize); // Cleanup
    // console.log("useEffect: " + size);
  }, []);

  // Second effect: Debugging to confirm state updates
  useEffect(() => {
    console.log("Updated size:", size.width, size.height);
  }, [size]); // Runs whenever `size` changes

  return (
    <div
      ref={containerRef}
      className="w-1/4 h-1/4 absolute -translate-x-[50%]-translate-y-[50%] 
        top-[10%] left-[60%] border-2 scale-100"
    >
      <ScratchCard
        key={`${size.width}-${size.height}`}
        width={size.width}
        height={size.height}
        image={dumplingImage}
        finishPercent={90}
        onComplete={() => console.log("scratch complete")}
      ></ScratchCard>
    </div>
  );
};

export default ScratchReveal;
