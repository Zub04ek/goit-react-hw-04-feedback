import { useState } from "react"
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { GlobalStyles } from "./Global.styled";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import { Container } from "./Container.styled";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  }

  const handleIncrement = option => {
    switch (option) {
            case 'good':
                setGood(prev => prev + 1);
                break;
            case 'neutral':
                setNeutral(prev => prev + 1);
                break;
            case 'bad':
                setBad(prev => prev + 1);
                break;
            default: return;
        }
  }

    return (
    <Container>
      <GlobalStyles />
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={handleIncrement}/>
      </Section>
      <Section title="Statistics">
        <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} />
      </Section>
    </Container>
  );
};
