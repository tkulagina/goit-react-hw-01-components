import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({title, stats}) => {
    return (
    <div className={css.container}>
      <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
  
        <ul className={css.statList}>
        {stats.map((({id, label, percentage}) => 
          <li className={css.item} key={id}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>))}
        </ul>
      </section>
    </div>
)}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  )}