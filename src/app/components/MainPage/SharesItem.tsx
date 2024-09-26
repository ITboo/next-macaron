import Image, { StaticImageData } from 'next/image';
import styles from './shares.module.css';

type SharesItemProps = {
  //   id: number;
  title: string;
  text: string;
  image: StaticImageData;
  color: string;
};
function SharesItem({ title, text, image, color }: SharesItemProps) {
  return (
    <div className={styles.shares_item}>
      <div className={styles.image}>
        <div className={styles.note} style={{ backgroundColor: color }}>
          {title}
        </div>
        <Image src={image} alt={title} width={270} height={270} />
      </div>

      <div style={{ backgroundColor: color }} className={styles.shares_item_bottom}>
        <span>{text}</span>
      </div>
    </div>
  );
}

export default SharesItem;
