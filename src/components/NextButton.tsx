import { FaArrowRight } from "react-icons/fa6";

interface Props {
  onClick: () => void;
}

const NextButton = ({ onClick }: Props) => {
  return (
    <button
      className="hidden lg:flex w-12 h-12 items-center justify-center rounded-full  bg-sky-400 text-white hover:bg-sky-500 transition hide-portrait"
      onClick={onClick}
    >
      <FaArrowRight className="text-lg" />
    </button>
  );
};

export default NextButton;
