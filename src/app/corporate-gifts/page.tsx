import styles from './corporate-gifts.module.css';

import Container from '@/app/components/Container';
import Breadcrumb from '../shared/ui/Breadcrumb';
// import Link from 'next/link';

const CorporateGifts = () => {
  return (
    <section className={styles['corporate-gifts']}>
      <Container>
        <Breadcrumb homeElement={'Главная'} separator={<span>&gt;</span>} translatedLink={'Корпоративные подарки'} />
        <div className={styles['corporate-gifts__description']}>
          <div className={styles['corporate-gifts__pic']}></div>
          <div className={styles['corporate-gifts__info']}>
            <div className={styles['corporate-gift__main-info']}>
              <h2 className={styles.heading}>Корпоративные подарки</h2>
              <span>Брендированные пирожные макарон, которые поднимут аппетит ваших клиентов или порадуют коллектив</span>
            </div>
            <span>
              Поднять мотивацию сотрудников? Увеличить лояльность клиентов или расположить их к себе перед большой сделкой?<br />
              Мы приготовим наборы пирожных от 200 руб за шт, сделаем индивидуальный дизайн и нанесём ваши лого. Обычно готовим за 2-3 дня.
            </span>
            <button className={styles['corporate-gifts__btn']}>Скачать весь каталог подарков</button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default CorporateGifts;