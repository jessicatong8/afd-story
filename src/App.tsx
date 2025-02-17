import { useState } from "react";
import Page from "./components/Page";
import BackButton from "./components/BackButton";
import NextButton from "./components/NextButton";

function App() {
  const numPages = 11;
  const storyPages = [...Array(numPages)].map((_, i) => `page${i + 1}`);

  const [currentPage, setCurrentPage] = useState(0);

  const handleNextClick = () => {
    if (currentPage < storyPages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleBackClick = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <Page page={currentPage} />
      <BackButton onClick={handleBackClick} />
      <NextButton onClick={handleNextClick} />
    </div>
  );
}

export default App;
