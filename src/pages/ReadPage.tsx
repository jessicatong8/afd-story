import { ReadContextProvider } from "../components/ReadContext";

import Page from "../components/Page";
import BackButton from "../components/BackButton";
import NextButton from "../components/NextButton";

function ReadPage() {
  return (
    <ReadContextProvider>
      <section className="flex items-center justify-evenly">
        <BackButton />
        <div>
          <Page />
        </div>
        <NextButton />
      </section>
    </ReadContextProvider>
  );
}

export default ReadPage;
