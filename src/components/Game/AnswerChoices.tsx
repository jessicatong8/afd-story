import { useState } from "react";

const modules = import.meta.glob("../../assets/loveLanguageIcons/*.png", {
  eager: true,
});

const icons: Record<string, string> = Object.fromEntries(
  Object.entries(modules).map(([path, mod]) => {
    const fileName = path.split("/").pop()!; // non-null assertion since .pop() could be undefined
    const url = (mod as { default: string }).default; // assert type
    return [fileName, url];
  })
);

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

  const correctAnswers: Record<number, string[]> = {
    1: ["food"],
    2: ["words"],
    3: ["touch"],
    4: ["gifts"],
    5: ["time"],
    6: ["service"],
    7: ["words"],
    8: ["service", "food"],
    9: ["food", "service", "time"],
  };

  const correctResponse = correctAnswers[question];
  // console.log("correctResponse: " + correctResponse);
  //   console.log(state);
  const [clickedAnswer, setClickedAnswer] = useState<string | null>(null);

  const handleClick = (answerChoice: string) => {
    // console.log("correctResponse: " + correctResponse);
    // console.log("answerChoice: " + answerChoice);
    setClickedAnswer(answerChoice);
    correctResponse.includes(answerChoice)
      ? setState("correct")
      : setState("wrong");
  };

  return (
    <div className="flex flex-wrap justify-center items-center gap-4 w-full h-full max-w-6xl">
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full justify-items-center  max-w-6xl"> */}
      {Object.entries(buttonContent).map(([key, label]) => {
        let bgColor = "bg-white";

        if (state === "correct" && correctResponse.includes(key)) {
          bgColor = "bg-green-correct";
        }

        if (state === "wrong") {
          if (key === clickedAnswer) {
            bgColor = "bg-red-wrong";
          } else if (correctResponse.includes(key)) {
            bgColor = "bg-green-correct";
          }
        }

        return (
          <button
            key={key + "_button"}
            onClick={() => handleClick(key)}
            className={`flex flex-row items-center 
              font-bold w-90 max-w-full px-4 py-2 gap-2 text-sm xs:gap-3 xs:text-base sm:px-8 sm:gap-4
              ${bgColor} text-black border-2 border-gray-200 rounded-lg transition-color cursor-pointer`}
            disabled={state !== "unanswered"} // disable buttons after an answer is selected
          >
            <img
              src={icons[`${key}.png`]}
              alt={label}
              className="w-8 xs:w-10 sm:w-12"
            />
            {`The love language of ${label}`}
          </button>
        );
      })}
    </div>
  );
};

export default AnswerChoices;
