import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

import happyImage from "/src/assets/UI/DumplingFilling/happy.png";
import heartImage from "/src/assets/UI/DumplingFilling/heart.png";
import timeImage from "/src/assets/UI/DumplingFilling/time.png";

interface Props {
  id: number;
  activeID: number;
  dropped: boolean[];
}
const DumplingFilling = ({ id, activeID, dropped }: Props) => {
  const isDropping = id === activeID; // this is the filling currently being dropped
  const hasBeenDropped = dropped[id]; // this filling has already been dropped
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: id,
      disabled: hasBeenDropped,
    });

  //   console.log(
  //     "filling: " +
  //       id +
  //       " active dragging: " +
  //       activeID +
  //       " this dropped: " +
  //       isDropping +
  //       " has been dropped: " +
  //       dropped[id]
  //   );

  // updates position of the element as it is dragged
  const style = {
    transform: CSS.Translate.toString(transform),
  };

  const fillingColors = ["bg-red-300", "bg-green-300", "bg-blue-300"];
  const outsidePositions = [
    "top-[15%] left-[25%]",
    "top-[12%] left-[50%]",
    "top-[15%] left-[75%]",
  ];
  const insidePositions = [
    "top-[40%] left-[50%] transition-none scale-150",
    "top-[58%] left-[60%] transition-none scale-150",
    "top-[70%] left-[40%] transition-none scale-150",
  ];

  const image = [happyImage, heartImage, timeImage];
  const outsidePos = outsidePositions[id];
  const insidePos = insidePositions[id];

  //   console.log("filling: " + dropped);
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`w-1/7 h-1/7 rounded-full absolute -translate-x-[50%] -translate-y-[50%] z-10 cursor-grab hover:scale-150
        ${isDropping || hasBeenDropped ? insidePos : outsidePos}
         ${isDragging ? "scale-150 transition-none cursor-grabbing" : "transition-transform"}
     `} // if this filling is being dropped or has already been dropped then render inside the wrapper
    >
      <img src={image[id]} className="absolute w-full h-auto z-20" />
      <svg
        className={`absolute w-full h-auto z-10
          ${isDragging || isDropping || hasBeenDropped ? "invisible" : ""}
        `}
        width="152"
        height="152"
        viewBox="0 0 152 152"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_2237_940)">
          <circle cx="76" cy="76" r="62" fill="white" />
          <circle
            cx="76"
            cy="76"
            r="67"
            stroke="#FFDD53"
            stroke-opacity="0.7"
            stroke-width="8"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_2237_940"
            x="0"
            y="0"
            width="152"
            height="152"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="2"
              result="effect1_foregroundBlur_2237_940"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default DumplingFilling;
