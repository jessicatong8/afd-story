import { FaArrowLeft } from "react-icons/fa6";

interface Props {
  onClick: () => void;
}

const BackButton = ({ onClick }: Props) => {
  return (
    <button
      className="hidden lg:flex w-12 h-12 items-center justify-center rounded-full  bg-sky-400 text-white hover:bg-sky-500 transition hide-portrait"
      onClick={onClick}
    >
      <FaArrowLeft className="text-lg" />
    </button>
  );
};

export default BackButton;
