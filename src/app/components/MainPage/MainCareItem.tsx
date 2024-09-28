import styles from './mainCare.module.css';
import Image, { StaticImageData } from 'next/image';

type MainCareItemProps = {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
};

function MainCareItem({ title, description, image }: MainCareItemProps) {
  return (
    <div className={styles.care_item}>
      <div className={styles.image}>
        <Image src={image} alt={title} width={270} height={270} />
      </div>
      <h4 className={styles.care_title}>{title}</h4>
      <p className={styles.text}>{description}</p>
    </div>
  );
}

export default MainCareItem;
