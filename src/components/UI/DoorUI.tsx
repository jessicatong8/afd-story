import { useEffect, useState } from "react";
import { useReadContext } from "../ReadContext";
import { useNavigate } from "react-router-dom";
import pointer from "/src/assets/UI/Door/door-pointer.png";
import { motion } from "framer-motion";

const DoorUI = () => {
  const { toggleNext } = useReadContext();
  const navigate = useNavigate();

  const onClick = () => {
    toggleNext(true);
    navigate(`/read/4`);
  };

  const [strokeWidth, setStrokeWidth] = useState("30");

  return (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        onMouseEnter={() => setStrokeWidth("45")}
        onTouchStart={() => setStrokeWidth("45")}
        onMouseLeave={() => setStrokeWidth("30")}
      >
        <motion.div
          className={`absolute w-1/12 h-auto scale-95 -translate-x-[50%] -translate-y-[50%] top-[49%] left-[35%] -rotate-55 pointer-events-none`}
          animate={{
            y: [0, -10, 0],
            transition: { repeat: Infinity },
          }}
        >
          <img src={pointer} />
        </motion.div>

        {/* old yellow glow */}
        {/* <svg
          className="absolute top-[29%] left-[14%] -translate-x-[50%]
       -translate-y-[50%] w-1/4 h-auto scale-112 cursor-pointer animate-pulse-fast"
          onMouseEnter={() => setStrokeWidth("18")}
          onTouchStart={() => setStrokeWidth("18")}
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
              stroke-opacity="0.9"
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
        </svg> */}

        {/* outer yellow glow */}

        <svg
          className="absolute top-[29%] left-[14%] -translate-x-[50%]
       -translate-y-[50%] w-1/4 h-auto scale-115 cursor-pointer animate-pulse-fast"
          width="428"
          height="772"
          viewBox="0 0 428 772"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_1731_717)">
            <path
              d="M3 41.2749C3 41.2749 354.691 17.8018 363.25 24.0613C371.809 30.3208 367.499 86.6563 369.475 108.564C371.45 130.473 381.924 173.506 386.592 236.101C391.261 298.696 389.705 416.844 392.817 473.962C394.036 496.331 393.095 497.435 398.792 590.545C404.488 683.655 405.908 744.652 404.488 747.032C402.154 750.945 3 747.815 3 747.815"
              stroke="#FFEC5B"
              stroke-opacity="0.9"
              stroke-width={strokeWidth}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_1731_717"
              x="-19.5"
              y="0.5"
              width="447"
              height="771"
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
                result="effect1_foregroundBlur_1731_717"
              />
            </filter>
          </defs>
        </svg>

        {/* inner white glow */}
        {/* <svg
          className="absolute top-[29%] left-[14%] -translate-x-[50%]
       -translate-y-[50%] w-1/4 h-auto scale-111 cursor-pointer"
          width="418"
          height="752"
          viewBox="0 0 418 752"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_3460_1272)">
            <path
              d="M3 31.2749C3 31.2749 354.691 7.80181 363.25 14.0613C371.809 20.3208 367.499 76.6563 369.475 98.5644C371.45 120.473 381.924 163.506 386.592 226.101C391.261 288.696 389.705 406.844 392.817 463.962C394.036 486.331 393.095 487.435 398.792 580.545C404.488 673.655 405.908 734.652 404.488 737.032C402.154 740.945 3 737.815 3 737.815"
              stroke="white"
              stroke-width="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_3460_1272"
              x="-10"
              y="0"
              width="428"
              height="752"
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
                result="effect1_foregroundBlur_3460_1272"
              />
            </filter>
          </defs>
        </svg> */}
        <svg
          className="absolute top-[29%] left-[13.5%] -translate-x-[50%]
       -translate-y-[50%] w-1/4 h-auto scale-109 cursor-pointer"
          width="408"
          height="737"
          viewBox="0 0 408 737"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_2296_996)">
            <path
              d="M1.5 28.5007C1.5 28.5007 105.95 24.0967 201 19.5001C278.226 15.7655 349.246 11.2701 353 14.0006C361.374 20.092 358.148 76.9476 360.08 98.2673C362.013 119.587 372.261 161.465 376.829 222.379C381.397 283.293 380.955 400.916 384 456.5C385.193 478.268 383.926 475.391 389.5 566C395.074 656.609 395.729 717.27 394.34 719.586C392.056 723.393 1.5 723.501 1.5 723.501"
              stroke="white"
              // stroke-opacity="0.9"
              stroke-width="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_2296_996"
              x="-11.5"
              y="0.162109"
              width="419.463"
              height="736.339"
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
                result="effect1_foregroundBlur_2296_996"
              />
            </filter>
          </defs>
        </svg>
      </button>
    </>
  );
};

export default DoorUI;
