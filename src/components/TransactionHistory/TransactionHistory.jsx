import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';


export const TransactionHistory = ({items}) => {
  
  return (
    <div className={css.container}>
  <table className={css.transactionHistory}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>

    {items.map(({id, type , amount, currency}) => {
      return (
      <tr key = {id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
    </tr>
    )}
    )}
    </tbody>
  </table>
  </div>
)}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
        id: PropTypes.string,
        type: PropTypes.string,
        amount: PropTypes.string,
        currency:PropTypes.string.isRequired,
    }))
};