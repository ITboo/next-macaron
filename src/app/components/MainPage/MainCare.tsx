import styles from './mainCare.module.css';
import { StaticImageData } from 'next/image';
import anonymous from '../../../../public/mainCareAnonymous.png';
import ingredients from '../../../../public/mainCareIngredients.png';
import obtaining from '../../../../public/mainCareObtaining.png';
import carton from '../../../../public/mainCarePackage.png';
import MainCareItem from './MainCareItem';

interface CardMainCare {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
}
const mainCareData: CardMainCare[] = [
  {
    id: 0,
    title: 'Лучшие ингрединты',
    description: 'Что-то про суперкачество, лучших поваров, свежесть и т.д.',
    image: ingredients
  },
  {
    id: 1,
    title: 'Упаковка',
    description: 'Что-то про суперкоробочки и бантики и бла бла бла',
    image: carton
  },
  {
    id: 2,
    title: 'Получение в день заказа',
    description: 'В день заказа доставка курьером или самовывоз',
    image: obtaining
  },
  {
    id: 3,
    title: 'Анонимная доставка',
    description: 'Можем преподнести Ваш заказ как анонимный подарок',
    image: anonymous
  }
];
function MainCare() {
  return (
    <section className={styles.care}>
      <h3 className={styles.title}>Мы обо всём позаботились</h3>
      <div className={styles.care_container}>
        {mainCareData.map((mainCare) => (
          <MainCareItem key={mainCare.id} {...mainCare} />
        ))}
      </div>
    </section>
  );
}

export default MainCare;
