import Header from '../../components/header';
import styles from './home.module.scss';
import HomeView from '../../views/home';
import cn from 'classnames';
import { useAppSelector } from '../../../core/store/store';

const Home = () => {
  const darkTheme = useAppSelector((state) => state.theme.darkMode);

  return (
    <div className={cn({ [styles.darkThemeBody]: darkTheme })}>
      <div className={styles.container}>
        <Header />
        <HomeView />
      </div>
    </div>
  );
};
export default Home;
