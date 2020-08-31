import React from 'react';
import PropTypes from 'prop-types';

import s from './TransactionHistory.module.scss';

const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <tr>
      <td className={s.name}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TransactionHistoryItem.defaultProps = {
  type: 'not available',
  amount: 'not available',
  currency: 'not available',
};

TransactionHistoryItem.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

export default TransactionHistoryItem;
