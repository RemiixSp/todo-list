import cn from 'classnames';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAppSelector } from '../core/store/store';
import Header from '../ui/components/header';
import HomeView from '../ui/views/home';
import styles from './home/home.module.scss';

const Home = () => {
  const darkTheme = useAppSelector((state) => state.theme.darkMode);

  const user = useAppSelector((state) => state.login);

  const route = useRouter();

  useEffect(() => {
    if (!user.isAuthorized) {
      route.push('/notSignUp');
    }
  }, []);

  return (
    <div className={cn({ [styles.darkThemeBody]: darkTheme })}>
      {user.isAuthorized && (
        <div className={styles.container}>
          <Header />
          <HomeView />
        </div>
      )}
    </div>
  );
};
export default Home;
