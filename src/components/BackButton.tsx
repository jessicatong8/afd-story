import { FaChevronLeft } from "react-icons/fa6";
import { useReadContext } from "./ReadContext";

const BackButton = () => {
  const { handleBack, backIsActive, currentPage } = useReadContext();

  return (
    <button onClick={handleBack}>
      <FaChevronLeft
        className={`flex w-12 h-12 items-center justify-center rounded-full hide-portrait transition
        ${currentPage === 0 && "opacity-0 "}
        ${backIsActive ? "text-sky-300  hover:text-sky-500 active:text-sky-500 cursor-pointer" : "text-gray-300 cursor-not-allowed"}
      `}
      />
    </button>
  );
};

export default BackButton;
