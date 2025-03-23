import { useState } from "react";

interface Props {
  handleClick: () => void;
}
const DoorUI = ({ handleClick }: Props) => {
  const [strokeWidth, setStrokeWidth] = useState("10");
  return (
    <button onClick={handleClick}>
      <svg
        className="absolute top-[35%] left-[10%] -translate-x-[50%] -translate-y-[50%] w-full h-full scale-50 cursor-pointer"
        onMouseEnter={() => setStrokeWidth("20")}
        onMouseLeave={() => setStrokeWidth("10")}
        //   width="270"
        //   height="426"
        viewBox="0 0 270 426"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_556_643)">
          <path
            d="M9 9H238.268L260.717 417H9V9Z"
            stroke="#FFE600"
            stroke-opacity="0.5"
            stroke-width={strokeWidth}
          />
        </g>
        <defs>
          <filter
            id="filter0_f_556_643"
            x="0"
            y="0"
            width="270"
            height="426"
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
              result="effect1_foregroundBlur_556_643"
            />
          </filter>
        </defs>
      </svg>
    </button>
  );
};

export default DoorUI;
