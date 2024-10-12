import styles from './corporate-gifts.module.css';

import Container from '@/app/components/Container';
import Breadcrumb from '../shared/ui/Breadcrumb';
// import Link from 'next/link';

const giftVariants = [
  {
    heading: '3 макарона с печатью',
    description: 'В пластиковой упаковке самый бюджетный вариант',
    price: 'от 150 руб/шт',
    className: 'pic_threeMacaroons',
    key: 0,
  }, {
    heading: '9 макарон с печатью',
    description: 'С логотипом Вашей копании, пожеланиями и т.д.',
    price: 'от 500 руб',
    className: 'pic_nineMacaroons',
    key: 1,
  }, {
    heading: 'Круглый набор, 40 шт.',
    description: 'Для самых любимых и дорогих клиентов',
    price: 'от 3600 руб',
    className: 'pic_fortyMacaroons',
    key: 2,
  }, {
    heading: 'Набор на 70 шт.',
    description: 'Роскошный подарок для большой компании',
    price: 'от 5600 руб',
    className: 'pic_seventyMacaroons',
    key: 3,
  },
];

const completedOrders = [
  {
    id: 0,
    className: 'hotel',
    description: 'Набор макарон для отеля “Индиго”',
  }, {
    id: 1,
    className: 'caffee',
    description: 'Набор макарон для кафе “Мята”',
  }, {
    is: 2,
    className: 'newYear',
    description: 'Новогодний набор макарон “В ожидании чуда”',
  }, {
    id: 3,
    className: 'march',
    description: 'Набор на 8 марта “Первый весенний цветок”',
  }
]

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
      <Container>
        <div className={styles['gift-variants']}>
          <h3 className={styles['minor-heading']}>Некоторые варианты подарков</h3>
          <div className={styles['gifts-variants__container']}>
            {giftVariants.map((variant) => (
              <div className={styles['gift-variant']} key={variant.key}>
                <div className={[styles['gift-variant__pic'], styles[variant.className]].join(' ')}></div>
                <div className={styles['gift-variant__text-content']}>
                  <span className={styles['gift-variant__heading']}>{variant.heading}</span>
                  <span className={styles['gift-variant__description']}>{variant.description}</span>
                  <div className={styles.separator}></div>
                  <span className={styles['gift-variant__price']}>{variant.price}</span>
                </div>
              </div>
            ))}
          </div>
          <button className={styles['gift-variant__btn']}>Получить КП</button>
        </div>
      </Container>
      <Container>
        <div className={styles['completed-orders__container']}>
          <h3 className={styles['minor-heading']}>Мы уже выполнили заказы</h3>
          <div className={styles['completed-orders']}>
            {completedOrders.map((order) => (
              <div className={styles['completed-order']} key={order.id}>
                <div className={[styles['completed-order__pic'], styles[order.className]].join(' ')}></div>
                <div className={styles['completed-order__description']}>{order.description}</div>
              </div>
            ))}
          </div>
          <div className={styles['pagination']}>
            <div className={[styles['pagination__element'], styles['_current']].join(' ')}></div>
            <div className={styles['pagination__element']}></div>
            <div className={styles['pagination__element']}></div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default CorporateGifts;