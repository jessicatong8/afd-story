import { FaChevronRight } from "react-icons/fa6";
import { useReadContext } from "./ReadContext";

const NextButton = () => {
  const { handleNext, nextIsActive } = useReadContext();

  return (
    <button onClick={handleNext}>
      <FaChevronRight
        className={`hidden lg:flex w-12 h-12 items-center justify-center rounded-full hide-portrait  
        ${nextIsActive ? "text-sky-300  hover:text-sky-500 transition cursor-pointer" : "text-gray-300"}`}
      />
    </button>
  );
};

export default NextButton;
