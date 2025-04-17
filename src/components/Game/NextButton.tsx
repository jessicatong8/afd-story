interface Props {
  state: "unanswered" | "correct" | "wrong";
  handleNext: () => void;
}

const NextButton = ({ handleNext, state }: Props) => {
  return (
    <button
      onClick={handleNext}
      className=" text-black bg-blue-primary active:bg-blue-secondary px-4 py-2 rounded shadow-md hover:scale-95 cursor-pointer font-semibold  disabled:shadow-none disabled:scale-100 disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed disabled:font-normal"
      disabled={state === "unanswered"}
    >
      Next
    </button>
  );
};

export default NextButton;
