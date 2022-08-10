import Header from '../../components/header';
import styles from './home.module.scss';
import HomeView from '../../views/home';

const Home = () => (
  <div className={styles.container}>
    <Header />
    <HomeView />
  </div>
);

export default Home;
