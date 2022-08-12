import React from 'react';
import logo from '../../../media/images/logo.png';
import styles from './header.module.scss';
import Button from '../../common/button';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { useAppSelector } from '../../../core/store/store';
import { useDispatch } from 'react-redux';
import { signOut } from '../../../core/store/authorization';
import { ReactComponent as ProfilePhoto } from '../../../media/images/profilePhoto.svg';

const Header = () => {
  const isAuthorized = useAppSelector((state) => state.login.isAuthorized);

  const dispatch = useDispatch();

  const onSignOutClick = () => {
    dispatch(signOut());
    window.localStorage.removeItem('user');
  };

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
          {window.location.pathname !== '/authorization' ? (
            isAuthorized ? (
              <div className={styles.logOutContainer}>
                <ProfilePhoto className={styles.profile} />
                <Button
                  className={cn(styles.signOut, 'btn-outline-danger')}
                  onClick={onSignOutClick}
                >
                  Log out
                </Button>
              </div>
            ) : (
              <Link to='/authorization'>
                <Button className={styles.login}>Sign in</Button>
              </Link>
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
