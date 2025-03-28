import { ReadContextProvider } from "../components/ReadContext";

import Page from "../components/Page";
import BackButton from "../components/BackButton";
import NextButton from "../components/NextButton";
import NavigationBar from "../components/NavigationBar";
import ProgressBar from "../components/ProgressBar";

function ReadPage() {
  return (
    <div>
      {/* <NavigationBar /> */}
      <ReadContextProvider>
        <section className="flex items-center justify-evenly">
          <BackButton />
          <div>
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
