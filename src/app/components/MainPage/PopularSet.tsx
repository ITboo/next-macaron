import styles from './popularSet.module.css';
import beautiful from '../../../../public/mainPopularSetBeautiful.png';
import circle from '../../../../public/mainPopularSetCircleSet.png';
import heartRed from '../../../../public/mainPopularSetHeartRed.png';
import heartWhite from '../../../../public/mainPopularSetHeartWhite.png';
import nine from '../../../../public/mainPopularSetNine.png';
import sixteen from '../../../../public/mainPopularSetSixteen.png';
import { StaticImageData } from 'next/image';
import PopularSetItem from './PopularSetItem';

interface CardsPopularSet {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
  price: number;
  link?: string;
}
const popularSetData: CardsPopularSet[] = [
  {
    id: 0,
    image: heartRed,
    title: 'Сердце',
    description: '24 штуки в коробке в виде сердца. Ассорти из 6 вкусов',
    price: 2800
  },
  {
    id: 1,
    image: beautiful,
    title: 'Красота спасёт мир',
    description: 'Набор 16 шт. Вкусы: клубника - базилик, кокос, голубой сыр, пармезан',
    price: 750
  },
  {
    id: 2,
    image: circle,
    title: 'Круглый набор',
    description: '40 макаронс в круглой коробке с персональной надписью',
    price: 3900
  },
  {
    id: 3,
    image: nine,
    title: 'Набор на 9',
    description: 'Набор из 9 штук в квадратной коробке. Вкусы: шоколад, фисташка, вишня',
    price: 950
  },
  {
    id: 4,
    image: sixteen,
    title: 'Набор на 16',
    description: 'Набор 16 шт. Вкусы: соленая карамель, голубой сыр, пармезан, шоколад ',
    price: 1500
  },
  {
    id: 5,
    image: heartWhite,
    title: 'Сердце',
    description: '24 штуки в коробке в виде сердца. Ассорти из 6 вкусов',
    price: 2500
  }
];
function PopularSet() {
  return (
    <section className={styles.popular_set}>
      <h3 className={styles.title}>Популярные наборы</h3>
      <div className={styles.popular_set_container}>
        {popularSetData.map((popularSet) => (
          <PopularSetItem key={popularSet.id} {...popularSet} />
        ))}
      </div>
      <button className={styles.all_popular_get}>Все праздничные наборы</button>
    </section>
  );
}

export default PopularSet;
