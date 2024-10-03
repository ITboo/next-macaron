import Image, { StaticImageData } from 'next/image';
import styles from './carousel.module.css';
type CarouselBaseProps = {
  id?: number;
  image?: StaticImageData;
  text: string;
};

function CarouselItem({ image, text }: CarouselBaseProps) {
  return (
    <div className={styles.slide}>
      <Image src={image} alt='discount' width={20} height={20} className={styles.img} />
      <span>{text}</span>
    </div>
  );
}

export default CarouselItem;
