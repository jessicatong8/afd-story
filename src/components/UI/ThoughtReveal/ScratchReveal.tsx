import { useState, useLayoutEffect, useEffect, useRef } from "react";
import ScratchCard from "react-scratchcard-v2";

import image from "/src/assets/UI/ThoughtCloud/thought-cloud.png";
import { useReadContext } from "../../ReadContext";
import ThoughtBubbleGlow from "./ThoughtBubbleGlow";
import pointer from "/src/assets/UI/ThoughtCloud/swipe-pointer.png";
import { motion } from "framer-motion";

const ScratchReveal = () => {
  const containerRef = useRef(null); // Reference the parent <div>
  const [size, setSize] = useState({ width: 0, height: 0 }); // State to store the size of the ScratchCard
  const { toggleNext, toggleBack } = useReadContext();
  const [isRevealed, setIsRevealed] = useState(false); // State to track whether the card has been revealed

  // Update size of the ScratchCard whenever size of the parent div changes

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        setSize({ width, height });
      }
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  // // Debugging to confirm state updates
  // useEffect(() => {
  //   console.log("Updated size:", size.width, size.height);
  // }, [size]); // Runs whenever `size` changes

  const [isHovered, setIsHovered] = useState(false); // State to track whether the mouse is hovering over the card
  const [isDragging, setIsDragging] = useState(false); // State to track when touch input is dragging to reveal the card
  const [strokeWidth, setStrokeWidth] = useState("10"); // State to track strokeWidth of the glow

  useEffect(() => {
    if (isHovered || isDragging) {
      setStrokeWidth("18");
    } else {
      setStrokeWidth("10");
    }

    toggleBack(!isDragging); // true when not dragging, false when dragging
    toggleNext(!isDragging);
  }, [isHovered, isDragging]); // Add dependencies

  // enable navigation when revealed
  useEffect(() => {
    if (isRevealed) {
      setTimeout(() => {
        toggleNext(true);
        toggleBack(true);
      }, 1000);
    }
  }, [isRevealed]);

  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAnimation(true);
    }, 100); // Delay a bit after paint (or set to 0 for immediate mount)

    return () => clearTimeout(timeout);
  }, []);

  // useEffect(() => {
  //   const handleVisibilityChange = () => {
  //     if (document.visibilityState === "visible") {
  //       setShowAnimation(false);
  //       requestAnimationFrame(() => {
  //         setShowAnimation(true);
  //       });
  //     }
  //   };

  //   document.addEventListener("visibilitychange", handleVisibilityChange);
  //   return () =>
  //     document.removeEventListener("visibilitychange", handleVisibilityChange);
  // }, []);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={(e) => e.stopPropagation()}
      // onMouseDown={() => setIsDragging(true)}
      // onMouseUp={() => setIsDragging(false)}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      // onDragStart={(e) => {
      //   e.stopPropagation();
      //   toggleBack(false);
      // }}
      // onDragEnd={(e) => {
      //   e.stopPropagation();
      //   toggleBack(true);
      // }}
      className={`w-1/2 h-1/3 absolute 
        top-[3.5%] left-[24%] scale-95 ${!isRevealed && "cursor-pointer"}`}
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
          transition: { repeat: Infinity },
        }}
        className={`absolute w-1/6 h-auto scale-120 -translate-x-[50%] -translate-y-[50%] top-[61%] left-[101%] z-30 text-blue-400 fill-orange-100
     transition-opacity duration-1000 pointer-events-none
      ${showAnimation ? "animate-bounce" : ""}
      ${isRevealed ? "opacity-0" : "opacity-100"}`}
      >
        <img src={pointer} />
      </motion.div>

      <span
        className={`transition-opacity duration-1000 ${isRevealed ? "opacity-0" : "opacity-100"}`}
      >
        <ThoughtBubbleGlow strokeWidth={strokeWidth} />
      </span>

      {/* conditionally render when size is valid */}
      {size.width > 0 && size.height > 0 && (
        <ScratchCard
          key={`${size.width}-${size.height}`}
          width={size.width}
          height={size.height}
          image={image}
          finishPercent={55}
          fadeOutOnComplete={true}
          onComplete={() => setIsRevealed(true)}
        />
      )}
    </div>
  );
};

export default ScratchReveal;
