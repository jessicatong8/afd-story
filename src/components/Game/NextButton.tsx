interface Props {
  state: "unanswered" | "correct" | "wrong";
  handleNext: () => void;
}

const NextButton = ({ handleNext, state }: Props) => {
  return (
    <button
      onClick={handleNext}
      className=" text-black bg-blue-300 px-4 py-2 rounded disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed"
      disabled={state === "unanswered"}
    >
      Next
    </button>
  );
};

export default NextButton;
