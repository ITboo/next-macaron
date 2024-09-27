import styles from './page.module.css';
import Image from 'next/image';

import Container from '@/app/components/Container';

const Contacts = () => {
  return (
    <section>
      <div className={styles.contacts_wrapper}>
        <Container>
          <nav className={styles.breadcrumbs}>
            <a href='/'>Главная</a> &gt; <span className={styles.span_contacts}>Контакты</span>
          </nav>
          <div className={styles.contacts_container}>
            <div className={styles.image_contacts}>
              <Image src='/contacts_img.png' alt='Contacts' width={379} height={434} />
            </div>
            <div className={styles.contacts_content}>
              <h2 className={styles.contacts_title}>Контакты</h2>
              <div className={styles.contacts_info}>
                <h4 className={styles.subtitle}>Производство</h4>
                <div className={styles.info_text}>
                  Маршала Тухачевского, 22 
                  <span className={styles.timeText}>Время работы: с 8 до 19:30. </span>
                </div>
                <h4 className={styles.subtitle}>Пункты самовывоза:</h4>
                <div className={styles.info_text}>
                  <div className={styles.marginContainer}>
                    Кафе “Морошка”. Маршала Тухачевского, 22 
                    <span className={styles.timeText}>(с 8 до 19:30)</span>
                  </div>
                  Кафе “Мята”. Наб канала Грибоедова, 37 
                  <span className={styles.timeText}>(с 10 до 22)</span>
                </div>
                <h4 className={styles.subtitle}>Телефоны:</h4>
                <div className={styles.info_text}>
                  <div className={styles.marginContainer}>
                    <a
                      href='tel:+78123098288'
                      style={{ display: 'block', color: '#292929', textDecoration: 'none' }}
                    >
                      8 (812) 309-82-88 основной номер
                    </a>
                  </div>
                  <a
                    href='tel:+79818418525'
                    style={{ display: 'block', color: '#292929', textDecoration: 'none' }}
                  >
                    8 (981) 841-85-25 для жалоб и предложений
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Contacts;
