import { useEffect, useState } from "react";

interface Props {
  question: number;
  state: "unanswered" | "correct" | "wrong";
}

const QuestionAnswer = ({ question, state }: Props) => {
  // console.log(question);

  const [text, setText] = useState<string>("");

  const questionText: Record<number, string> = {
    1: "Mom takes extra time to make Mia’s favorite foods, like dumplings. Which love language is Mia's mom using?",
    2: "Every night before bed, Mom tells Mia “I love you”. Which love language is Mia's mom using?",
    3: "Emma’s mom gives her a big, warm hug when she's feeling sad. Which love language is Emma's mom using?",
    4: "For his birthday, Tommy’s grandpa gave him a Lego set of his favorite Star Wars character. Which love language is Tommy's grandpa using?",
    5: "Even when Kevin’s dad is tired after work, he still takes the time to play catch Kevin. Which love language is Kevin's dad using?",
    6: "When Emma gets stuck on her math homework, dad is always there to help. Which love language is Emma's dad using?",
    7: "Mia knows mom spends a lot of time making her favorite foods, so she always says thank you at dinner. Which love language is Mia using?",
    8: "Mom isn’t feeling well, so Emma brings her a warm cup of tea. Which love lanugage is Emma using?",
    9: "Mia helps her mom make dumplings for New Year's Eve dinner. Which love language is Mia using?",
  };

  const answerText: Record<number, string> = {
    1: "Mom is showing love through food by remembering what Mia likes and cooking with lots of care.",
    2: "By saying she loves Mia out loud, mom is using the love language of words to show Mia she cares.",
    3: "Emma's mom always notices when she's feeling down, and she uses the love language of touch to help her feel better.",
    4: "Grandpa remembered Tommy's favorites and picked out a special gift just for him to show he cares.",
    5: "Kevin's dad always makes time to play catch, and spending quality time together is his way of showing love.",
    6: "Emma's dad is showing love through service by doing something helpful just for her.",
    7: "Mia knows mom puts love into every bite, so by using her words, Mia shows she cares too.",
    8: "By helping take care of mom, Emma is showing her love through the love laguage of service.",
    9: "Cooking and eating yummy food on special days is a way of celebrating and showing love.",
  };

  useEffect(() => {
    if (state === "unanswered") {
      setText(questionText[question]);
    } else if (state === "correct") {
      setText("That's right! " + answerText[question]);
    } else {
      setText("Not quite! " + answerText[question]);
    }
  }, [state, question]);

  return (
    <div className="bg-blue-tertiary px-6 py-6 rounded flex justify-center items-center">
      <p className="text-center">{text}</p>
    </div>
  );
};

export default QuestionAnswer;
