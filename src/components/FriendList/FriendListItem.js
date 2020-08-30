import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.scss';

const FriendListItem = friend => {
  const { avatar, name, isOnline } = friend;
  return (
    <li className={styles.item}>
      {isOnline ? (
        <span className={styles.online}></span>
      ) : (
        <span className={styles.offline}></span>
      )}
      <img className={styles.avatar} src={avatar} alt="avatar" width="80" />
      <p className={styles.name}>{name}</p>
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
