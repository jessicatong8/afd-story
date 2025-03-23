import { FaArrowRight } from "react-icons/fa6";

interface Props {
  onClick: () => void;
  isActive: boolean;
}

const NextButton = ({ onClick, isActive }: Props) => {
  return (
    <button
      className={`hidden lg:flex w-12 h-12 items-center justify-center rounded-full text-white hide-portrait  
        ${isActive ? "bg-sky-400  hover:bg-sky-500 transition" : "bg-gray-400"}`}
      onClick={onClick}
    >
      <FaArrowRight className="text-lg" />
    </button>
  );
};

export default NextButton;
