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
    gift: "gift",
    service: "service",
    time: "time",
  };

  const correctAnswers: Record<number, string> = {
    1: "food",
    2: "words",
    3: "touch",
    4: "gift",
    5: "service",
    6: "time",
    7: "food",
    8: "words",
    9: "touch",
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
    <div className="grid grid-cols-1 gap-4">
      {Object.entries(buttonContent).map(([key, label]) => {
        let bgColor = "bg-white";

        if (state === "correct" && key === correctResponse) {
          bgColor = "bg-green-300";
        }

        if (state === "wrong") {
          if (key === clickedAnswer) {
            bgColor = "bg-red-300";
          } else if (key === correctResponse) {
            bgColor = "bg-green-300";
          }
        }

        return (
          <button
            key={key}
            onClick={() => handleClick(key)}
            className={`${bgColor} text-black border-2 border-gray-200 px-4 py-2 rounded transition-color`}
            disabled={state !== "unanswered"} // disable buttons after an answer is selected
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default AnswerChoices;
