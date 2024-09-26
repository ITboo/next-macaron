import styles from './holidays.module.css';
import Image, { StaticImageData } from 'next/image';
import imageCap from '../../../../public/mainHolidaysCap.png';
type HolidaysItemProps = {
  id: number;
  text: string;
  image: StaticImageData;
};

function HolidaysItem({ id, text, image }: HolidaysItemProps) {
  return (
    <div className={styles.holidays_item}>
      {id === 0 && (
        <Image src={imageCap} alt={'cap'} width={60} height={45} className={styles.cap} />
      )}
      <Image src={image} alt={'doughnut'} width={60} height={45} />
      <span>{text}</span>
    </div>
  );
}

export default HolidaysItem;
