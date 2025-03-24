import { FaArrowLeft } from "react-icons/fa6";
import { useReadContext } from "./ReadContext";

const BackButton = () => {
  const { handleBack, backIsActive } = useReadContext();

  return (
    <button
      className={`hidden lg:flex w-12 h-12 items-center justify-center rounded-full text-white hide-portrait  
      ${backIsActive ? "bg-sky-400  hover:bg-sky-500 transition" : "bg-gray-400"}`}
      onClick={handleBack}
    >
      <FaArrowLeft className="text-lg" />
    </button>
  );
};

export default BackButton;
