import PropTypes from 'prop-types';
import {Statistics} from './Statistics/Statistics';
import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions';
import {Section} from './Section/Section';
import {Notification} from './Notification/Notification';
import { FeedbackContainer } from './Feedback.styled';

export const Feedback = ({
  onHandleCount,
  currentState,
  totalFunction,
  parcentFunction,
}) => {
  return (
    <FeedbackContainer>
      <Section title="Plese leave a feedback">
        <FeedbackOptions
          options={Object.keys(currentState)}
          onLeaveFeedback={onHandleCount}
        />
      </Section>

      <Section title="Statistics">
        
        {totalFunction() === 0 ? (
          <Notification message="There is no feedback" /> 
        ) : (
            <Statistics
              good={currentState.good}
              neutral={currentState.neutral}
              bad={currentState.bad}
              total={totalFunction()}
              positivePercentage={parcentFunction()}
            />
        )}                  
      </Section>
    </FeedbackContainer>
  );
};

Feedback.propTypes = {
  onHandleCount: PropTypes.func,
  currentState: PropTypes.object,
  totalFunction: PropTypes.func,
  parcentFunct: PropTypes.func,
  clearFunction: PropTypes.func,
};


