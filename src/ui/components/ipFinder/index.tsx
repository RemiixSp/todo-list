import React, { useState } from 'react';
import { fetchIp } from '../../../core/store/ipFinder/asyncAction';
import { IpType } from '../../../core/store/ipFinder/types';
import { useAppDispatch, useAppSelector } from '../../../core/store/store';
import { Status } from '../../../core/store/types';
import Button from '../../common/button';
import Input from '../../common/input';
import styles from './ip.module.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const IpFinder: React.FC = () => {
  const [inputVal, setInputVal] = useState('');

  const ip = useAppSelector((state) => state.ip);

  const dispatch = useAppDispatch();

  const getIpValue = async () => {
    try {
      dispatch(fetchIp({ ip: inputVal }));
    } catch (error) {
      toast.error('Error while getting ip');
    }
  };

  const ipProps = Object.keys(ip.ipInfo).filter((obj) => obj !== 'status');

  const onChangeInputVal = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInputVal(event.target.value);

  return (
    <div className={styles.apiWidget}>
      <h3 className={styles.ipHeader}>Find by ip</h3>
      <div className={styles.foundInfo}>
        {ip.status === Status.SUCCESS ? (
          <ul className={styles.allInfo}>
            {ipProps.map((value, index) => (
              <li key={value} className={styles.infoObj}>
                {`${value}: ${ip.ipInfo[value as keyof IpType]}`}
              </li>
            ))}
          </ul>
        ) : (
          <h3 className={styles.noIp}>Waiting for ip</h3>
        )}
      </div>
      <div className={styles.ipBottom}>
        <div className={styles.getIpContainer}>
          <Input
            className={styles.getIpField}
            value={inputVal}
            onChange={onChangeInputVal}
            placeholder='Enter ip here'
          />
          <Button onClick={getIpValue} className={styles.submitIp}>
            Submit
          </Button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default IpFinder;
