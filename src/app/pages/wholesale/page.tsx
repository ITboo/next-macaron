import styles from './page.module.css';

import Container from '@/app/components/Container';

const Wholesale = () => {
  return (
    <section>
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
      </Container>
    </section>
  );
};

export default Wholesale;
