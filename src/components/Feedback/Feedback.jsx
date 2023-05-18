import { useState } from 'react';
import { Statistics } from '../Statistics';
import { FeedbackOptions } from '../FeedbackOptions';
import { Section } from '../Section';
import { Notification } from '../Notification';

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedBackName = { good, neutral, bad };

  const onLeaveFeedback = event => {
    const { name } = event.currentTarget;
    if (name === 'good') setGood(prevState => prevState + 1);
    if (name === 'neutral') setNeutral(prevState => prevState + 1);
    if (name === 'bad') setBad(prevState => prevState + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad;

    return Math.round((good / total) * 100);
  };

  return (
    <div>
      <Section title="Please, leave feedback">
        <FeedbackOptions
          options={Object.keys(feedBackName)}
          onLeaveFeedback={onLeaveFeedback}
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
          <Notification massage="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
