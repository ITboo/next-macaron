// import Link from 'next/link';
import Breadcrumb from '../shared/ui/Breadcrumb';
import styles from './page.module.css';

import Container from '@/app/components/Container';
import OrderForm from '../components/OrderForm';

const offers = [
  {
    className: 'gifts',
    text: 'Корпоративные подарки',
    id: 0
  },
  {
    className: 'eshops',
    text: 'Сотрудничество с интернет магазинами',
    id: 1
  },
  {
    className: 'cafes',
    text: 'Сотрудничество с кафе и ресторанами',
    id: 2
  },
  {
    className: 'coffeeshops',
    text: 'Сотрудничество с кофейнями',
    id: 3
  },
  {
    className: 'hotels',
    text: 'Сотрудничество с отелями',
    id: 4
  },
  {
    className: 'retail',
    text: 'Для Retail',
    id: 5
  },
  {
    className: 'candybars',
    text: 'Кенди бары для мероприятий',
    id: 6
  },
  {
    className: 'otherspheres',
    text: 'И для других сфер бизнеса',
    id: 7
  }
];

const supplies = [
  {
    text: 'прямые поставки от производителя, всегда свежая продукция;',
    id: 0
  },
  {
    text: 'ассортимент с высоким средним чеком и маржой;',
    id: 1
  },
  {
    text: 'бесплатные акриловые шоубоксы для витрины;',
    id: 2
  },
  {
    text: 'продукцию для дегустации или снижение цены для проведения промо-акций;',
    id: 3
  },
  {
    text: 'гибкие условия сотрудничества и поставок.',
    id: 4
  }
];

const brands = [
  {
    className: 'metro',
    id: 0
  },
  {
    className: 'zenit',
    id: 1
  },
  {
    className: 'mvideo',
    id: 2
  },
  {
    className: 'gazprom',
    id: 3
  },
  {
    className: 'zarina',
    id: 4
  }
];

function generateUser() {
  return (
    <>
      <div className={styles.divider}></div>
      <div className={styles['review__user']}>
        <span>
          Иванов Иван<br></br>Генеральный директор ООО “ААА”
        </span>
        <div className={styles['review__logo']}></div>
      </div>
    </>
  );
}

const Wholesale = () => {
  return (
    <section className={styles.wholesale}>
      <Container>
        <Breadcrumb homeElement={'Главная'} separator={<span>&gt;</span>} translatedLink={'Предложения для юридических лиц'} />
        <div className={[styles.firstellipse, styles.ellipse].join(' ')}></div>
        <div className={[styles.secondellipse, styles.ellipse].join(' ')}></div>
        <div className={[styles.thirdellipse, styles.ellipse].join(' ')}></div>
        <div className={styles['wholesale-supply']}>
          <div className={styles['wholesale-supply__pic']}></div>
          <div className={styles['wholesale-supply__info']}>
            <h1 className={styles.heading}>Поставки пирожных оптом</h1>
            <p className={styles['wholesale-supply__buyInfo']}>
              Наши макаронсы и трубочки продаются в крупнейших кондитерских и кофейных сетях
              Санкт-Петербурга. Присоединяйтесь!
            </p>
            <div className={styles['wholesale-supply__btns-container']}>
              <button className={styles['wholesale-supply__btn']}>Презентация</button>
              <button className={styles['wholesale-supply__btn']}>Прайс-лист</button>
            </div>
            <div className={styles['wholesale-supply__description']}>
              <span>Мы предлагаем</span>
              <ul>
                {supplies.map((supply) => (
                  <li key={supply.id}>{supply.text}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className={styles['wholesale-offer']}>
          <h3 className={styles['minor-heading']}>Что мы можем вам предложить:</h3>
          <div className={styles['wholesale-offer__options']}>
            {offers.map((offer) => (
              <div className={styles['wholesale-offer__option']} key={offer.id}>
                <div
                  className={[
                    styles['wholesale-offer__option-background'],
                    styles[offer.className]
                  ].join(' ')}
                ></div>
                <span>{offer.text}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <div className={styles.bg}>
        <Container>
            <OrderForm />
        </Container>
      </div>
      <Container>
        <div className={styles['wholesale-reviews']}>
          <h3 className={styles['minor-heading']}>Нас рекомендуют</h3>
          <div className={styles.reviews}>
            <div className={styles['reviews__column-container']}>
              <div className={styles.review}>
                <span className={styles['review__heading']}>
                  Очень хорошие пироженки и трубочки, рекомендую
                </span>
                <p className={styles['review__text']}>Отзыв блаблабла</p>
                {generateUser()}
              </div>
              <div className={styles.review}>
                <span className={styles['review__heading']}>
                  Очень хорошие пироженки и трубочки, рекомендую
                </span>
                <p className={styles['review__text']}>
                  Являясь всего лишь частью общей картины, активно развивающиеся страны третьего
                  мира, вне зависимости от их уровня, должны быть указаны как претенденты на роль
                  ключевых факторов.{' '}
                </p>
                {generateUser()}
              </div>
            </div>
            <div className={styles['reviews__column-container']}>
              <div className={styles.review}>
                <span className={styles['review__heading']}>
                  Очень хорошие пироженки и трубочки, рекомендую
                </span>
                <p className={styles['review__text']}>
                  Банальные, но неопровержимые выводы, а также представители современных социальных
                  резервов ассоциативно распределены по отраслям. Противоположная точка зрения
                  подразумевает, что многие известные личности могут быть обнародованы.
                </p>
                {generateUser()}
              </div>
            </div>
            <div className={styles['reviews__column-container']}>
              <div className={styles.review}>
                <span className={styles['review__heading']}>Заголовок отзыва</span>
                <p className={styles['review__text']}>
                  Ключевые особенности структуры проекта неоднозначны и будут указаны как
                  претенденты на роль ключевых факторов. А также явные признаки победы
                  институционализации будут заблокированы в рамках своих собственных рациональных
                  ограничений. Элементы политического процесса функционально разнесены на
                  независимые элементы. В своём стремлении улучшить пользовательский опыт мы
                  упускаем, что представители современных социальных резервов обнародованы.
                </p>
                {generateUser()}
              </div>
            </div>
          </div>
          <div className={styles['wholesale-review__brands']}>
            {brands.map((brand) => (
              <div
                key={brand.id}
                className={[styles.brand, styles[brand.className]].join(' ')}
              ></div>
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
  );
};

export default Wholesale;
