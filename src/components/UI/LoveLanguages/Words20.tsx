import text from "/src/assets/UI/LoveLanguages/20_words.png";

interface Props {
  clicked: boolean;
  hover: boolean;
  opacity: string;
}
const Words20 = ({ clicked, hover, opacity }: Props) => {
  return (
    <span>
      {/* yellow glow */}
      <svg
        className={`absolute w-1/2 h-1/2 scale-111 top-[62.8%] left-[36.2%] -translate-x-[50%] -translate-y-[50%] transition-opacity duration-1000
        ${clicked ? "opacity-0 " : "opacity-100 animate-pulse-fast"}
        `}
        width="569"
        height="360"
        viewBox="0 0 569 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_2217_1080)">
          <path
            d="M389.315 27.4282C357.468 19.6661 321.699 14.3436 282.518 11.5811C113.518 -0.33421 15.222 92.7662 10.7515 186.66C6.28104 280.554 82.8156 347.923 287.655 349.557C492.494 351.19 559.212 278.063 558.124 180.552C557.381 113.926 507.884 65.0244 422.694 36.9302"
            stroke="#FFEC5B"
            stroke-opacity={opacity}
            stroke-width={clicked || hover ? "25" : "15"}
          />
        </g>
        <defs>
          <filter
            id="filter0_f_2217_1080"
            x="0.567871"
            y="0.550781"
            width="567.569"
            height="359.033"
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
              result="effect1_foregroundBlur_2217_1080"
            />
          </filter>
        </defs>
      </svg>

      {/* inner glow */}

      <svg
        className={`absolute w-1/2 h-1/2 scale-109 top-[62.8%] left-[36.0%] -translate-x-[50%] -translate-y-[50%] transition-opacity duration-1000 
                ${clicked ? "opacity-0" : "opacity-100"}
                `}
        width="817"
        height="510"
        viewBox="0 0 817 510"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_3918_578)">
          <path
            d="M560.615 36.0993C514.924 24.9628 463.606 17.3265 407.392 13.3631C164.922 -3.73213 18.9134 128.29 12.4995 263.002C6.08558 397.714 120.873 495.921 414.761 498.265C708.649 500.609 806.06 397.402 804.499 257.501C803.433 161.911 730.729 90.0395 608.506 49.732"
            stroke="white"
            stroke-width="8"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_3918_578"
            x="0.746094"
            y="0.367188"
            width="815.271"
            height="509.438"
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
              result="effect1_foregroundBlur_3918_578"
            />
          </filter>
        </defs>
      </svg>

      <img
        src={text}
        className={`absolute w-1/2 scale-100 h-auto top-[60%] left-[35.5%] -translate-x-[50%] -translate-y-[50%] transition-opacity duration-300 pointer-events-none
       ${clicked ? "opacity-100" : "opacity-0"}`}
      />
    </span>
  );
};

export default Words20;
