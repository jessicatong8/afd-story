import { Link, useLocation } from "react-router-dom";
import cover from "/cover.png";
import NavigationBar from "../components/NavigationBar";
import lunchBoxClosed from "../assets/game/startPage/lunchbox_closed.png";
import ReadersGuide from "../components/ReadersGuide";
import { useEffect } from "react";

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#readers-guide") {
      const element = document.getElementById("readers-guide");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (location.hash === "#about") {
      const element = document.getElementById("about");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (location.hash === "#play-game") {
      const element = document.getElementById("play-game");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div className="min-w-[350px] w-screen overflow-x-auto scroll-smooth">
      <NavigationBar />
      <div className="flex flex-col gap-6 m-6 md:mx-24 lg:mx-28 xl:mx-60">
        <div className="flex flex-col justify-center items-center gap-6 w-full h-full lg:flex-row mb-6">
          <Link
            to={`/read/0`}
            className="hover:scale-95 active:scale-95 transition-all"
          >
            <img
              src={cover}
              className="w-full h-auto object-cover shadow-lg cursor-pointer pointer-events-non"
            />
          </Link>
          <div className="flex flex-col justify-center items-center gap-6 lg:items-start">
            <Link
              to={`/read/0`}
              className="flex justify-center items-center rounded px-4 py-4 transition-all border-2 border-blue-secondary shadow-md bg-blue-primary font-bold text-xl
          hover:bg-blue-secondary hover:scale-95 active:scale-95 active:bg-blue-secondary"
            >
              Start Reading
            </Link>
            <p className="bg-blue-tertiary p-4 rounded">
              <div>
                When Mia goes to school speaking a different language from her
                family, she isn't so sure that her mom loves her. Make dumplings
                and with Mia and her mom as they learn to show their love in
                many different ways!
              </div>
              <div className="mt-4">
                We hope that this story will help you express your love across
                cultures and languages, so read together with your family and
                loved ones.
              </div>
              <div className="mt-4">
                You will encounter some interactive scenes, click or drag
                elements as directed to progress through the story.
              </div>
            </p>
          </div>
        </div>

        <div id="readers-guide">
          <ReadersGuide />
        </div>

        <div id="play-game">
          <h1 className="heading">Play the Game</h1>
          <p>
            {" "}
            Do you know all the different ways to express love? Let’s play a
            game to find out!
          </p>
          <Link
            to={`/game/start`}
            className="flex justify-center items-center active:scale-95 px-2 cursor-pointer hover:scale-95 transition-transform "
          >
            <img
              src={lunchBoxClosed}
              className="pointer-events-none h-60 w-auto"
            />
          </Link>
        </div>

        <div id="about">
          <h1 className="heading">About</h1>
          <p>
            This story is developed by the Cultural Influences on Mental Health
            Center (CIMH) at Claremont McKenna College.
          </p>
          <p className="mt-4">
            To learn more about our research on Acculturative Family Distancing
            contact Wei-Chin Hwang, Ph.D. at
            wei-chin.hwang@claremontmckenna.edu. For any feedback, suggestions,
            or issues with this website please contact Jessica Tong at
            jjtb2023@mymail.pomona.edu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
