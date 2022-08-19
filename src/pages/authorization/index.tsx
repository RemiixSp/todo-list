import React, { useEffect } from 'react';
import Header from '../../ui/components/header';
import AuthorizationView from '../../ui/views/authorization';
import styles from './authorization.module.scss';
import cn from 'classnames';
import { useAppSelector } from '../../core/store/store';

const Authorization = () => {
  let darkTheme = useAppSelector((state) => state.theme.darkMode);

  if (typeof window === 'undefined') return null;

  return (
    <div
      className={cn({
        [styles.darkThemeBody]: darkTheme,
      })}
    >
      <div className={styles.container}>
        <Header />
        <AuthorizationView />
      </div>
    </div>
  );
};

export default Authorization;
