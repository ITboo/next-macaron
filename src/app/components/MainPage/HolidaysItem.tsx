import styles from './holidays.module.css';
import Image, { StaticImageData } from 'next/image';

type HolidaysItemProps = {
  id?: number;
  text: string;
  image: StaticImageData;
};

function HolidaysItem({ text, image }: HolidaysItemProps) {
  return (
    <div className={styles.holidays_item}>
      <Image src={image} alt={'doughnut'} width={60} height={45} />
      <span>{text}</span>
    </div>
  );
}

export default HolidaysItem;
