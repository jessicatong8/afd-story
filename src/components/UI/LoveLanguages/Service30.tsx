import text from "/src/assets/UI/LoveLanguages/30_service.png";

interface Props {
  clicked: boolean;
  hover: boolean;
}
const Service30 = ({ clicked, hover }: Props) => {
  return (
    <span>
      <svg
        className={`absolute w-1/2 h-1/2 scale-104 top-[75.8%] left-[30.2%] -translate-x-[50%] -translate-y-[50%] transition-opacity duration-1000
        ${clicked ? "opacity-0" : "opacity-100"}
        `}
        width="516"
        height="395"
        viewBox="0 0 516 395"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_2235_891)">
          <path
            d="M500.483 234.213C501.383 221.453 501.091 208.135 499.742 194.376C488.899 83.7377 411.91 25.6791 264.44 15.8208C116.969 5.96259 16.6668 85.9285 15.0402 200.401C13.4137 314.874 60.5827 371.836 256.849 379.504C412.617 385.59 480.959 335.096 497.11 258.688"
            stroke="#FFEC5B"
            stroke-opacity="0.7"
            stroke-width={clicked || hover ? "20" : "10"}
          />
        </g>
        <defs>
          <filter
            id="filter0_f_2235_891"
            x="0"
            y="0"
            width="516"
            height="395"
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
              result="effect1_foregroundBlur_2235_891"
            />
          </filter>
        </defs>
      </svg>

      <img
        src={text}
        className={`absolute w-1/2 scale-102 h-auto top-[73.7%] left-[32.6%] -translate-x-[50%] -translate-y-[50%] transition-opacity duration-300
       ${clicked ? "opacity-100" : "opacity-0"}`}
      />
    </span>
  );
};

export default Service30;
