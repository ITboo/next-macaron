import Proposals from './components/MainPage/Proposals';
// import SinceSection from './components/MainPage/SinceSection';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.page}>
      {/* <SinceSection /> */}
      <Proposals />
    </main>
  );
}
