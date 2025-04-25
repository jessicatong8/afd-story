interface Props {
  state: "unanswered" | "correct" | "wrong";
  handleNext: () => void;
}

const NextButton = ({ handleNext, state }: Props) => {
  return (
    <button
      onClick={handleNext}
      className="!px-6 button"
      disabled={state === "unanswered"}
    >
      Next
    </button>
  );
};

export default NextButton;
