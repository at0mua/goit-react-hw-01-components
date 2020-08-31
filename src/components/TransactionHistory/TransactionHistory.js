import React from 'react';

import TransactionHistoryItem from './TransactionHistoryItem';
import PropTypes from 'prop-types';

import s from './TransactionHistory.module.scss';

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, ...otherProps }) => (
          <TransactionHistoryItem key={id} {...otherProps} />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
