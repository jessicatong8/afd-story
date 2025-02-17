interface Props {
  onClick: () => void;
}

const BackButton = ({ onClick }: Props) => {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      Back
    </button>
  );
};

export default BackButton;
