import { StaticImageData } from 'next/image';
import styles from './shares.module.css';
import blueCoffee from '../../../../public/mainSharesBlueCoffee.png';
import candiesIcecream from '../../../../public/mainSharesCandiesIсecream.png';
import cookiesPizz from '../../../../public/mainSharesCookiesPizza.png';
import eclair from '../../../../public/mainSharesEclair.png';
import SharesItem from './SharesItem';

interface CardsShares {
  id: number;
  title: string;
  text: string;
  image: StaticImageData;
  color: string;
}

const sharesData: CardsShares[] = [
  {
    id: 0,
    title: 'Бесплатная доставка',
    text: 'По СПб в районе КАД –  от 3000₽ По МСК – от 5000₽',
    image: blueCoffee,
    // color: 'rgba(140, 196, 236, 1)'
    color: 'var(--blue)'
  },
  {
    id: 1,
    title: 'Новинка',
    text: 'Шоколадное пирожное картошка на основе бисквита!',
    image: eclair,
    color: 'var(--accent)'
  },
  {
    id: 2,
    title: 'Новинка',
    text: 'Аппетитные конфеты на основе миндального печенья и крема',
    image: candiesIcecream,
    color: 'var(--accent)'
  },
  {
    id: 3,
    title: 'Сладкая Новинка',
    text: 'Карамель на палочке из натуральных ингредиентов',
    image: cookiesPizz,
    color: 'var(--accent)'
  }
];

function Shares() {
  return (
    <section className={styles.shares}>
      <h2 className={styles.title}>Акции</h2>
      <div className={styles.shares_container}>
        {sharesData.map((share) => (
          <SharesItem key={share.id} {...share} />
        ))}
      </div>
      <div className={styles.all_share}>
        <div className={styles.all_share_item}></div>
        <div className={styles.all_share_item}></div>
        <div className={styles.all_share_item}></div>
      </div>
    </section>
  );
}

export default Shares;
