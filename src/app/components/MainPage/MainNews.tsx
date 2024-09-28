import styles from './mainNews.module.css';
import { StaticImageData } from 'next/image';
import doughnut from '../../../../public/mainNewsDoughnut.png';
import badge from '../../../../public/mainNewsBadge.png';
import chips from '../../../../public/mainNewsChips.png';
import MainNewsItem from './MainNewsItem';

interface CardMainNews {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  link?: string;
  date: string;
}
const mainNewsData: CardMainNews[] = [
  {
    id: 0,
    title: 'Скоро главный праздник весны!',
    description:
      'Девушки любят, когда вкусно, красиво и натурально. Смотрите больше наборов с десертами ручной работы',
    image: doughnut,
    date: '25.02.2023'
  },
  {
    id: 1,
    title: 'Конкурс на 23 февраля!',
    description:
      'День Защитника Отечества уже совсем скоро! Порадуйте своего сладкоежку с помощью аппетитных наборов от МакаронШоп',
    image: chips,
    date: '17.02.2023'
  },
  {
    id: 2,
    title: 'Экспресс-конкурс ко дню Святого Валентина',
    description:
      'Подарок уже через 2 дняДень всех влюблённых не за горами. Расскажи о своих чувствах с помощью сладкой валентинки от МакаронШоп',
    image: badge,
    date: '11.02.2023'
  }
];
function MainNews() {
  return (
    <section className={styles.news}>
      <h3 className={styles.title}>Новости</h3>
      <div className={styles.news_container}>
        {mainNewsData.map((mainNews) => (
          <MainNewsItem key={mainNews.id} {...mainNews} />
        ))}
      </div>
      <button className={styles.all_news}>Все новости</button>
    </section>
  );
}

export default MainNews;
