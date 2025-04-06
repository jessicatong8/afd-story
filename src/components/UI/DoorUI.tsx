import { useState } from "react";
import { useReadContext } from "../ReadContext";
import { useNavigate } from "react-router-dom";

const DoorUI = () => {
  const { toggleNext } = useReadContext();
  const navigate = useNavigate();

  const onClick = () => {
    toggleNext(true);
    navigate(`/read/4`);
  };

  const [strokeWidth, setStrokeWidth] = useState("10");

  return (
    <button onClick={onClick}>
      <svg
        className="absolute top-[29%] left-[14%] -translate-x-[50%]
       -translate-y-[50%] w-1/4 h-auto scale-112 cursor-pointer"
        onMouseEnter={() => setStrokeWidth("20")}
        onTouchStart={() => setStrokeWidth("20")}
        onMouseLeave={() => setStrokeWidth("10")}
        width="269"
        height="483"
        viewBox="0 0 269 483"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_1731_717)">
          <path
            d="M1 21.5C1 21.5 227 6.49998 232.5 10.5C238 14.5 235.231 50.5 236.5 64.5C237.769 78.5 244.5 106 247.5 146C250.5 186 249.5 261.5 251.5 298C252.283 312.294 251.679 313 255.339 372.5C259 432 259.913 470.979 259 472.5C257.5 475 1 473 1 473"
            stroke="#FFEC5B"
            stroke-opacity="0.7"
            stroke-width={strokeWidth}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_1731_717"
            x="-8"
            y="0.821777"
            width="276.329"
            height="481.936"
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
              stdDeviation="3"
              result="effect1_foregroundBlur_1731_717"
            />
          </filter>
        </defs>
      </svg>
    </button>
  );
};

export default DoorUI;
