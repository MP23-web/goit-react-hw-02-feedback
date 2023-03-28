import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <div>
      <ul className={s.titles}>
        <li>good</li>
        <li>neutral</li>
        <li>bad</li>
      </ul>
      <ul className={s.feedBack}>
        <li>{good}</li>
        <li>{neutral}</li>
        <li>{bad}</li>
      </ul>

      <ul className={s.titles}>
        <li>total</li>
        <li>positive</li>
      </ul>
      <ul className={s.stats}>
        <li>{total}</li>
        <li>{positive + '%'}</li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};

export default Statistics;