const images = import.meta.glob("/src/assets/game/*.png", { eager: true });

const imageArray = Object.values(images).map((mod: any) => mod.default);
console.log(imageArray);

interface Props {
  question: number;
}

const Scenario = ({ question }: Props) => {
  console.log(question - 1);
  return (
    <div className="w-1/3 h-1/3">
      <img src={imageArray[question - 1]} />
    </div>
  );
};

export default Scenario;
