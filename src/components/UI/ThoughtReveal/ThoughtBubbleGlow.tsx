interface Props {
  strokeWidth: string;
}

const ThoughtBubbleGlow = ({ strokeWidth }: Props) => {
  return (
    <div>
      <svg
        className="absolute w-full h-auto scale-110 top-[-2.5%] left-[0%] animate-pulse-fast"
        width="508"
        height="366"
        viewBox="0 0 508 366"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_1990_1444)">
          <path
            d="M498.731 189.034C496.748 156.414 476.01 129.134 446.651 114.201C448.934 106.671 449.991 98.7097 449.492 90.4938C446.892 47.7168 405.222 16.591 357.848 19.4703C337.654 20.6977 319.434 27.912 305.252 39.0011C290.826 19.7341 265.444 7.97345 237.571 9.66756C212.843 11.1705 191.383 22.944 178.467 40.1217C169.767 34.5395 158.902 31.562 147.353 32.2639C123.983 33.6843 104.574 49.9346 102.162 70.8183C96.7077 70.1297 91.0767 69.9144 85.3205 70.2642C41.5944 72.9218 6.79459 106.116 9.202 145.726C10.5762 168.336 23.8707 187.452 43.0426 199.14C25.3894 213.697 14.616 234.804 16.018 257.871C18.5354 299.291 58.8715 329.392 104.684 326.607C124.096 325.427 141.64 318.537 155.326 307.912C163.904 326.356 185.018 338.178 208.242 336.767C224.171 335.799 238.217 328.814 247.552 318.344C262.34 342.706 293.103 357.94 327.001 355.88C369.327 353.307 403.755 324.372 406.66 288.16C460.581 280.864 501.742 238.582 498.731 189.034Z"
            stroke="#FFEC5B"
            stroke-opacity="0.9"
            stroke-width={strokeWidth}
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
              stdDeviation="3"
              result="effect1_foregroundBlur_1990_1444"
            />
          </filter>
        </defs>
      </svg>
      {/* inner glow */}
      <svg
        className="absolute w-full h-auto scale-108 top-[-2.5%] left-[0%]"
        width="760"
        height="542"
        viewBox="0 0 760 542"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_3747_1328)">
          <path
            d="M355.593 13.8561C397.814 11.29 436.01 29.5297 456.882 58.9369C478.122 41.6908 505.865 30.3922 536.761 28.5144C607.046 24.2425 668.297 70.1852 672.095 132.675C672.87 145.412 671.073 157.741 667.278 169.363C711.837 191.196 743.272 231.864 746.226 280.468C750.685 353.824 688.852 416.803 607.644 426.827C604.506 480.552 553.487 524.291 489.865 528.158C438.172 531.299 391.692 507.425 370.746 470.039C357.219 486.706 335.69 498.031 310.988 499.533C275.646 501.681 243.936 483.042 232.453 454.754C211.893 471.535 184.971 482.512 155.004 484.333C87.0705 488.462 27.8278 444.056 24.1533 383.603C22.033 348.717 39.0516 316.785 66.782 295.332C36.8377 278.372 16.0062 249.556 13.9292 215.385C10.42 157.646 61.447 108.749 126.239 104.811C135.663 104.238 144.864 104.686 153.737 105.973C155.895 74.8414 184.507 49.9239 219.69 47.7854C237.453 46.7058 254.063 51.5655 267.014 60.4857C285.828 34.2953 318.124 16.1334 355.593 13.8561Z"
            stroke="white"
            stroke-width="8"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_3747_1328"
            x="0.756836"
            y="0.616211"
            width="758.697"
            height="540.817"
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
              result="effect1_foregroundBlur_3747_1328"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default ThoughtBubbleGlow;
