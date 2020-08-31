import React from 'react';
import PropTypes from 'prop-types';

import s from './Profile.module.scss';

const Profile = ({
  name,
  tag,
  location,
  avatar,
  stats: { followers = 0, views = 0, likes = 0 },
}) => {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt="user avatar" className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{followers}</span>
        </li>
        <li>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{views}</span>
        </li>
        <li>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.defaultProps = {
  avatar: 'https://dummyimage.com/128/5c3e5c/fff.png&text=(▲_▲)',
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;
