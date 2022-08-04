import Header from '../../components/header';
import styles from './home.module.scss';
import HomeView from '../../views/homeView';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.home}>
        <Header />
        <HomeView />
      </div>
    </div>
  );
};

export default Home;
