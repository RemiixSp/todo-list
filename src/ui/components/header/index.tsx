import React, { useEffect } from 'react';
import logo from '../../../../public/images/logo.png';
import styles from './header.module.scss';
import Button from '../../common/button';
import cn from 'classnames';
import { useAppSelector } from '../../../core/store/store';
import { useDispatch } from 'react-redux';
import { signOut } from '../../../core/store/authorization';
import Toggle from '../toggle';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  const user = useAppSelector((state) => state.login);

  const darkTheme = useAppSelector((state) => state.theme.darkMode);

  const dispatch = useDispatch();

  const onSignOutClick = () => {
    dispatch(signOut());
    window.localStorage.removeItem('user');
    router.push('/notSignUp');
  };

  return (
    <div className={cn(styles.header, { [styles.darkTheme]: darkTheme })}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href='/'>
            <a className={styles.anchorWrapper}>
              <Image src={logo} alt='todo Logo' />
            </a>
          </Link>
          <div className={styles.headerTextContainer}>
            <h1>To-do app</h1>
            <p>the best for controlling your time</p>
          </div>
        </div>
        <div className={styles.authorization}>
          {router.pathname !== '/authorization' ? (
            user.isAuthorized ? (
              <div className={styles.logOutContainer}>
                <p className={styles.profile}>{user.userName}</p>
                <Button
                  className={cn(styles.signOut, 'btn-outline-danger')}
                  onClick={onSignOutClick}
                >
                  Log out
                </Button>
              </div>
            ) : (
              <Link href='/authorization'>
                <a>
                  <Button className={styles.login}>Sign in</Button>
                </a>
              </Link>
            )
          ) : (
            ''
          )}
        </div>
      </div>
      <Toggle />
    </div>
  );
};

export default Header;
