import { useState } from "react";
import { useSwipeable } from "react-swipeable";

import Page from "../components/Page";
import BackButton from "../components/BackButton";
import NextButton from "../components/NextButton";

function ReadPage() {
  const numPages = 33;
  var nextIsActive = true;
  var backIsActive = true;

  const [currentPage, setCurrentPage] = useState<number>(1);
  console.log(currentPage);

  const handleNext = () => {
    if (currentPage < numPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleBack = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handleBack(),
  });

  return (
    <section {...swipeHandlers} className="flex items-center justify-evenly">
      {/* <h1 className="text-3xl font-bold underline">Hello World</h1> */}
      <BackButton isActive={backIsActive} onClick={handleBack} />
      <div>
        <Page pageNumber={currentPage} numPages={numPages} />
      </div>
      <NextButton isActive={nextIsActive} onClick={handleNext} />
    </section>
  );
}

export default ReadPage;
