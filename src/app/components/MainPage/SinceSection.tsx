import Image from 'next/image';
import styles from './sinceSection.module.css';
import heart from '../../../../public/mainHeart.png';
import ellipse from '../../../../public/mainSinceEllipse.png';

function SinceSection() {
  return (
    <section className={styles.since}>
      <Image src={heart} alt='heart' width={868} height={479} className={styles.heart} />
      <Image src={ellipse} alt='ellipse' width={868} height={479} className={styles.ellipse} />
      <div className={styles.content}>
        <div className={styles.macaron}>
          <span className={styles.macaron_text}>Macaronshop</span>
          <div className={styles.since_date}>
            <div className={styles.line}></div>
            <span>Since 2013</span>
            <div className={styles.line}></div>
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
