import Header from '../../components/header';
import styles from './home.module.scss';
import HomeView from '../../views/home';

const Home = () => (
  <div className={styles.container}>
    <div className={styles.home}>
      <Header />
      <HomeView />
    </div>
  </div>
);

export default Home;
