import React from 'react';
import styles from './notLog.module.scss';
import Header from '../../components/header';
import NotLoggedViev from '../../views/notSignUp';
import { useAppSelector } from '../../../core/store/store';
import cn from 'classnames';

const NotSignedUp = () => {
  const darkTheme = useAppSelector((state) => state.theme.darkMode);

  return (
    <div className={cn({ [styles.darkThemeBody]: darkTheme }, 'vh-100')}>
      <div className={styles.container}>
        <Header />
        <NotLoggedViev />
      </div>
    </div>
  );
};

export default NotSignedUp;
