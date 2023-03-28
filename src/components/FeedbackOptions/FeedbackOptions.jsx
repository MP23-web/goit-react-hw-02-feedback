import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={s.btnList}>
      {options.map(btn => {
        return (
          <li key={btn} className={s.item}>
            <button
              type="button"
              name={btn}
              className={s[btn]}
              onClick={onLeaveFeedback}
            >
              {btn}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;