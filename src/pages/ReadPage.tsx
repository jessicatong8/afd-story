import { ReadContextProvider } from "../components/ReadContext";

import Page from "../components/Page";
import BackButton from "../components/BackButton";
import NextButton from "../components/NextButton";
import ProgressBar from "../components/ProgressBar";
import { useEffect } from "react";

import AutoHideNavController from "../components/AutoHideNavClick";

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
    <div className="w-screen h-screen relative">
      <ReadContextProvider>
        <AutoHideNavController />
        <section className="flex items-center justify-evenly">
          <BackButton />
          <div className="select-none z-0">
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
