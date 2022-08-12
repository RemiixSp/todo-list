import React from 'react';
import { useDispatch } from 'react-redux';
import { changeMode } from '../../../core/store/theme';
import styles from './toggle.module.scss';

const Toggle: React.FC = () => {
  const dispatch = useDispatch();

  const onThemeChange = () => {
    dispatch(changeMode());
  };

  return (
    <div className={styles.toggleContainer}>
      <div className={styles.toggleSwitch}>
        <label>
          <input onChange={onThemeChange} type='checkbox' />
          <span className={styles.slider}></span>
        </label>
      </div>
    </div>
  );
};

export default Toggle;
