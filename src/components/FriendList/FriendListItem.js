import React from 'react';
import PropTypes from 'prop-types';

import s from './FriendList.module.scss';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClass = isOnline ? s.online : s.offline;
  return (
    <li className={s.item}>
      <span className={statusClass}></span>
      <img className={s.avatar} src={avatar} alt="avatar" width="80" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.defaultProps = {
  avatar: 'https://dummyimage.com/128/5c3e5c/fff.png&text=(▲_▲)',
  isOnline: false,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
