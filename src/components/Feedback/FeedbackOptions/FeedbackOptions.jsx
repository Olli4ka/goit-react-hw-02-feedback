import PropTypes from 'prop-types';
import { FeedbackButtons } from './FeedbackOptions.styled';




export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackButtons onClick={onLeaveFeedback}>
      {options.map((elem, index) => {
        return (
          <button type="button" key={index}>
            {elem}
          </button>
        );
      })}
    </FeedbackButtons>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};