import text from "/src/assets/UI/LoveLanguages/28_touch.png";

interface Props {
  clicked: boolean;
  hover: boolean;
}
const Touch28 = ({ clicked, hover }: Props) => {
  return (
    <span>
      <svg
        className={`absolute w-1/2 h-1/2 scale-104 top-[67.3%] left-[32%] -translate-x-[50%] -translate-y-[50%] transition-opacity duration-1000
        ${clicked ? "opacity-0" : "opacity-100"}
        `}
        width="510"
        height="388"
        viewBox="0 0 510 388"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_2229_815)">
          <path
            d="M499.38 249.2C500.897 231.875 499.627 212.869 495.607 192.222C471.078 66.2346 382.028 19.7329 253.517 10C119.815 10 23.6922 79.2118 11.4276 199.251C-0.8369 319.29 64.7515 372.28 253.517 377.688C397.953 381.825 477.453 344.808 495.839 270.754"
            stroke="#FFEC5B"
            stroke-opacity="0.7"
            stroke-width={clicked || hover ? "20" : "10"}
          />
        </g>
        <defs>
          <filter
            id="filter0_f_2229_815"
            x="0.00292969"
            y="0"
            width="509.997"
            height="388"
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
              result="effect1_foregroundBlur_2229_815"
            />
          </filter>
        </defs>
      </svg>
      <img
        src={text}
        className={`absolute w-1/2 scale-110 h-auto top-[65.8%] left-[35.8%] -translate-x-[50%] -translate-y-[50%] transition-opacity duration-300
       ${clicked ? "opacity-100" : "opacity-0"}`}
      />
    </span>
  );
};

export default Touch28;
