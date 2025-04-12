import { ReadContextProvider } from "../components/ReadContext";

import Page from "../components/Page";
import BackButton from "../components/BackButton";
import NextButton from "../components/NextButton";
import NavigationBar from "../components/NavigationBar";
import ProgressBar from "../components/ProgressBar";
import { useEffect } from "react";

function ReadPage() {
  useEffect(() => {
    // Disable scrolling when component mounts
    document.body.classList.add("overflow-hidden");

    return () => {
      // Re-enable scrolling when component unmounts
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  return (
    <div>
      {/* <NavigationBar /> */}
      <ReadContextProvider>
        <section className="flex items-center justify-evenly">
          <BackButton />
          <div className="select-none">
            <Page />
          </div>
          <NextButton />
        </section>
        {/* <ProgressBar /> */}
      </ReadContextProvider>
    </div>
  );
}

export default ReadPage;
