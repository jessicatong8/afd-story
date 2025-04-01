interface Props {
  hover: boolean;
}

const ThoughtBubbleGlow = ({ hover }: Props) => {
  return (
    <svg
      className="absolute w-full h-auto scale-106 top-[-2.5%] left-[0%]"
      width="508"
      height="366"
      viewBox="0 0 508 366"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_1990_1444)">
        <path
          d="M498.731 189.034C496.748 156.414 476.01 129.134 446.651 114.201C448.934 106.671 449.991 98.7097 449.492 90.4938C446.892 47.7168 405.222 16.591 357.848 19.4703C337.654 20.6977 319.434 27.912 305.252 39.0011C290.826 19.7341 265.444 7.97345 237.571 9.66756C212.843 11.1705 191.383 22.944 178.467 40.1217C169.767 34.5395 158.902 31.562 147.353 32.2639C123.983 33.6843 104.574 49.9346 102.162 70.8183C96.7077 70.1297 91.0767 69.9144 85.3205 70.2642C41.5944 72.9218 6.79459 106.116 9.202 145.726C10.5762 168.336 23.8707 187.452 43.0426 199.14C25.3894 213.697 14.616 234.804 16.018 257.871C18.5354 299.291 58.8715 329.392 104.684 326.607C124.096 325.427 141.64 318.537 155.326 307.912C163.904 326.356 185.018 338.178 208.242 336.767C224.171 335.799 238.217 328.814 247.552 318.344C262.34 342.706 293.103 357.94 327.001 355.88C369.327 353.307 403.755 324.372 406.66 288.16C460.581 280.864 501.742 238.582 498.731 189.034Z"
          stroke="#FFDD53"
          stroke-opacity="0.7"
          stroke-width={hover ? "15" : "10"}
        />
      </g>
      <defs>
        <filter
          id="filter0_f_1990_1444"
          x="0.0830078"
          y="0.506348"
          width="507.805"
          height="364.559"
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
            stdDeviation="2"
            result="effect1_foregroundBlur_1990_1444"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default ThoughtBubbleGlow;
