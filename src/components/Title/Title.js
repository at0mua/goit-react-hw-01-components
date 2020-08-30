import React from 'react';
import PropTypes from 'prop-types';
import styles from './Title.module.scss';

const Title = ({ title }) => {
  return <h2 className={styles.title}>{title}</h2>;
};

Title.defaulProps = {
  title: 'Задание',
};

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
