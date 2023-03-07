import PropTypes from 'prop-types';
import { List, Button } from './FeedbackOptions.styled';

const options = ["good", "neutral", "bad"];

export const FeedbackOptions = ({ onLeaveFeedback }) => {
    return (
      <List>
        {options.map(option => <li key={option}>
        <Button type="button" onClick={() => onLeaveFeedback(option)}>{option}</Button>
      </li>)}
    </List>
    )
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};