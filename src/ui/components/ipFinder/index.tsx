import React, { useState } from 'react';
import Button from '../../common/button';
import Input from '../../common/input';
import styles from './ip.module.scss';

const IpFinder: React.FC = () => {
  const [inputVal, setInputVal] = useState('');

  const onChangeInputVal = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInputVal(event.target.value);

  return (
    <div className={styles.apiWidget}>
      <h3 className={styles.ipHeader}>Find by ip</h3>
      <div className={styles.foundInfo}></div>
      <div className={styles.getIpContainer}>
        <Input
          className={styles.getIpField}
          placeholder='Enter ip'
          type='text'
          value={inputVal}
          onChange={onChangeInputVal}
        />

        <Button onClick={() => {}} className={styles.submitIp}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default IpFinder;
