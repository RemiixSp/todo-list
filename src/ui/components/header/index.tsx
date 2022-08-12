import React from 'react';
import logo from '../../../media/images/logo.png';
import styles from './header.module.scss';
import Button from '../../common/button';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className={styles.header}>
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt='todo Logo' />
        <div>
          <h1>To-do app</h1>
          <p>the best for controlling your time</p>
        </div>
      </div>
      <div className={styles.authorization}>
        <Link to='authorization'>
          <Button className={styles.login} onClick={() => {}}>
            Sign in
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

export default Header;
