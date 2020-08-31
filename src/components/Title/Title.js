import React from 'react';
import PropTypes from 'prop-types';

import s from './Title.module.scss';

const Title = ({ title }) => {
  return <h2 className={s.title}>{title}</h2>;
};

Title.defaulProps = {
  title: 'Задание',
};

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
