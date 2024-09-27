import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

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
              <p className={styles.contacts_info}>
              <b>Производство</b>
              <br />
              <br />
              Маршала Тухачевского, 22
              <br />
              Время работы: с 8 до 19:30.
              <br />
              <br />
              <b>Пункты самовывоза:</b>
              <br />
              <br />
              Кафе “Морошка”. Маршала Тухачевского, 22 
              (с 8 до 19:30)
              <br />
              <br />
              Кафе “Мята”. Наб канала Грибоедова, 37
              (с 10 до 22)
              <br />
              <br />
              <b>Телефоны:</b>
              <br />
              <br />
              <a href="tel:+78123098288" style={{ color: '#292929', textDecoration: 'none' }}>
              8 (812) 309-82-88 основной номер
              </a>
              <br />
              <br />
              <a href="tel:+79818418525" style={{ color: '#292929', textDecoration: 'none' }}>
              8 (981) 841-85-25 для жалоб и предложений
              </a>
              </p>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Contacts;
