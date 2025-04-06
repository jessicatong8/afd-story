import text from "/src/assets/UI/LoveLanguages/17_food.png";
import dialogue from "/src/assets/UI/LoveLanguages/17_dialogue.png";

interface Props {
  clicked: boolean;
  hover: boolean;
}
const Food17 = ({ clicked, hover }: Props) => {
  return (
    <span>
      <svg
        className={`absolute w-1/2 h-1/2 scale-108 top-[19.5%] left-[40%] -translate-x-[50%] -translate-y-[50%] transition-opacity duration-1000
                ${clicked ? "opacity-0" : "opacity-100"}
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
            stroke-opacity="0.7"
            stroke-width={clicked || hover ? "20" : "10"}
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
      <img
        src={dialogue}
        className={`absolute w-1/2 scale-100 h-auto top-[20%] left-[40%] -translate-x-[50%] -translate-y-[50%] transition-opacity duration-300
       ${clicked ? "opacity-0" : "opacity-100"}`}
      />
      <img
        src={text}
        className={`absolute w-1/2 scale-100 h-auto top-[19.7%] left-[40%] -translate-x-[50%] -translate-y-[50%] transition-opacity duration-300
       ${clicked ? "opacity-100" : "opacity-0"}`}
      />
    </span>
  );
};

export default Food17;
