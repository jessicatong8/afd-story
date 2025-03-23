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
    <section className="flex items-center justify-evenly">
      {/* <h1 className="text-3xl font-bold underline">Hello World</h1> */}
      <BackButton onClick={handleBackClick} />
      <div>
        <Page pageNumber={currentPage} />
      </div>
      <NextButton onClick={handleNextClick} />
    </section>
  );
}

export default App;
