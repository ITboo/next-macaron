import styles from './mainNews.module.css';
import Image, { StaticImageData } from 'next/image';

type CardMainNews = {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  link?: string;
  date: string;
};

function MainNewsItem({ title, description, image, date }: CardMainNews) {
  return (
    <div className={styles.news_item}>
      <Image src={image} alt={title} className={styles.news_item__image} />
    <span className={styles.news_date}>{date}</span>
      <h4 className={styles.news_item__title}>{title}</h4>
      <p className={styles.news_text}>{description}</p>
    </div>
  );
}

export default MainNewsItem;
