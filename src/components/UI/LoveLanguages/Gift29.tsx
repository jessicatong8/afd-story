import text from "/src/assets/UI/LoveLanguages/29_gifts.png";

interface Props {
  clicked: boolean;
  hover: boolean;
  opacity: string;
}
const Gift29 = ({ clicked, hover, opacity }: Props) => {
  return (
    <span>
      {/* yellow glow */}
      <svg
        className={`absolute w-1/2 h-1/2 scale-118 top-[70.7%] left-[68.5%] -translate-x-[50%] -translate-y-[50%] transition-opacity duration-1000
          ${clicked ? "opacity-0" : "opacity-100 animate-pulse-fast"}
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
            stroke-opacity={opacity}
            stroke-width={clicked || hover ? "25" : "15"}
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

      {/* inner glow */}
      <svg
        className={`absolute w-1/2 h-1/2 scale-116 top-[70.8%] left-[68.5%] -translate-x-[50%] -translate-y-[50%] transition-opacity duration-1000 
        ${clicked ? "opacity-0" : "opacity-100"}
        `}
        width="867"
        height="517"
        viewBox="0 0 867 517"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_3961_588)">
          <path
            d="M12 287.848C12.6621 277.018 13.979 265.938 15.8548 254.644C39.8152 110.384 199.027 13.3547 421.002 13.3547C706.983 -2.85291 855 128.593 855 288.251C855 447.909 778.865 502.527 421.002 504.959C118.216 507.016 20.4246 430.932 12.9474 319.494"
            stroke="white"
            stroke-width="8"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_3961_588"
            x="0.0078125"
            y="0"
            width="866.992"
            height="517"
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
              result="effect1_foregroundBlur_3961_588"
            />
          </filter>
        </defs>
      </svg>

      <img
        src={text}
        className={`absolute w-1/2 scale-122 h-auto top-[70.6%] left-[65.8%] -translate-x-[50%] -translate-y-[50%] transition-opacity duration-300 pointer-events-none
       ${clicked ? "opacity-100" : "opacity-0"}`}
      />
    </span>
  );
};

export default Gift29;
