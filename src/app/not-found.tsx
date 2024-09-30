import styles from './not-found/page.module.css';
import Image from 'next/image';

import Container from '@/app/components/Container';

const NotFound = () => {
  return (
    <section>
      <div className={styles.wrapper_not_found}>
        <Container>
          <p className={styles.text_not_found}>Извините, страница не найдена</p>
          <div className={styles.wrapper_error}>
            <div className={styles.error}>
              <div className={styles.images_cookies}>
                <Image src='/cookie.png' alt='sad cookie' width={321} height={321} />
              </div>
            </div>
            <button className={styles.back_button}>Назад</button>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default NotFound;