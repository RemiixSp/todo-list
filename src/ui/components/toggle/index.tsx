import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../core/store/store';
import { changeMode } from '../../../core/store/theme';
import styles from './toggle.module.scss';

const Toggle: React.FC = () => {
  const darkTheme = useAppSelector((state) => state.theme.darkMode);

  const dispatch = useDispatch();

  const onThemeChange = () => {
    dispatch(changeMode());
  };

  return (
    <div className={styles.toggleContainer}>
      <div className={styles.toggleSwitch}>
        <label className={styles.toggleLable} htmlFor='toggle'>
          Theme switch
        </label>
        <label className={styles.toggleContainerLabel}>
          <input
            onChange={onThemeChange}
            checked={darkTheme ? true : false}
            type='checkbox'
            id='toggle'
          />
          <span className={styles.slider}></span>
        </label>
      </div>
    </div>
  );
};

export default Toggle;
