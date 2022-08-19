import React, { useEffect, useRef } from 'react';
import styles from './notLog.module.scss';
import Header from '../../ui/components/header';
import NotLoggedView from '../../ui/views/notSignUp';
import { useAppSelector } from '../../core/store/store';
import cn from 'classnames';

const NotSignedUp = () => {
  const darkTheme = useAppSelector((state) => state.theme.darkMode);
  if (typeof window === 'undefined') return null;

  return (
    <div className={cn({ [styles.darkThemeBody]: darkTheme })}>
      <div className={styles.container}>
        <Header />
        <NotLoggedView />
      </div>
    </div>
  );
};

export default NotSignedUp;
