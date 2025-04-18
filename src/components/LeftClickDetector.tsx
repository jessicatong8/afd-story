import { useEffect } from "react";

type Props = {
  onLeftClick?: () => void;
};

export default function LeftClickDetector({ onLeftClick }: Props) {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const width = window.innerWidth;
      const height = window.innerHeight;

      const xMin = width * 0;
      const xMax = width * 0.3;
      // const yMin = height * 0.3;
      // const yMax = height * 0.7;

      if (
        clientX >= xMin &&
        clientX <= xMax
        // clientY >= yMin &&
        // clientY <= yMax
      ) {
        onLeftClick?.();
        // console.log("left clicked");
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [onLeftClick]);

  return null;
}
