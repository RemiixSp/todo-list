import React from 'react';
import Header from '../../components/header';
import AuthorizationView from '../../views/authorization';
import styles from './authorization.module.scss';
import cn from 'classnames';
import { useAppSelector } from '../../../core/store/store';

const Authorization = () => {
  const darkTheme = useAppSelector((state) => state.theme.darkMode);

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
