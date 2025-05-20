import { JSX } from "react";
import NextButton from "./NextButton";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  question: number;
  state: "unanswered" | "correct" | "wrong";
  handleNext: () => void;
}

const AnswerFeedback = ({ question, handleNext, state }: Props) => {
  const answerText: Record<number, JSX.Element> = {
    1: (
      <>
        Mom is showing love through{" "}
        <span className="text-LL-food font-bold">food</span> by remembering what
        Mia likes and cooking with lots of care.
      </>
    ),
    2: (
      <>
        By saying she loves Mia out loud, mom is using the love language of{" "}
        <span className="text-LL-words font-bold">words</span> to show Mia she
        cares.
      </>
    ),
    3: (
      <>
        Emma's mom always notices when she's feeling down, and she uses the love
        language of <span className="text-LL-touch font-bold">touch</span> to
        help her feel better.
      </>
    ),
    4: (
      <>
        Grandpa remembered Tommy's favorites and picked out a special{" "}
        <span className="text-LL-gifts font-bold">gift</span> just for him to
        show he cares.
      </>
    ),
    5: (
      <>
        Kevin's dad always makes time to play catch, and spending quality{" "}
        <span className="text-LL-time font-bold">time</span> together is his way
        of showing love.
      </>
    ),
    6: (
      <>
        Emma's dad is showing love through{" "}
        <span className="text-LL-service font-bold">service</span> by doing
        something helpful just for her.
      </>
    ),
    7: (
      <>
        Mia knows mom puts love into every bite, so by using her{" "}
        <span className="text-LL-words font-bold">words</span>, Mia shows she
        cares too.
      </>
    ),
    8: (
      <>
        By helping take care of mom and making mom a drink, Emma is showing her
        love through the love language of{" "}
        <span className="text-LL-service font-bold">service</span> and the love
        language of <span className="text-LL-food font-bold">food</span>.
      </>
    ),
    9: (
      <>
        Cooking together and eating yummy food on special days is a way of
        showing love through{" "}
        <span className="text-LL-food font-bold">food</span> and spending
        quality <span className="text-LL-time font-bold">time</span> together.
        And by helping mom make dinner, Mia is also using the love language of{" "}
        <span className="text-LL-service font-bold">service</span>.
      </>
    ),
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0  bg-black/20 flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="w-3/4 max-h-[95%] h-80 sm:w-1/2 bg-white rounded-lg shadow-lg p-12 flex flex-col justify-center items-center text-center"
        >
          <div
            className={`font-bold text-lg ${state === "correct" ? "text-green-correct" : "text-red-wrong"}`}
          >
            {state === "correct" ? "That's right!" : "Not quite..."}
          </div>
          <div className="mt-6 mb-12">{answerText[question]}</div>
          <NextButton handleNext={handleNext} state={state} />
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AnswerFeedback;
