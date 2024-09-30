import styles from './page.module.css';

import Container from '@/app/components/Container';
import Breadcrumb from '../shared/ui/Breadcrumb';
import Typography from '../shared/ui/Typography';
import Tag from '../shared/ui/Tag';
import Preview from '../components/Preview';

const tags = [
  {
    id: 0,
    title: 'Все новости'
  },
  {
    id: 1,
    title: 'Обновление ассортимента'
  },
  {
    id: 2,
    title: 'Акции'
  },
  {
    id: 3,
    title: 'Конкурсы'
  }
];

const previews = [
  {
    id: 0,
    src: '/news/easter.jpg',
    date: '25.02.2023',
    title: 'Впереди свадьба?',
    description: 'Мы предлагаем несколько оригинальных и простых идей оформления. Гости точно запомнят'
  },
  {
    id: 1,
    src:'/news/wedding.jpg',
    date: '05.04.2023',
    title: 'Впереди праздник пасхи',
    description: 'Порадуйте своих близких вкусными пасхальными наборами макарон. Наша новая коллекция подарков уже в продаже'
  },
  {
    id: 2,
    src:'/news/womens-day.jpg',
    date: '25.02.2023',
    title: 'Скоро главный праздник весны!',
    description: 'Девушки любят, когда вкусно, красиво и натурально. Смотрите больше наборов с десертами ручной работы'
  }
];

const NotFound = () => {
  return (
    <section className={styles.bg}>
      <Container>
        <Breadcrumb homeElement={'Главная'} separator={'>'} translatedLink={'Новости'} />
        <Typography>Новости</Typography>
        <div className={styles.filter_container}>
          {tags.map((tag) => (
            <Tag key={tag.id}>{tag.title}</Tag>
          ))}
        </div>
        <div className={styles.news_container}>
          {previews.map((preview) => (
            <Preview
              imgSrc={preview.src}
              date={preview.date}
              title={preview.title}
              description={preview.description}
              key={preview.id}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default NotFound;
