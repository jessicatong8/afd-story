import { FaArrowRight } from "react-icons/fa6";
import { useReadContext } from "./ReadContext";

const NextButton = () => {
  const { handleNext, nextIsActive } = useReadContext();
  return (
    <button
      className={`hidden lg:flex w-12 h-12 items-center justify-center rounded-full text-white hide-portrait  
        ${nextIsActive ? "bg-sky-400  hover:bg-sky-500 transition" : "bg-gray-400"}`}
      onClick={handleNext}
    >
      <FaArrowRight className="text-lg" />
    </button>
  );
};

export default NextButton;
