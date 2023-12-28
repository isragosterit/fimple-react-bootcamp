import React from 'react';
import styles from './button.module.css';

const Button = ({ text, color, type, size, ...rest }) => {
  let buttonClass = `${styles.btn} ${styles[`button-${type}`]} ${styles[color]}`;

  if (size === 'small') {
    buttonClass += ` ${styles['button-small']}`;
  } else if (size === 'large') {
    buttonClass += ` ${styles['button-large']}`;
  }

  return (
    <button
      className={buttonClass}
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;
