interface Props {
  question: number;
}

const Question = ({ question }: Props) => {
  // console.log(question);

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

  return (
    <div className="bg-blue-tertiary px-6 py-6 rounded flex justify-center items-center text-center">
      {questionText[question]}
    </div>
  );
};

export default Question;
