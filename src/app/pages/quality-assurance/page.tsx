import Image from 'next/image';
import styles from './page.module.css';

import Container from '@/app/components/Container';
import Link from 'next/link';

const qaArray = [
  {
    id: 0,
    img: '/qa/flour.jpg',
    text: 'миндальная мука'
  },
  {
    id: 1,
    img: '/qa/colorant.jpg',
    text: 'безопасные пищевые красители'
  },
  {
    id:2,
    img: '/qa/ingredients.jpg',
    text: 'фруктовые пюре и натруральные ингредиенты'
  }
];

const Quality = () => {
  return (
    <section>
      <Container>
        <nav aria-label='Breadcrumb' className={styles.breadcrumb}>
          <ul className={styles.breadcrumb_list}>
            <li>
              <Link href='/'>Главная</Link>
            </li>
            <li>
              <span aria-current='page' className={styles.current}>Гарантии вкуса и качества</span>
            </li>
          </ul>
        </nav>
        <h2 className={styles.qa_title}>Гарантии вкуса и качества</h2>
        <p className={styles.qa_text}>
          При изготовлении пирожных мы используем только натуральные ингредиенты, избегая
          использования конвер
        </p>
        <div className={styles.qa_container}>
          {qaArray.map((item) => (
            <div className={styles.qa_item} key={item.id}>
              <Image src={item.img} alt={item.text} width={270} height={270} />
              <div className={styles.qa_description}>
                <p>100%</p>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Quality;
