import styles from './sinceSection.module.css';

function SinceSection() {
  return (
    <section className={styles.since}>
      <div className={styles.bg}></div>
      <div className={styles.content}>
        <div className={styles.macaron}>
          <span>Macaronshop</span>
          <div>
            <div className='line'></div>
            <span>Since 2013</span>
          </div>
        </div>
        <h1 className={styles.since_title}>Настоящая любовь</h1>
        <p className={styles.since_text}>
          Пирожные макарон и другие десерты из натуральных ингредиентов, приготовленные с любовью
        </p>
      </div>
    </section>
  );
}

export default SinceSection;
