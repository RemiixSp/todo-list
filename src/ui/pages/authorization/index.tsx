import React from 'react';
import Header from '../../components/header';
import AuthorizationView from '../../views/authorization';
import styles from './authorization.module.scss';

const Authorization = () => {
  return (
    <div className={styles.container}>
      <Header />
      <AuthorizationView />
    </div>
  );
};

export default Authorization;
