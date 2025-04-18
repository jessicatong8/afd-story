import { useState, useLayoutEffect, useEffect, useRef } from "react";
import ScratchCard from "react-scratchcard-v2";

import image from "/src/assets/UI/ThoughtCloud/thought-cloud.png";
import { useReadContext } from "../../ReadContext";
import ThoughtBubbleGlow from "./ThoughtBubbleGlow";
import pointer from "/src/assets/UI/ThoughtCloud/swipe-pointer.svg";

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
  const [isDragging, setIsDragging] = useState(false); // State to track mouse is being dragged to reveal the card
  const [strokeWidth, setStrokeWidth] = useState("10"); // State to track strokeWidth of the glow

  useEffect(() => {
    isHovered || isDragging ? setStrokeWidth("18") : strokeWidth;
    !isDragging && !isHovered ? setStrokeWidth("10") : strokeWidth;
    isDragging ? toggleBack(false) : toggleBack(true);
  });

  // enable navigation when revealed
  useEffect(() => {
    if (isRevealed) {
      setTimeout(() => {
        toggleNext(true);
        toggleBack(true);
      }, 1000);
    }
    // if (isRevealed) {
    //   setTimeout(() => {
    //     navigate(`/read/6`); // make this transition nicer
    //     toggleNext(true);
    //   }, 1500);
    // }
  }, [isRevealed]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // onMouseDown={() => setIsDragging(true)}
      // onMouseUp={() => setIsDragging(false)}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onDragStart={() => toggleBack(false)}
      onDragEnd={() => toggleBack(true)}
      className="w-1/2 h-1/3 absolute 
        top-[3.5%] left-[24%] scale-95 cursor-pointer"
    >
      <img
        src={pointer}
        className="absolute w-1/6 h-auto scale-120 -translate-x-[50%] -translate-y-[50%] top-[61%] left-[101%] z-30 text-blue-400 fill-orange-100
      animate-bounce"
      />

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
          finishPercent={70}
          fadeOutOnComplete={true}
          onComplete={() => setIsRevealed(true)}
        />
      )}
    </div>
  );
};

export default ScratchReveal;
