import React from 'react';
import logo from '../../media/images/logo.png';
import styles from '../style/components/header.module.scss';
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__logo}>
          <img src={logo} alt='todo Logo' />
          <div>
            <h1>To-do app</h1>
            <p>the best for controlling your time</p>
          </div>
        </div>
        <div className={styles.header__authorization}>
          <button className={styles.header__login}>Login</button>
          <button className={styles.header__signUp}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
