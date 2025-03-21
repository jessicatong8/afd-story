import { useState } from "react";
import Page from "./components/Page";
import BackButton from "./components/BackButton";
import NextButton from "./components/NextButton";

function App() {
  const numPages = 33;

  const [currentPage, setCurrentPage] = useState<number>(1);
  console.log(currentPage);

  const handleNextClick = () => {
    if (currentPage < numPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleBackClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <Page pageNumber={currentPage} />
      <BackButton onClick={handleBackClick} />
      <NextButton onClick={handleNextClick} />
    </div>
  );
}

export default App;
