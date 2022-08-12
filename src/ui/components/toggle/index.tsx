import React from 'react';
import styles from './toggle.module.scss';

const Toggle = () => {
  return (
    <div className={styles.toggleContainer}>
      <div className={styles.toggleSwitch}>
        <label>
          <input type='checkbox' />
          <span className={styles.slider}></span>
        </label>
      </div>
    </div>
  );
};

export default Toggle;
