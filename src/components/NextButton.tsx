interface Props {
  onClick: () => void;
}

const NextButton = ({ onClick }: Props) => {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      Next
    </button>
  );
};

export default NextButton;
