interface Props {
  state: "unanswered" | "correct" | "wrong";
  handleNext: () => void;
}

const NextButton = ({ handleNext, state }: Props) => {
  return (
    <button
      onClick={handleNext}
      className="border-2"
      disabled={state === "unanswered"}
    >
      NextButton
    </button>
  );
};

export default NextButton;
