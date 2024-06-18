import { useEffect, useState } from "react";

import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Notification from "./Notification";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  useEffect(() => {
    setPositivePercentage(Math.round((good / total) * 100));
  }, [total]);

  const counterG = () => {
    setGood(good + 1);
    setTotal(total + 1);
  };
  const counterN = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
  };
  const counterB = () => {
    setBad(bad + 1);
    setTotal(total + 1);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={{ counterG, counterN, counterB }} />
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={String(positivePercentage)}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};

export default App;
