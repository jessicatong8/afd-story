import BackButton from "./BackButton";
import NextButton from "./NextButton";
import { useReadContext } from "./ReadContext";

const ProgressBar = () => {
  const { currentPage, numPages } = useReadContext();
  const progressPercent = Math.round((currentPage / numPages) * 100);

  return (
    <>
      <div className="bg-gray-100 h-2">
        <div
          className="bg-blue-primary h-full transition-all"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>

      <div className="flex flex-col justify-center w-full h-12 progress-height-portrait bg-white">
        <div className="flex flex-row justify-center items-center">
          <div className="hidden show-portrait scale-75">
            <BackButton />
          </div>
          <p className="w-36 text-center">
            Page {currentPage} of {numPages}
          </p>
          <div className="hidden show-portrait scale-75">
            <NextButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
