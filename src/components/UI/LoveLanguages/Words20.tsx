import text from "/src/assets/UI/LoveLanguages/20_words.png";

interface Props {
  clicked: boolean;
  hover: boolean;
}
const Words20 = ({ clicked, hover }: Props) => {
  return (
    <span>
      <svg
        className={`absolute w-1/2 h-1/2 scale-114 top-[62.3%] left-[36.2%] -translate-x-[50%] -translate-y-[50%] transition-opacity duration-1000
        ${clicked ? "opacity-0" : "opacity-100"}
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
            stroke-opacity="0.7"
            stroke-width={clicked || hover ? "20" : "10"}
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

      <img
        src={text}
        className={`absolute w-1/2 scale-100 h-auto top-[60%] left-[35.5%] -translate-x-[50%] -translate-y-[50%] transition-opacity duration-300
       ${clicked ? "opacity-100" : "opacity-0"}`}
      />
    </span>
  );
};

export default Words20;
