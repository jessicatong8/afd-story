import { FaChevronRight } from "react-icons/fa6";
import { useReadContext } from "./ReadContext";

const NextButton = () => {
  const { handleNext, nextIsActive } = useReadContext();

  return (
    <button onClick={handleNext}>
      {/* <FaChevronRight
        className={`flex w-12 h-12 items-center justify-center rounded-full
        ${nextIsActive ? "text-sky-300  hover:text-sky-500 active:text-sky-500 transition cursor-pointer" : "text-gray-200 cursor-not-allowed"}`}
        style={{ strokeWidth: 13 }}
      /> */}
      <span
        className={`flex w-12 h-12 items-center justify-center rounded-full transition
        ${nextIsActive ? "text-sky-300  hover:text-sky-500 active:text-sky-500 cursor-pointer" : "text-gray-200 cursor-not-allowed"}
      `}
        style={{ strokeWidth: 13 }}
      >
        {FaChevronRight({ size: 58 })}
      </span>
    </button>
  );
};

export default NextButton;
