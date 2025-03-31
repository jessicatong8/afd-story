import { useState, useEffect, useRef } from "react";
import ScratchCard from "react-scratchcard-v2";

import dumplingImage from "/src/assets/heart-dumpling.png";

const ScratchReveal = () => {
  const containerRef = useRef(null); // Reference the parent <div>
  const [size, setSize] = useState({ width: 300, height: 300 }); // State to store the size
  //   console.log(size);

  useEffect(() => {
    // Runs after the component mounts
    const updateSize = () => {
      if (containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current;
        setSize({ width: offsetWidth, height: offsetHeight }); // Update the size
        console.log("container size: " + offsetWidth + ", " + offsetHeight);
        // console.log("Updated size: " + size.width + ", " + size.height); // Debugging: check the updated size
      }
    };
    setTimeout(updateSize, 0); // Delay measuring until after render
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
      className="w-1/2 h-1/2 absolute -translate-x-[50%]-translate-y-[50%] 
        top-[0%] left-[0%] border-2"
    >
      <span>{size.width}</span>
      <span>{size.height}</span>

      <ScratchCard
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
