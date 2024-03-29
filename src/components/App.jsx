/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Container from 'components/App.styled';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedbackChange = feedback => {
    switch (feedback) {
      case 'good':
        setGood(state => state + 1);
        // setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(state => state + 1);
        // setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(state => state + 1);
        // setBad(prevState => prevState + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good * 100) / total);
  };

  const feedbacks = ['good', 'neutral', 'bad'];

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbacks}
          onBtnClick={handleFeedbackChange}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
}
