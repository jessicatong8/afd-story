import text from "/src/assets/UI/LoveLanguages/20_words.png";

interface Props {
  clicked: boolean;
  hover: boolean;
}
const Words20 = ({ clicked, hover }: Props) => {
  return (
    <span>
      <svg
        className={`absolute w-1/2 h-1/2 scale-116 top-[62.2%] left-[36.2%] -translate-x-[50%] -translate-y-[50%] transition-opacity duration-1000
        ${clicked ? "opacity-0" : "opacity-100"}
        `}
        width="556"
        height="348"
        viewBox="0 0 556 348"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_2217_1080)">
          <path
            d="M379 31.1113C348.475 23.8512 314.189 18.8764 276.632 16.2996C114.635 5.18473 20.3878 92.3825 16.0792 180.3C11.7706 268.217 85.118 331.278 281.471 332.757C477.825 334.236 541.798 265.748 540.779 174.445C540.083 112.061 492.648 66.2845 410.995 40"
            stroke="#FFEC5B"
            stroke-opacity="0.7"
            stroke-width={clicked || hover ? "20" : "10"}
          />
        </g>
        <defs>
          <filter
            id="filter0_f_2217_1080"
            x="0.900879"
            y="0.341797"
            width="554.89"
            height="347.439"
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

      <img
        src={text}
        className={`absolute w-1/2 scale-100 h-auto top-[60%] left-[35.5%] -translate-x-[50%] -translate-y-[50%] transition-opacity duration-300
       ${clicked ? "opacity-100" : "opacity-0"}`}
      />
    </span>
  );
};

export default Words20;
