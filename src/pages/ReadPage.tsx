import { useState } from "react";
import { useSwipeable } from "react-swipeable";

import Page from "../components/Page";
import BackButton from "../components/BackButton";
import NextButton from "../components/NextButton";

function ReadPage() {
  const numPages = 33;

  const [currentPage, setCurrentPage] = useState<number>(1);
  console.log(currentPage);

  const [nextIsActive, setNextActive] = useState<boolean>(true);
  const [backIsActive, setBackActive] = useState<boolean>(true);

  const handleNext = () => {
    if (nextIsActive && currentPage < numPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleBack = () => {
    if (backIsActive && currentPage > 1) {
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
