import text from "/src/assets/UI/LoveLanguages/31_time.png";

interface Props {
  clicked: boolean;
  hover: boolean;
  opacity: string;
}
const Time31 = ({ clicked, hover, opacity }: Props) => {
  return (
    <span>
      <svg
        className={`absolute w-1/2 h-1/2 scale-113 top-[64.7%] left-[31.7%] -translate-x-[50%] -translate-y-[50%] transition-opacity duration-1000
        ${clicked ? "opacity-0" : "opacity-100 animate-pulse-fast"}
        `}
        width="557"
        height="408"
        viewBox="0 0 557 408"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_2235_927)">
          <path
            d="M329.649 22.5239C305.767 17.6414 280.366 15 253.705 15C98.7089 27.5455 26.3412 110.455 15 221.182C15 330.835 75.4864 393 274.227 393C441.112 393 529.171 328.771 541.282 249.402M354.779 28.6325C455.482 57.1302 524.649 126.691 539.936 202.636C540.846 207.158 541.534 211.663 542 216.142"
            stroke="#FFEC5B"
            stroke-opacity={opacity}
            stroke-width={clicked || hover ? "20" : "10"}
          />
        </g>
        <defs>
          <filter
            id="filter0_f_2235_927"
            x="0"
            y="0"
            width="556.974"
            height="408"
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
              result="effect1_foregroundBlur_2235_927"
            />
          </filter>
        </defs>
      </svg>

      <img
        src={text}
        className={`absolute w-1/2 scale-116 h-auto top-[63.1%] left-[35.4%] -translate-x-[50%] -translate-y-[50%] transition-opacity duration-300 pointer-events-none
       ${clicked ? "opacity-100" : "opacity-0"}`}
      />
    </span>
  );
};

export default Time31;
