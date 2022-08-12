import React from 'react';
import logo from '../../../media/images/logo.png';
import styles from './header.module.scss';
import Button from '../../common/button';
import { Link } from 'react-router-dom';
import cn from 'classnames';

const Header = () => {
  //will be logic in future
  const isAuthorized = false;
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to='/'>
            <img src={logo} alt='todo Logo' />
          </Link>
          <div>
            <h1>To-do app</h1>
            <p>the best for controlling your time</p>
          </div>
        </div>
        <div className={styles.authorization}>
          {window.location.pathname === '/' ? (
            isAuthorized ? (
              <Link to='authorization'>
                <Button className={styles.login} onClick={() => {}}>
                  Sign in
                </Button>
              </Link>
            ) : (
              <Button
                className={cn(styles.signOut, 'btn-outline-danger')}
                onClick={() => {}}
              >
                Log out
              </Button>
            )
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
