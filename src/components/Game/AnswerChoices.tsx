import { useState } from "react";

interface Props {
  question: number;
  state: "unanswered" | "correct" | "wrong";
  setState: React.Dispatch<
    React.SetStateAction<"unanswered" | "correct" | "wrong">
  >;
}

const AnswerChoices = ({ question, state, setState }: Props) => {
  const buttonContent: Record<string, string> = {
    food: "food",
    words: "words",
    touch: "touch",
    gifts: "gifts",
    service: "service",
    time: "time",
  };

  const correctAnswers: Record<number, string> = {
    1: "food",
    2: "words",
    3: "touch",
    4: "gifts",
    5: "time",
    6: "service",
    7: "words",
    8: "service",
    9: "food",
  };

  const correctResponse = correctAnswers[question];
  console.log("correctResponse: " + correctResponse);
  //   console.log(state);
  const [clickedAnswer, setClickedAnswer] = useState<string | null>(null);

  const handleClick = (answerChoice: string) => {
    // console.log("correctResponse: " + correctResponse);
    console.log("answerChoice: " + answerChoice);
    setClickedAnswer(answerChoice);
    answerChoice === correctResponse ? setState("correct") : setState("wrong");
  };

  return (
    <div className="flex flex-wrap justify-center items-center gap-4 w-full h-full">
      {Object.entries(buttonContent).map(([key, label]) => {
        let bgColor = "bg-white";

        if (state === "correct" && key === correctResponse) {
          bgColor = "bg-green-correct";
        }

        if (state === "wrong") {
          if (key === clickedAnswer) {
            bgColor = "bg-red-wrong";
          } else if (key === correctResponse) {
            bgColor = "bg-green-correct";
          }
        }

        return (
          <button
            key={key + "_button"}
            onClick={() => handleClick(key)}
            className={`flex flex-row items-center 
              font-bold w-90 h-18 max-w-full px-6 gap-3 sm:px-8 sm:gap-4
              ${bgColor} text-black border-2 border-gray-200 rounded-lg transition-color cursor-pointer`}
            disabled={state !== "unanswered"} // disable buttons after an answer is selected
          >
            <img
              src={`/loveLanguageIcons/${key}.png`}
              alt={label}
              className="w-10 sm:w-12"
            />
            {`The love language of ${label}`}
          </button>
        );
      })}
    </div>
  );
};

export default AnswerChoices;
