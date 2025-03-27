import { FaChevronLeft } from "react-icons/fa6";
import { useReadContext } from "./ReadContext";

const BackButton = () => {
  const { handleBack, backIsActive } = useReadContext();

  return (
    <button onClick={handleBack}>
      <FaChevronLeft
        className={`hidden lg:flex w-12 h-12 items-center justify-center rounded-full hide-portrait  
        ${backIsActive ? "text-sky-300  hover:text-sky-500 transition cursor-pointer" : "text-gray-400"}`}
      />
    </button>
  );
};

export default BackButton;
