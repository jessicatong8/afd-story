import { useEffect, useState } from "react";

interface Props {
  question: number;
  state: "unanswered" | "correct" | "wrong";
}

const QuestionAnswer = ({ question, state }: Props) => {
  console.log(question);

  const [text, setText] = useState<string>("");

  const questionText: Record<number, string> = {
    1: "q1",
    2: "q2",
    3: "q3",
    4: "q4",
    5: "q5",
    6: "q6",
    7: "q7",
    8: "q8",
    9: "q9",
  };

  const answerText: Record<number, string> = {
    1: "a1",
    2: "a2",
    3: "a3",
    4: "a4",
    5: "a5",
    6: "a6",
    7: "a7",
    8: "a8",
    9: "a9",
  };

  useEffect(() => {
    if (state === "unanswered") {
      setText(questionText[question]);
    } else if (state === "correct") {
      setText("That's right! " + answerText[question]);
    } else {
      setText("Not quite! " + answerText[question]);
    }
  }, [state]);

  return <div> {text}</div>;
};

export default QuestionAnswer;
