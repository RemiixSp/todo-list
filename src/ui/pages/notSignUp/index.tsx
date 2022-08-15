import React from 'react';
import styles from './notLog.module.scss';
import Header from '../../components/header';
import NotLoggedViev from '../../views/notSignUp';

const NotSignedUp = () => {
  return (
    <div className={styles.container}>
      <Header />
      <NotLoggedViev />
    </div>
  );
};

export default NotSignedUp;
