// import SinceSection from './components/MainPage/SinceSection';
// import Proposals from './components/MainPage/Proposals';
import Shares from './components/MainPage/Shares';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.page}>
      {/* <SinceSection /> */}
      {/* <Proposals /> */}
      <Shares />
    </main>
  );
}
