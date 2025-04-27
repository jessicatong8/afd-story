import { useEffect } from "react";

type MiddleClickDetectorProps = {
  onMiddleClick?: () => void;
};

export default function MiddleClickDetector({
  onMiddleClick,
}: MiddleClickDetectorProps) {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const width = window.innerWidth;
      const height = window.innerHeight;

      const xMin = width * 0.1;
      const xMax = width * 0.9;
      const yMin = height * 0.1;
      const yMax = height * 0.9;

      if (
        clientX >= xMin &&
        clientX <= xMax &&
        clientY >= yMin &&
        clientY <= yMax
      ) {
        onMiddleClick?.();
        // console.log("middle clicked");
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [onMiddleClick]);

  return null;
}
