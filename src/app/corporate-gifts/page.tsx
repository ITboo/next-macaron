import styles from './page.module.css';

import Container from '@/app/components/Container';
import Breadcrumb from '../shared/ui/Breadcrumb';
// import Link from 'next/link';

const giftVariants = [
  {
    heading: '3 макарона с печатью',
    description: 'Cамый бюджетный вариант, но не самый незначимый!',
    price: 'от 150 руб/шт',
    className: 'pic_threeMacaroons',
    key: 0,
  }, {
    heading: '9 макарон с печатью',
    description: 'С любой печатью, например с логотипом Вашей копании',
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
    description: 'Набор для отеля “Индиго”',
  }, {
    id: 1,
    className: 'caffee',
    description: 'Набор для кафе “Мята”',
  }, {
    is: 2,
    className: 'newYear',
    description: 'Новогодний набор “В ожидании чуда”',
  }, {
    id: 3,
    className: 'march',
    description: 'Набор на 8 марта “Первый весенний цветок”',
  }
]

const faq = [
  {
    id: 0,
    question: 'Сколько хранятся пирожные макарон?',
    answer: 'При комнатной температуре (+18..+20℃), до 1 суток, в холодильнике (при температуре +1..+7℃), до 30 суток.',
  }, {
    id: 1,
    question: 'А с НДС работаете?',
    answer: 'Для вашего удобства у нас есть два варианта взаимодействия: с НДС и без НДС. Всегда уточняйте форму оплаты у менеджера, чтобы получить максимально выгодные для вас условия!',
  }, {
    id: 2,
    question: 'Как быстро мы выполняем заказы',
    answer: 'Стандартный срок выполнения заказа 3-5 дней, При большом тираже и в предновогодний сезон срок может увеличиться из-за количества заказов.',
  }, {
    id: 3,
    question: 'Что с доставкой?',
    answer: 'Мы доставляем ваши заказы по всей России: от Камчатки до Калининграда, бережно упаковывая каждую печеньку или набор. Мы всегда производим для вас на 2-5% больше от заказанного количества, чтобы ничего не смогло омрачить результат нашей работы. Сроки доставки 2-7 дней с момента заказа.',
  }, {
    id: 4,
    question: 'А за 2 дня?',
    answer: 'Мы предоставляем возможность доплатить за срочность заказа.',
  }, {
    id: 5,
    question: 'Вы можете сделать кастомный рисунок? Сколько это стоит?',
    answer: 'Да, мы можем сделать любой рисунок или печать. Стоимость зависит от сложности рисунка, а также от материалов, используемых для его создания. Примерные расценки вы можете посмотреть во вкладке "Создать дизайн".',
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
        <div className={[styles.firstellipse, styles.ellipse].join(' ')}></div>
        <div className={[styles.secondellipse, styles.ellipse].join(' ')}></div>
        <div className={[styles.thirdellipse, styles.ellipse].join(' ')}></div>
        <div className={[styles.fourthellipse, styles.ellipse].join(' ')}></div>
        <div className={[styles.fifthellipse, styles.ellipse].join(' ')}></div>
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
      {/* тут должен быть компонент с брендами */}
      <Container>
        <div className={styles['faq__container']}>
          <h3 className={styles['minor-heading']}>Ответы на вопросы</h3>
          <div className={styles.faq}>
            {faq.map(q => (
              <div className={styles.question} key={q.id}>
                <span className={styles['question__heading']}>{q.question}</span>
                <div className={styles.separator}></div>
                <span className={styles['question__answer']}>{q.answer}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default CorporateGifts;