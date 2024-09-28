import styles from './page.module.css';

import Container from '@/app/components/Container';

const offers = [{
    className: 'gifts',
    text: 'Корпоративные подарки',
    id: 0,
  }, {
    className:'eshops',
    text: 'Сотрудничество с интернет магазинами',
    id: 1,
  }, {
    className: 'cafes',
    text: 'Сотрудничество с кафе и ресторанами',
    id: 2,
  }, {
    className: 'coffeeshops',
    text: 'Сотрудничество с кофейнями',
    id: 3,
  }, {
    className: 'hotels',
    text: 'Сотрудничество с отелями',
    id: 4,
  }, {
    className: 'retail',
    text: 'Для Retail',
    id: 5,
  }, {
    className: 'candybars',
    text: 'Кенди бары для мероприятий',
    id: 6,
  }, {
    className: 'otherspheres',
    text: 'И для других сфер бизнеса',
    id: 7,
  },
];

function GenerateOffers() {
  return (
    <>
    {offers.map(offer =>
      <div className={styles['wholesale-offer__option']} key={offer.id}>
        <div className={[styles['wholesale-offer__option-background'], styles[offer.className]].join(' ')}></div>
        <span>{offer.text}</span>
      </div>
    )}
    </>
  )
}

function generateUser() {
  return (
    <>
    <div className={styles.divider}></div>
    <div className={styles['review__user']}>
        <span>Иванов Иван<br></br>Генеральный директор ООО “ААА”</span>
      <div className={styles['review__logo']}></div>
    </div>
    </>
  )
}

