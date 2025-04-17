import { useEffect, useState } from "react";

import Scenario from "../components/Game/Scenario";
import QuestionAnswer from "../components/Game/QuestionAnswer";
import AnswerChoices from "../components/Game/AnswerChoices";
import NextButton from "../components/Game/NextButton";
import GameEnd from "../components/Game/GameEnd";

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

  const [score, setScore] = useState<number>(() => {
    const stored = localStorage.getItem("gameScore");
    return stored ? parseInt(stored, 10) : 0;
  });

  const [gameEnd, setGameEnd] = useState(false);

  useEffect(() => {
    responseState === "correct" && setScore(score + 1);
    console.log("score: " + score);
  }, [responseState]);

  // // On mount, randomize question order
  useEffect(() => {
    const storedOrder = localStorage.getItem("questionOrder");
    if (storedOrder) {
      setQuestionOrder(JSON.parse(storedOrder));
    } else {
      const shuffled = questionOrder.sort(() => Math.random() - 0.5);
      setQuestionOrder(shuffled);
      localStorage.setItem("questionOrder", JSON.stringify(shuffled));
    }
  }, []);

  // Persist current question index and score to localStorage
  useEffect(() => {
    localStorage.setItem("currentQuestion", currentQuestion.toString());
    localStorage.setItem("gameScore", score.toString());
  }, [currentQuestion, score]);

  const handleGameEnd = () => {
    setGameEnd(true);
    localStorage.removeItem("questionOrder");
    localStorage.removeItem("currentQuestion");
    localStorage.removeItem("gameScore");
  };

  const questionNumber = questionOrder[currentQuestion];

  console.log(questionOrder);
  console.log("currentQuestion: " + currentQuestion);
  console.log("questionNumber: " + questionNumber);

  const handleNext = () => {
    if (currentQuestion < 8) {
      setCurrentQuestion(currentQuestion + 1);
      setResponseState("unanswered");
    } else if (currentQuestion == 8) {
      handleGameEnd();
    }
  };

  if (questionNumber === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {gameEnd ? (
        <GameEnd score={score} />
      ) : (
        <div className="flex flex-col justify-center items-center gap-6 p-6 text-sm xs:text-base">
          <Scenario question={questionNumber} />
          <QuestionAnswer question={questionNumber} state={responseState} />
          <AnswerChoices
            question={questionNumber}
            state={responseState}
            setState={setResponseState}
          />
          <NextButton handleNext={handleNext} state={responseState} />
        </div>
      )}
    </div>
  );
};

export default GamePage;
