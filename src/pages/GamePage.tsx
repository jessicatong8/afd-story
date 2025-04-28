import { useEffect, useState } from "react";

import Scenario from "../components/Game/Scenario";
import QuestionAnswer from "../components/Game/QuestionAnswer";
import AnswerChoices from "../components/Game/AnswerChoices";
import NextButton from "../components/Game/NextButton";
import GameEnd from "../components/Game/GameEnd";
import NavigationBar from "../components/NavigationBar";

const GamePage = () => {
  // get questionOrder from local storage if user has already started a game
  const [questionOrder, setQuestionOrder] = useState<number[] | undefined>(
    () => {
      const storedOrder = localStorage.getItem("questionOrder");
      return storedOrder ? JSON.parse(storedOrder) : undefined;
    }
  );
  // get current question from local storage if user has already started a game
  const [currentQuestion, setCurrentQuestion] = useState<number>(() => {
    const stored = localStorage.getItem("currentQuestion");
    return stored ? parseInt(stored, 10) : 0;
  });

  // game scoring
  const [responseState, setResponseState] = useState<
    "unanswered" | "correct" | "wrong"
  >("unanswered");

  const [score, setScore] = useState<number>(() => {
    const stored = localStorage.getItem("gameScore");
    return stored ? parseInt(stored, 10) : 0;
  });

  const [gameEnd, setGameEnd] = useState(false);

  // add a point to score whenever user answers correctly
  useEffect(() => {
    responseState === "correct" && setScore(score + 1);
    console.log("score: " + score);
  }, [responseState]);

  // create a new shuffled question order on a new game
  useEffect(() => {
    if (!questionOrder) {
      const shuffled = Array.from({ length: 9 }, (_, i) => i + 1).sort(
        () => Math.random() - 0.5
      );
      setQuestionOrder(shuffled);
      localStorage.setItem("questionOrder", JSON.stringify(shuffled));
    }
  }, [questionOrder]);

  // Persist current question index and score to localStorage
  useEffect(() => {
    localStorage.setItem("currentQuestion", currentQuestion.toString());
    localStorage.setItem("gameScore", score.toString());
  }, [currentQuestion, score]);

  // reset game when game ends
  const handleGameEnd = () => {
    setGameEnd(true);
    localStorage.removeItem("questionOrder");
    localStorage.removeItem("currentQuestion");
    localStorage.removeItem("gameScore");
  };

  // handle moving to the next question
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentQuestion]);

  const handleNext = () => {
    if (currentQuestion < 8) {
      setCurrentQuestion(currentQuestion + 1);
      setResponseState("unanswered");
    } else if (currentQuestion == 8) {
      handleGameEnd();
    }
  };

  // waits until question order is set before displaying
  if (!questionOrder) {
    return <div>Loading...</div>;
  }

  const questionNumber = questionOrder[currentQuestion];
  console.log(questionOrder);
  console.log("currentQuestion: " + currentQuestion);
  console.log("questionNumber: " + questionNumber);

  return (
    <div className="min-w-[350px] w-screen overflow-x-auto scroll-smooth">
      <NavigationBar />
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