const Wholesale = () => {
  return (
    <section className={styles.wholesale}>
      <Container>
        <div className={styles.breadcrumbs}>
          <span>Главная</span>
          <span className={styles._active}>Предложения для юридических лиц</span>
        </div>
        <div className={styles['wholesale-supply']}>
          <div className={styles['wholesale-supply__pic']}></div>
          <div className={styles['wholesale-supply__info']}>
            <h1 className={styles.heading}>Поставки пирожных оптом</h1>
            <p className={styles['wholesale-supply__buyInfo']}>
              Наши макаронсы и трубочки продаются в крупнейших кондитерских и кофейных сетях Санкт-Петербурга. Присоединяйтесь!
            </p>
            <div className={styles['wholesale-supply__btns-container']}>
              <button className={styles['wholesale-supply__btn']}>Презентация</button>
              <button className={styles['wholesale-supply__btn']}>Прайс-лист</button>
            </div>
            <div className={styles['wholesale-supply__description']}>
              <span>Мы предлагаем</span>
              <ul>
                <li> прямые поставки от производителя, всегда свежая продукция;</li>
                <li>ассортимент с высоким средним чеком и маржой;</li>
                <li>бесплатные акриловые шоубоксы для витрины;</li>
                <li>продукцию для дегустации или снижение цены для проведения промо-акций;</li>
                <li>гибкие условия сотрудничества и поставок.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles['wholesale-offer']}>
          <h3 className={styles['minor-heading']}>Что мы можем вам предложить:</h3>
          <div className={styles['wholesale-offer__options']}>
            {GenerateOffers()}
          </div>
        </div>
        <div className={styles['wholesale-order']}>
          <h3 className={styles['minor-heading']}>Заказать расчёт или отправить запрос на сотрудничество</h3>
          <div className={styles['wholesale-order__contact-form']}>
            <div className={styles['contact-form__column']}>
              <div className={styles['column__container']}>
                <label htmlFor='name'>Ваше имя*</label>
                <input
                  className={styles['wholesale-order__form']}
                  id='name'
                  type='text'
                  placeholder='Укажите имя'
                  required
                />
              </div>
              <div className={styles['column__container']}>
                <label htmlFor='phone'>Ваш телефон*</label>
                <input
                  className={styles['wholesale-order__form']}
                  type='tel'
                  id='phone'
                  placeholder='+7 (___) ___-__-__'
                  pattern='^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$'
                  required
                />
              </div>
            </div>
            <div className={styles['contact-form__column']}>
              <div className={styles['column__container']}>
                <label htmlFor='company'>Название компании</label>
                <input
                  className={styles['wholesale-order__form']}
                  type='text'
                  id='company'
                  placeholder='Укажите имя'
                />
              </div>
              <div className={styles['column__container']}>
                <label htmlFor='email'>E-mail</label>
                <input
                  className={styles['wholesale-order__form']}
                  type='email'
                  id='email'
                  placeholder='example@domain.com'
                />
              </div>
            </div>
            <div className={styles['column__container']}>
              <label htmlFor='commentary'>Добавить комментарий</label>
              <input
                className={[styles['wholesale-order__form'], styles.commentary].join(' ')}
                type='text'
                id='commentary'
              />
            </div>
          </div>
          <button className={styles['wholesale-order__btn']}>Заказать расчёт</button>
          <div className={styles['wholesale-order__agreement']}>
            <span>{'Нажимая на кнопку "Оформить заказ" Я принимаю и соглашаюсь с '}</span>
            <span className={styles['agreement-link']}>{'Договором оферты '}</span>
            <span>{'и разрешаю обработку моих персональных данных в соответствии с '}</span>
            <span className={styles['agreement-link']}>Политикой конфиденциальности</span>
          </div>
        </div>
        <div className={styles['wholesale-reviews']}>
          <h3 className={styles['minor-heading']}>Нас рекомендуют</h3>
          <div className={styles.reviews}>
            <div className={styles['reviews__column-container']}>
              <div className={styles.review}>
                <span className={styles['review__heading']}>Очень хорошие пироженки и трубочки, рекомендую</span>
                <p className={styles['review__text']}>Отзыв блаблабла</p>
                {generateUser()}
              </div>
              <div className={styles.review}>
                <span className={styles['review__heading']}>Очень хорошие пироженки и трубочки, рекомендую</span>
                <p className={styles['review__text']}>Являясь всего лишь частью общей картины, 
                  активно развивающиеся страны третьего мира, вне зависимости от их уровня, 
                  должны быть указаны как претенденты на роль ключевых факторов. </p>
                {generateUser()}
              </div>
            </div>
            <div className={styles['reviews__column-container']}>
              <div className={styles.review}>
              <span className={styles['review__heading']}>Очень хорошие пироженки и трубочки, рекомендую</span>
              <p className={styles['review__text']}>Банальные, но неопровержимые выводы, а также представители современных социальных резервов ассоциативно распределены по отраслям. Противоположная точка зрения подразумевает, что многие известные личности могут быть обнародованы.</p>
              {generateUser()}
              </div>
            </div>
            <div className={styles['reviews__column-container']}>
              <div className={styles.review}>
              <span className={styles['review__heading']}>Заголовок отзыва</span>
              <p className={styles['review__text']}>Ключевые особенности структуры проекта неоднозначны и будут указаны как претенденты на роль ключевых факторов. А также явные признаки победы институционализации будут заблокированы в рамках своих собственных рациональных ограничений. Элементы политического процесса функционально разнесены на независимые элементы. В своём стремлении улучшить пользовательский опыт мы упускаем, что представители современных социальных резервов обнародованы.</p>
              {generateUser()}
              </div>
            </div>
          </div>
          <div className={styles['wholesale-review__brands']}>
            <div className={[styles.brand, styles.sber].join(' ')}></div>
            <div className={[styles.brand, styles.metro].join(' ')}></div>
            <div className={[styles.brand, styles.zenit].join(' ')}></div>
            <div className={[styles.brand, styles.mvideo].join(' ')}></div>
            <div className={[styles.brand, styles.gazprom].join(' ')}></div>
            <div className={[styles.brand, styles.zarina].join(' ')}></div>
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
