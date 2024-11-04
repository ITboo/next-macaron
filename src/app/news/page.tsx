import styles from './page.module.css';

import Container from '@/app/components/Container';
import Breadcrumb from '../shared/ui/Breadcrumb';
import Typography from '../shared/ui/Typography';
import Tag from '../shared/ui/Tag';

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
          
        </div>
      </Container>
    </section>
  );
};

export default NotFound;
