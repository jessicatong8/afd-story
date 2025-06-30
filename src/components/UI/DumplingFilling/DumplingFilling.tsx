import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

import happyImage from "/src/assets/UI/DumplingFilling/happy.png";
import heartImage from "/src/assets/UI/DumplingFilling/heart.png";
import timeImage from "/src/assets/UI/DumplingFilling/time.png";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  id: number;
  activeID: number;
  dropped: boolean[];
  completed: boolean;
}
const DumplingFilling = ({ id, activeID, dropped, completed }: Props) => {
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

  const outsidePositions = [
    "top-[15%] left-[25%]",
    "top-[12%] left-[50%]",
    "top-[15%] left-[75%]",
  ];
  const insidePositions = [
    "top-[40%] left-[50%] transition-none scale-100",
    "top-[58%] left-[60%] transition-none scale-100",
    "top-[70%] left-[40%] transition-none scale-100",
  ];

  const image = [happyImage, heartImage, timeImage];
  const outsidePos = outsidePositions[id];
  const insidePos = insidePositions[id];

  // const animationVariants = {{
  //   complete: { scale: [1, 1.5, 1] }
  // }

  // }

  //   console.log("filling: " + dropped);

  const getAnimation = () => {
    return completed && { scale: [1, 1.5, 0] };
  };

  return (
    <AnimatePresence>
      <motion.div
        animate={getAnimation()}
        transition={{ delay: 0.2, duration: 0.5 }}
        //        whileHover={{
        //   scale: 1.2,
        //   transition: { duration: 1 },
        // }}
        ref={setNodeRef}
        style={style}
        {...listeners}
        {...attributes}
        className={`w-1/5 h-1/5 rounded-full absolute -translate-x-[50%] -translate-y-[50%] z-10 cursor-grab scale-75 hover:scale-100
        ${isDropping || hasBeenDropped ? insidePos : outsidePos}
         ${isDragging ? "scale-100 transition-none cursor-grabbing" : "transition-transform"}
     `} // if this filling is being dropped or has already been dropped then render inside the wrapper
      >
        <img
          src={image[id]}
          className="absolute w-full h-auto z-20 pointer-events-none"
        />
        {/* old glow */}
        {/* <svg
          className={`absolute w-full h-auto z-10 animate-pulse-fast hover:animate-none
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
              stroke="#FFEC5B"
              stroke-opacity="0.9"
              stroke-width="10"
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
        </svg> */}

        {/* white circle bg */}
        <svg
          className={`absolute w-full scale-95 h-auto z-10 
          ${isDragging || isDropping || hasBeenDropped ? "invisible" : ""}`}
          width="196"
          height="196"
          viewBox="0 0 196 196"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="98"
            cy="98"
            r="95.25"
            fill="white"
            stroke="white"
            stroke-width="4.5"
          />
        </svg>

        {/* yellow glow */}
        <svg
          className={`absolute w-full scale-108 h-auto z-20 animate-pulse-fast hover:animate-none
          ${isDragging || isDropping || hasBeenDropped ? "invisible" : ""}`}
          width="232"
          height="232"
          viewBox="0 0 232 232"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_2237_940)">
            <circle
              cx="116"
              cy="116"
              r="100.5"
              stroke="#FFEC5B"
              stroke-opacity="0.9"
              stroke-width="18"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_2237_940"
              x="0"
              y="0"
              width="232"
              height="232"
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
                stdDeviation="4"
                result="effect1_foregroundBlur_2237_940"
              />
            </filter>
          </defs>
        </svg>
      </motion.div>
    </AnimatePresence>
  );
};

export default DumplingFilling;
