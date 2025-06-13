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
      <div>
        Mom is showing love through{" "}
        <span className="text-LL-food font-bold">food</span> by remembering what
        Mia likes and cooking with lots of care.
      </div>
    ),
    2: (
      <div>
        By saying she loves Mia out loud, mom is using the love language of{" "}
        <span className="text-LL-words font-bold">words</span> to show Mia she
        cares.
      </div>
    ),
    3: (
      <div>
        Emma's mom always notices when she's feeling down, and she uses the love
        language of <span className="text-LL-touch font-bold">touch</span> to
        help her feel better.
      </div>
    ),
    4: (
      <div>
        Grandpa remembered Tommy's favorites and picked out a special{" "}
        <span className="text-LL-gifts font-bold">gift</span> just for him to
        show he cares.
      </div>
    ),
    5: (
      <div>
        Kevin's dad always makes time to play catch, and spending quality{" "}
        <span className="text-LL-time font-bold">time</span> together is his way
        of showing love.
      </div>
    ),
    6: (
      <div>
        Emma's dad is showing love through{" "}
        <span className="text-LL-service font-bold">service</span> by doing
        something helpful just for her.
      </div>
    ),
    7: (
      <div>
        Mia knows mom puts love into every bite, so by using her{" "}
        <span className="text-LL-words font-bold">words</span>, Mia shows she
        cares too.
      </div>
    ),
    8: (
      <div>
        By helping take care of mom and making mom a drink, Emma is showing her
        love through the love language of{" "}
        <span className="text-LL-service font-bold">service</span> and the love
        language of <span className="text-LL-food font-bold">food</span>.
      </div>
    ),
    9: (
      <div>
        Cooking together and eating yummy food on special days is a way of
        showing love through{" "}
        <span className="text-LL-food font-bold">food</span> and spending
        quality <span className="text-LL-time font-bold">time</span> together.
        And by helping mom make dinner, Mia is also using the love language of{" "}
        <span className="text-LL-service font-bold">service</span>.
      </div>
    ),
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0  bg-black/20 flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="w-3/4 max-h-[95%] h-100 sm:w-1/2 bg-white rounded-lg shadow-lg p-8 sm:p-12 flex flex-col justify-center items-center text-center"
        >
          <div
            className={`basis-1/4 flex items-center justify-center font-bold text-lg ${state === "correct" ? "text-green-correct" : "text-red-wrong"}`}
          >
            {state === "correct" ? "That's right!" : "Not quite..."}
          </div>
          <div className="grow flex items-center justify-center ">
            {answerText[question]}
          </div>
          <div className="basis-1/4 mt-4 flex items-center justify-center ">
            <NextButton handleNext={handleNext} state={state} />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AnswerFeedback;
