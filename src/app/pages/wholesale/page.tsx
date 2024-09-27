import styles from './page.module.css';

import Container from '@/app/components/Container';

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
            <div className={styles['wholesale-offer__option']}>
              <div className={[styles['wholesale-offer__option-background'], styles.gifts].join(' ')}></div>
              <span>Корпоративные<br></br>подарки</span>
            </div>
            <div className={styles['wholesale-offer__option']}>
              <div className={[styles['wholesale-offer__option-background'], styles.eshops].join(' ')}></div>
              <span>Сотрудничество<br></br>с интернет магазинами</span>
            </div>
            <div className={styles['wholesale-offer__option']}>
              <div className={[styles['wholesale-offer__option-background'], styles.cafes].join(' ')}></div>
              <span>Сотрудничество<br></br>с кафе и ресторанами</span>
            </div>
            <div className={styles['wholesale-offer__option']}>
              <div className={[styles['wholesale-offer__option-background'], styles.coffeeshops].join(' ')}></div>
              <span>Сотрудничество<br></br>с кофейнями</span>
            </div>
            <div className={styles['wholesale-offer__option']}>
              <div className={[styles['wholesale-offer__option-background'], styles.hotels].join(' ')}></div>
              <span>Сотрудничество с отелями</span>
            </div>
            <div className={styles['wholesale-offer__option']}>
              <div className={[styles['wholesale-offer__option-background'], styles.retail].join(' ')}></div>
              <span>Для Retail</span>
            </div>
            <div className={styles['wholesale-offer__option']}>
              <div className={[styles['wholesale-offer__option-background'], styles.candybars].join(' ')}></div>
              <span>Кенди бары для мероприятий</span>
            </div>
            <div className={styles['wholesale-offer__option']}>
              <div className={[styles['wholesale-offer__option-background'], styles.otherspheres].join(' ')}></div>
              <span>И для других сфер бизнеса</span>
            </div>
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
      </Container>
    </section>
  );
};

export default Wholesale;
