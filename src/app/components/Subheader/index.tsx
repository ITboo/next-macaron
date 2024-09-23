import React from 'react';
import Container from '../Container';
import Link from 'next/link';
import styles from './subheader.module.css';
import Image from 'next/image';

const Subheader = () => {
  return (
    <div className={styles.bg}>
      <Container>
        <nav className={styles.nav}>
          <ul className={styles.menu}>
            <li className={styles.menu__item}>
              <Link href='/pages/quality-assurance'>Гарантия свежести</Link>
            </li>
            <li className={styles.menu__item}>
              <Link href='/pages/delivery'>Доставка и оплата</Link>
            </li>
            <li className={styles.menu__item}>
              <Link href='/pages/wholesale'>Оптовые поставки</Link>
            </li>
            <li className={styles.menu__item}>
              <Link href='/pages/contacts'>Контакты</Link>
            </li>
          </ul>
        </nav>
        <div className="">
            <div className="">
 
                <Image src={'/svg/location.svg'} alt={'location'} width={24} height={24}/>
                <span>Санкт-Петербург</span>
            </div>
        </div>
      </Container>
    </div>
  );
};

export default Subheader;
