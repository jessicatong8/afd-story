import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import dumplingImage from "/src/assets/UI/DumplingGiving/heart-dumpling_thick.png";

interface Props {
  dropped: boolean;
}

const DumplingHeart = ({ dropped }: Props) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: "draggable",
      disabled: dropped,
    });
  // updates position of the element as it is dragged
  const style = {
    transform: CSS.Translate.toString(transform),
  };

  const initialPos = "top-[78%] left-[61.5%]";
  const droppedPos = "top-[72%] left-[19%] transition-none";

  const glowSVG = (
    <defs>
      <filter
        id="filter0_f_1985_1286"
        x="0.723633"
        y="0.711182"
        width="203.566"
        height="189.135"
        filterUnits="userSpaceOnUse"
        // color-interpolation-filters="sRGB"
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
          result="effect1_foregroundBlur_1985_1286"
        />
      </filter>
    </defs>
  );

  const shadowSVG = (
    <defs>
      <filter id="filter0_f_1985_1286">
        <feOffset in="SourceGraphic" dx="5" dy="3" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="2"
          result="effect1_foregroundBlur_1985_1286"
        />
      </filter>
    </defs>
  );

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`w-1/7 aspect-square absolute cursor-grab z-10 scale-90  hover:scale-105
        ${dropped ? droppedPos : initialPos}
         ${isDragging ? "transition-none scale-105 cursor-grabbing" : "transition-transform"} `}
    >
      {/* image of dumpling */}
      <img
        src={dumplingImage}
        className="w-full absolute z-20 pointer-events-none"
      />
      {/* svg for border glow/shadow */}
      <svg
        className={`w-full h-auto absolute scale-105 z-10
          ${dropped ? "invisible" : ""} `}
        width="205"
        height="190"
        viewBox="0 0 205 190"
        fill="black"
        fillOpacity="0.15"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_1985_1286)">
          <path
            d="M86.9437 172.594L86.9452 172.596L86.9453 172.596L90.5739 177.417L95.3743 173.761L91.739 168.988C95.3743 173.761 95.375 173.761 95.376 173.76L95.3793 173.757L95.3911 173.749L95.4346 173.715L95.6006 173.588C95.7459 173.477 95.9596 173.313 96.2376 173.099C96.7937 172.67 97.6074 172.04 98.6463 171.229C100.724 169.607 103.703 167.258 107.323 164.341C114.56 158.51 124.379 150.393 134.69 141.26C144.99 132.138 155.847 121.943 165.132 111.959C174.319 102.081 182.347 92.0111 186.588 83.161C192.378 71.0804 195.707 57.4976 193.705 44.9366C191.642 31.9988 183.988 20.7354 169.193 13.9433C152.313 6.19436 133.291 13.8567 120.039 21.6652C113.154 25.7218 107.224 30.1733 103.029 33.5931C102.038 34.4005 101.141 35.1534 100.346 35.8337C99.6268 35.2294 98.8244 34.5691 97.9468 33.8671C93.9207 30.6464 88.235 26.4836 81.678 22.8155C69.136 15.7992 50.7867 9.1657 35.2926 19.0689C21.1711 28.0947 14.3585 41.9031 11.8841 54.9092C9.44489 67.7304 11.0733 80.5012 14.6879 88.3588C15.828 90.8373 18.1386 93.8008 20.6076 96.7063C23.2249 99.7863 26.561 103.411 30.2588 107.345C32.3249 109.544 34.5095 111.845 36.7686 114.225C42.6754 120.448 49.0913 127.207 55.2292 134.063C63.734 143.563 71.6686 153.202 77.4859 160.48C80.3917 164.114 82.7627 167.152 84.4048 169.277C85.2257 170.34 85.8641 171.174 86.2957 171.74C86.5115 172.023 86.6755 172.24 86.7848 172.384L86.9072 172.546L86.9369 172.585L86.9437 172.594Z"
            stroke="#FFEC5B"
            stroke-opacity="0.7"
            stroke-width={isDragging ? "0" : "20"} //disable glow while dragging
          />
        </g>
        {/* disable glow while dragging */}
        {!isDragging ? glowSVG : shadowSVG}
      </svg>
    </div>
  );
};

export default DumplingHeart;
