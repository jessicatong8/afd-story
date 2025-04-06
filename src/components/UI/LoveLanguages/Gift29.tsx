import text from "/src/assets/UI/LoveLanguages/29_gifts.png";

interface Props {
  clicked: boolean;
  hover: boolean;
}
const Gift29 = ({ clicked, hover }: Props) => {
  return (
    <span>
      <svg
        className={`absolute w-1/2 h-1/2 scale-119 top-[70.2%] left-[68.5%] -translate-x-[50%] -translate-y-[50%] transition-opacity duration-1000
          ${clicked ? "opacity-0" : "opacity-100"}
          `}
        width="591"
        height="362"
        viewBox="0 0 591 362"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_2235_869)">
          <path
            d="M10 202.773C10.4533 195.362 11.3549 187.78 12.6393 180.052C29.0443 81.3356 135.314 10.9034 287.294 10.9034C483.098 -0.18747 581 92.4273 581 201.68C581 310.934 532.314 350.309 287.294 351.973C79.9849 353.381 15.1195 300.001 10 223.744"
            stroke="#FFEC5B"
            stroke-opacity="0.7"
            stroke-width={clicked || hover ? "20" : "10"}
          />
        </g>
        <defs>
          <filter
            id="filter0_f_2235_869"
            x="0.00927734"
            y="0"
            width="590.991"
            height="362"
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
              result="effect1_foregroundBlur_2235_869"
            />
          </filter>
        </defs>
      </svg>

      <img
        src={text}
        className={`absolute w-1/2 scale-122 h-auto top-[70%] left-[65.8%] -translate-x-[50%] -translate-y-[50%] transition-opacity duration-300
       ${clicked ? "opacity-100" : "opacity-0"}`}
      />
    </span>
  );
};

export default Gift29;
