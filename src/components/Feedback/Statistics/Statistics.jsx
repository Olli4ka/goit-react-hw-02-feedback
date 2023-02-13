import PropTypes from 'prop-types';
import { StatisticsContainer } from './Statistics.styled';



export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    
      <StatisticsContainer>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>           
        <p>Total: {total}</p>
        <p>Percentage: {positivePercentage > 0 ? positivePercentage : 0}%</p>          
      </StatisticsContainer>    
  );
};

Statistics.propTypes = {
  good: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  neutral: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bad: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  positivePercentage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};