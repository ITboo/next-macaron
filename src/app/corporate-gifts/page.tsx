import styles from './corporate-gifts.module.css';

import Container from '@/app/components/Container';
import Breadcrumb from '../shared/ui/Breadcrumb';
// import Link from 'next/link';

const CorporateGifts = () => {
  return(
    <section className={styles['corporate-gifts']}>
      <Container>
        <Breadcrumb homeElement={'Главная'} separator={<span>&gt;</span>} translatedLink={'Корпоративные подарки'} />
        <div></div>
      </Container>
    </section>
  )
}

export default CorporateGifts;