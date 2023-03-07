import PropTypes from 'prop-types';
import { Notification } from "components/Notification/Notification";
import { Text } from 'components/Notification/Notification.styled';

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
  return total > 0 ? 
      <ul>
        <li>
          <Text>Good: {good}</Text>
        </li>
        <li>
          <Text>Neutral: {neutral}</Text>
        </li>
        <li>
          <Text>Bad: {bad}</Text>
        </li>
        <li>
          <Text>Total: {total}</Text>
        </li>
        <li>
          <Text>Positive Feedback: {positivePercentage}%</Text>
        </li>
      </ul> : <Notification message="There is no feedback" />
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number
};