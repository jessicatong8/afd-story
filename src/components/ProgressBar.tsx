import BackButton from "./BackButton";
import NextButton from "./NextButton";

const ProgressBar = () => {
  return (
    <div className="flex flex-col w-full h-28 progress-height-portrait md:h-12 bg-white">
      <div className="bg-gray-100 h-2"></div>
      ProgressBar
      {/* <BackButton />
      <NextButton /> */}
    </div>
  );
};

export default ProgressBar;
