import { Link, useLocation } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import lunchBoxClosed from "../assets/game/startPage/lunchbox_closed.png";
import ReadersGuide from "../components/Home/ReadersGuide";
import { useEffect } from "react";
import AutoHideNavScroll from "../components/Home/AutoHideNavScroll";
import ContactForm from "../components/Home/ContactForm";

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
      {/* <AutoHideNavScroll /> */}
      <NavigationBar />
      <div className="flex flex-col gap-6 m-6 md:mx-24 lg:mx-12 xl:mx-40">
        <div className="flex flex-col justify-center items-center gap-6 w-full h-full lg:flex-row mb-6">
          <Link
            to={`/read/0`}
            className="hover:scale-97 active:scale-97 transition-all"
          >
            <img
              src={"/cover.jpg"}
              className="w-full h-auto rounded object-cover shadow-lg cursor-pointer pointer-events-non"
            />
          </Link>
          <div className="flex flex-col justify-center items-center gap-6 lg:items-start">
            <Link
              to={`/read/0`}
              className="flex justify-center items-center button text-xl"
            >
              Start Reading
            </Link>
            <div className="bg-blue-tertiary p-4 rounded-lg">
              <div>
                Join Mia on a heartwarming journey to discover how love can be
                expressed in many different ways across cultures.
              </div>
              <div className="mt-4">
                When Mia notices that her mom doesn’t say “I love you” like her
                friend’s mom does, she begins to wonder if her mom loves her at
                all. Help Mia make dumplings, engage in meaningful
                conversations, and uncover a special heart-shaped surprise, as
                she discovers that love isn’t always spoken.
              </div>
              <div className="mt-4">
                Perfect for children and parents to read together, this story
                celebrates the many forms love can take—across generations,
                languages, and traditions.
              </div>
            </div>
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
          s
          <Link
            to={`/game/start`}
            className="flex justify-center items-center active:scale-95 px-2 pt-6 cursor-pointer hover:scale-95 transition-transform "
          >
            <img
              src={lunchBoxClosed}
              className="pointer-events-none h-60 w-auto"
            />
          </Link>
        </div>

        <div className="flex flex-row flex-wrap gap-6">
          <div id="about" className="basis-1/2 grow">
            <h1 className="heading">About</h1>
            <p>
              This story is developed by the Cultural Influences on Mental
              Health Center (CIMH) at Claremont McKenna College. You are seeing
              a beta version of this website, so please reach out to us with any
              feedback or suggestions as we continue to improve this interactive
              story!
            </p>
          </div>
          <ContactForm />
        </div>
      </div>

      <footer className="p-12 bg-blue-dark text-white mt-12 text-sm flex flex-row justify-center items-center gap-6">
        <img src="/cmc_logo.png" className="w-50 h-auto" />
        <div>
          <div className="text-base mb-1.5">
            Cultural Influences on Mental Health Center
          </div>
          Claremont McKenna College 850 Columbia Avenue <br></br>
          Claremont, CA 91711 <br></br>
        </div>

        {/* <div>
          <div className="text-base mb-1.5">Wei-Chin Hwang, Ph.D.</div>
          Dept Chair and Professor of Psychological Science <br></br>
          Licensed Practicing Clinical Psychologist <br></br>
          Email: whwang@cmc.edu <br></br>
          <a href="https://www.cmc.edu/academic/faculty/profile/wei-chin-hwang">
            Faculty Website |
          </a>{" "}
          <a href="http://www.losangelesclinicalpsychologist.com">
            Practice Website |
          </a>{" "}
          <a href="http://www.abct.org/Therapists/Wei_Chin_Hwang.cfm">
            ABCT Featured therapist
          </a>
        </div>
        <div>
          <div className="text-base mb-1.5">Jessica Tong</div>
          Software Developer <br></br>
          Student at Pomona College <br></br>
          Psychological Science and Computer Science <br></br>
          Email: jjtb2023@mymail.pomona.edu <br></br>
        </div> */}
      </footer>
    </div>
  );
};

export default HomePage;
