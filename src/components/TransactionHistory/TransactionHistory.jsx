import PropTypes from 'prop-types';


export const TransactionHistory = (props) => {
  console.log (props)
  return (
  <table className="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>

    {props.map(({id, type , amount, currency}) => {
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