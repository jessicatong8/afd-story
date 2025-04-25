import LoveLanguageDefinitions from "../LoveLanguageDefinitions";
import ToolTip from "./ToolTip";

const ReadersGuide = () => {
  return (
    <>
      <h1 className="heading">Reader's Guide</h1>
      <div>
        <p>
          By understanding different love languages, we are better prepared to
          meet each other’s needs and to express and receive love in the ways
          that matter to us most. There is not one right way of expressing love.
          The most important is to understand each other’s love languages adapt
          to each other’s differences and needs.
        </p>{" "}
        <div className="px-8 pt-12 pb-8">
          <LoveLanguageDefinitions />
        </div>
        <p className="mt-4">
          Our cultural backgrounds (for example: what we believe, what
          traditions we have, and what language we speak) are connected to the
          way we express love. Americans tend to prefer more verbal and direct
          expressions, like saying “I love you” out loud. Whereas, Chinese and
          many other Asian groups tend to prefer other expressions of love, like
          making delicious food and doing acts of service and kindness.
        </p>{" "}
        <div className="mt-4">
          Immigrant parents who grow up in Asia and their children who grow up
          in the United States have what’s called an{" "}
          <ToolTip content="Acculturation gap: The cultural differences between immigrant parents and their American raised children that are a result of growing up in different cultural environments.">
            <span className="whitespace-nowrap">acculturation gap</span>
          </ToolTip>
          , differences in values that are a result of growing up in different
          cultural environments. Across time, these differences can get bigger,
          leading parents and children to grow further apart and have
          difficulties communicating with each other. This is called{" "}
          <ToolTip content="Acculturative Family Distancing (AFD): The emotional and social distancing that occurs between immigrant parents and their children that is a result of cultural differences from growing up in different cultural environments and difficulties in communication with each other effectively.">
            <span className="whitespace-nowrap">
              Acculturative Family Distancing (AFD)
            </span>
          </ToolTip>
          , which can lead to emotional distancing, family conflict, feelings of
          being misunderstood, and trigger mental health problems in children
          and parents.{" "}
        </div>
        <div className="mt-4">
          To reduce the impact of AFD, we need to be more{" "}
          <ToolTip content="Cultural flexibility: To be understanding, flexible and compromising in one’s cultural values.">
            <span className="whitespace-nowrap">culturally flexible</span>
          </ToolTip>{" "}
          and less culturally rigid. We need to become more effective
          communicators and better understand cultural differences in
          communication. This increases{" "}
          <ToolTip content="Bicultural competence: The ability to successfully understand and navigate two different cultures, (in this case is American and Asian culture).">
            <span className="whitespace-nowrap">bicultural competence</span>
          </ToolTip>{" "}
          the ability to navigate, understand, and adapt to both cultures, which
          is crucial for children and families with different cultural
          backgrounds.{" "}
        </div>
        <div className="mt-4">
          Our hope is that by reading this book, children and parents will be
          able to close the acculturation gap, and better understand each
          other’s love languages. It is important to understand that children
          who grow up in the United States and may need to be loved and
          communicated with in different ways. By becoming more{" "}
          <ToolTip content="Culturally competent: To be culturally self-aware, possess knowledge of cultural differences, and to have the skills to navigate across cultures.">
            <span className="whitespace-nowrap">culturally competent</span>
          </ToolTip>{" "}
          and flexible, we are better able to reduce the impact of parent-child
          cultural and communication differences on family relationships and
          emotional closeness.
        </div>
      </div>
    </>
  );
};

export default ReadersGuide;
