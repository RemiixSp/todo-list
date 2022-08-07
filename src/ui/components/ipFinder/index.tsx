import React from 'react';
import Button from '../../common/button';
import styles from './ip.module.scss';

const ipFinder = () => {
  return (
    <div className={styles.apiWidget}>
      <h3 className={styles.ipHeader}>Find by ip</h3>
      <div className={styles.foundInfo}></div>
      <div className={styles.getIpContainer}>
        <input
          className={styles.getIpField}
          placeholder='Enter ip'
          type='text'
        />

        <Button onClick={() => {}} className={styles.submitIp}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default ipFinder;
