import styles from './popularSet.module.css';
import Image, { StaticImageData } from 'next/image';
import basketImg from '../../../../public/svg/drawer.svg';
type PopularSetItemProps = {
  id?: number;
  title: string;
  description: string;
  image: StaticImageData;
  price: number;
};

function PopularSetItem({ title, description, image, price }: PopularSetItemProps) {
  return (
    <div className={styles.item}>
      <Image src={image} alt={title} width={370} height={300} className={styles.image} />
      <div className={styles.info}>
        <h4 className={styles.title_item}>{title}</h4>
        <p>{description}</p>
        <div className={styles.basket}>
          <span>{price} руб</span>
          <button className={styles.button}>
            <Image src={basketImg} alt={'basket'} width={21} height={26} /> В корзину
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopularSetItem;
