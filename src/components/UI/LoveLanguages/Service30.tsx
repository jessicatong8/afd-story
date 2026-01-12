import text from "/src/assets/UI/LoveLanguages/30_service.png";
import pointer from "/src/assets/UI/LoveLanguages/pointer.svg";
import { motion } from "framer-motion";

interface Props {
  clicked: boolean;
  hover: boolean;
  opacity: string;
}
const Service30 = ({ clicked, hover, opacity }: Props) => {
  return (
    <span>
      {/* pointer */}
      <motion.div
        className={`absolute w-1/12 h-auto scale-95 -translate-x-[50%] -translate-y-[50%] top-[92%] left-[58%] -rotate-55 pointer-events-none
          transition-opacity duration-500
           ${clicked ? "opacity-0 " : "opacity-100"}
          `}
        animate={{
          y: [0, -10, 0],
          transition: { repeat: Infinity },
        }}
      >
        <img src={pointer} />
      </motion.div>

      {/* yellow glow */}
      <svg
        className={`absolute w-1/2 h-1/2 scale-102 top-[78.2%] left-[30.2%] -translate-x-[50%] -translate-y-[50%] transition-opacity duration-1000
        ${clicked ? "opacity-0" : "opacity-100 animate-pulse-fast"}
        `}
        width="516"
        height="395"
        viewBox="0 0 516 395"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_2235_891)">
          <path
            d="M500.483 234.213C501.383 221.453 501.091 208.135 499.742 194.376C488.899 83.7377 411.91 25.6791 264.44 15.8208C116.969 5.96259 16.6668 85.9285 15.0402 200.401C13.4137 314.874 60.5827 371.836 256.849 379.504C412.617 385.59 480.959 335.096 497.11 258.688"
            stroke="#FFEC5B"
            stroke-opacity={opacity}
            stroke-width={clicked || hover ? "25" : "15"}
          />
        </g>
        <defs>
          <filter
            id="filter0_f_2235_891"
            x="0"
            y="0"
            width="516"
            height="395"
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
              stdDeviation="5"
              result="effect1_foregroundBlur_2235_891"
            />
          </filter>
        </defs>
      </svg>

      {/* inner glow */}
      <svg
        className={`absolute w-1/2 h-1/2 scale-97 top-[78.4%] left-[30.3%] -translate-x-[50%] -translate-y-[50%] transition-opacity duration-1000 
        ${clicked ? "opacity-0" : "opacity-100"}
        `}
        width="726"
        height="549"
        viewBox="0 0 726 549"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_2338_1019)">
          <path
            d="M713.46 322.5C714.495 305.43 714.022 286.665 712.206 268.347C696.744 112.392 581.965 27.5533 371.682 13.6573C161.399 -0.238795 14.3763 116.48 12.057 277.84C9.73766 439.199 79.9973 525.493 359.859 536.301C581.628 544.866 685.12 467.924 708.345 360.5"
            stroke="white"
            stroke-width="8"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_2338_1019"
            x="0.00195312"
            y="0.537109"
            width="725.998"
            height="548.414"
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
              result="effect1_foregroundBlur_2338_1019"
            />
          </filter>
        </defs>
      </svg>

      <img
        src={text}
        className={`absolute w-1/2 scale-102 h-auto top-[75.9%] left-[32.6%] -translate-x-[50%] -translate-y-[50%] transition-opacity duration-300 pointer-events-none
       ${clicked ? "opacity-100" : "opacity-0"}`}
      />
    </span>
  );
};

export default Service30;
