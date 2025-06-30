import text from "/src/assets/UI/LoveLanguages/17_food.png";
import dialogue from "/src/assets/UI/LoveLanguages/17_dialogue.png";
import smile from "/src/assets/UI/LoveLanguages/17_after-smile.png";

interface Props {
  clicked: boolean;
  hover: boolean;
  opacity: string;
}
const Food17 = ({ clicked, hover, opacity }: Props) => {
  return (
    <span>
      <svg
        className={`absolute w-1/2 h-1/2 scale-108 top-[19.6%] left-[40%] -translate-x-[50%] -translate-y-[50%] transition-opacity duration-1000 
                ${clicked ? "opacity-0 animate-none" : "opacity-100 animate-pulse-fast"}
                `}
        width="636"
        height="342"
        viewBox="0 0 636 342"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_2217_977)">
          <path
            d="M516.072 310.415C464.121 325.613 394.055 332 306.509 332C84.9097 332 -0.162892 281.216 10.9563 169.912C22.0756 58.6075 210.403 10 306.509 10C402.615 9.99996 612.3 48.7451 625.008 169.912C631.938 235.983 602.498 278.194 538.362 302.92"
            stroke="#FFEC5B"
            stroke-opacity={opacity}
            stroke-width={clicked || hover ? "25" : "15"}
          />
        </g>
        <defs>
          <filter
            id="filter0_f_2217_977"
            x="0"
            y="0"
            width="635.999"
            height="342"
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
              result="effect1_foregroundBlur_2217_977"
            />
          </filter>
        </defs>
      </svg>

      {/* inner glow */}

      <svg
        className={`absolute w-1/2 h-1/2 scale-105 top-[19.4%] left-[40%] -translate-x-[50%] -translate-y-[50%] transition-opacity duration-1000 
        ${clicked ? "opacity-0" : "opacity-100"}
        `}
        width="930"
        height="487"
        viewBox="0 0 930 487"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_3747_1327)">
          <path
            d="M448.746 12.5C519.101 12.5 630.902 26.2032 727.562 61.3828C823.861 96.4316 907.008 153.528 916.533 241.41C921.23 284.748 914.655 321.278 896.716 351.6C878.789 381.901 849.755 405.592 810.271 423.71C731.492 459.86 610.145 474.25 448.746 474.25C287.299 474.25 174.782 456.384 104.561 418.381C69.3412 399.32 44.6258 375.124 29.8115 345.488C15.0085 315.875 10.2687 281.188 14.373 241.431C22.7143 160.634 97.3099 103.479 185.599 66.6621C274.194 29.7176 378.272 12.5 448.746 12.5Z"
            stroke="white"
            stroke-width="8"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_3747_1327"
            x="0.958984"
            y="0.5"
            width="929.041"
            height="485.75"
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
              result="effect1_foregroundBlur_3747_1327"
            />
          </filter>
        </defs>
      </svg>

      <img
        src={dialogue}
        className={`absolute w-1/2 scale-100 h-auto top-[20%] left-[40%] -translate-x-[50%] -translate-y-[50%] transition-opacity duration-300 pointer-events-none
       ${clicked ? "opacity-0" : "opacity-100"}`}
      />
      <img
        src={smile}
        className="absolute w-full h-auto top-[0%] transition-opacity duration-300 pointer-events-none"
      />
      <img
        src={text}
        className={`absolute w-1/2 scale-100 h-auto top-[19.7%] left-[40%] -translate-x-[50%] -translate-y-[50%] transition-opacity duration-300 pointer-events-none
       ${clicked ? "opacity-100" : "opacity-0"}`}
      />
    </span>
  );
};

export default Food17;
