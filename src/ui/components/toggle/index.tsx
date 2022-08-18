import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../core/store/store';
import { changeMode } from '../../../core/store/theme';
import styles from './toggle.module.scss';
import cn from 'classnames';
import { useRouter } from 'next/router';

const Toggle: React.FC = () => {
  const route = useRouter();

  const darkTheme = useAppSelector((state) => state.theme.darkMode);

  const dispatch = useDispatch();

  const onThemeChange = () => {
    dispatch(changeMode());
  };

  return (
    <div
      className={cn(styles.toggleContainer, {
        [styles.loginToggleContainer]: route.pathname === '/authorization',
      })}
    >
      <label className={styles.toggleLable}>Theme switch</label>
      <div className={styles.toggleSwitch}>
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
