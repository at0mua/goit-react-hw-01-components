import React from 'react';
import PropTypes from 'prop-types';

import FriendListItem from './FriendListItem';

import s from './FriendList.module.scss';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(({ id, ...otherProps }) => (
        <FriendListItem key={id} {...otherProps} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;
