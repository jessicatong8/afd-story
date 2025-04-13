import React, { useEffect, useState } from "react";
import Scenario from "../components/Game/Scenario";
import QuestionAnswer from "../components/Game/QuestionAnswer";
import AnswerChoices from "../components/Game/AnswerChoices";
import NextButton from "../components/Game/NextButton";

const GamePage = () => {
  const [questionOrder, setQuestionOrder] = useState(
    Array.from({ length: 9 }, (_, i) => i + 1) //fix later to start as null to check for loading
  );
  const [currentQuestion, setCurrentQuestion] = useState<number>(() => {
    const stored = localStorage.getItem("currentQuestion");
    return stored ? parseInt(stored, 10) : 0;
  });
  const [responseState, setResponseState] = useState<
    "unanswered" | "correct" | "wrong"
  >("unanswered");

  // On mount, randomize question order
  //   useEffect(() => {
  //     const storedOrder = localStorage.getItem("questionOrder");
  //     if (storedOrder) {
  //       setQuestionOrder(JSON.parse(storedOrder));
  //     } else {
  //       const shuffled = questionOrder.sort(() => Math.random() - 0.5);
  //       setQuestionOrder(shuffled);
  //       localStorage.setItem("questionOrder", JSON.stringify(shuffled));
  //     }
  //   }, []);

  // Persist current question index to localStorage
  //   useEffect(() => {
  //     localStorage.setItem("currentQuestion", currentQuestion.toString());
  //   }, [currentQuestion]);

  const questionNumber = questionOrder[currentQuestion];

  console.log(questionOrder);
  console.log("currentQuestion: " + currentQuestion);
  console.log("questionNumber: " + questionNumber);

  const handleNext = () => {
    if (currentQuestion < 8) {
      setCurrentQuestion(currentQuestion + 1);
      setResponseState("unanswered");
    }
  };

  if (questionNumber === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center border-2 gap-6">
      <Scenario />
      <QuestionAnswer question={questionNumber} state={responseState} />
      <AnswerChoices
        question={questionNumber}
        state={responseState}
        setState={setResponseState}
      />
      <NextButton handleNext={handleNext} state={responseState} />
    </div>
  );
};

export default GamePage;
