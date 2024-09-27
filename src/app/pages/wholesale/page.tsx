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
      </Container>
    </section>
  );
};

export default Wholesale;
