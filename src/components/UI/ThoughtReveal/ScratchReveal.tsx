import { useState, useLayoutEffect, useEffect, useRef } from "react";
import ScratchCard from "react-scratchcard-v2";

import image from "/src/assets/thought-cloud.png";
import { useReadContext } from "../../ReadContext";
import ThoughtBubbleGlow from "./ThoughtBubbleGlow";
import { useNavigate } from "react-router-dom";

const ScratchReveal = () => {
  const containerRef = useRef(null); // Reference the parent <div>
  const [size, setSize] = useState({ width: 478, height: 352 }); // State to store the size
  const { handleNext, toggleNext, toggleBack } = useReadContext();
  const navigate = useNavigate();
  const [isRevealed, setIsRevealed] = useState(false); // State to track whether the card has been revealed

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

  // Debugging to confirm state updates
  useEffect(() => {
    console.log("Updated size:", size.width, size.height);
  }, [size]); // Runs whenever `size` changes

  const [isHovered, setIsHovered] = useState(false); // State to track whether the mouse is hovering over the card
  const [isDragging, setIsDragging] = useState(false); // State to track mouse is being dragged to reveal the card
  const [strokeWidth, setStrokeWidth] = useState("10"); // State to track strokeWidth of the glow

  useEffect(() => {
    isHovered || isDragging ? setStrokeWidth("15") : strokeWidth;
    !isDragging && !isHovered ? setStrokeWidth("10") : strokeWidth;
  });

  // turn to next page when revealed
  useEffect(() => {
    if (isRevealed) {
      toggleNext(true);
      setTimeout(() => {
        navigate(`/read/6`); // make this transition nicer
      }, 1500);
    }
  }, [isRevealed]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsHovered(false)}
      //   onDragStart={() => toggleBack(false)}
      //   onDragEnd={() => toggleBack(true)}
      className="w-1/2 h-1/3 absolute 
        top-[3.5%] left-[24%] scale-95 cursor-pointer"
    >
      <ThoughtBubbleGlow strokeWidth={strokeWidth} />

      <ScratchCard
        key={`${size.width}-${size.height}`}
        width={size.width}
        height={size.height}
        image={image}
        finishPercent={70}
        fadeOutOnComplete={true}
        onComplete={() => setIsRevealed(true)}
      ></ScratchCard>
    </div>
  );
};

export default ScratchReveal;
