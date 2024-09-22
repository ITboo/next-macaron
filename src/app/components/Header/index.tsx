import Link from 'next/link';

import Container from '../Container';

import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
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
      </Container>
    </header>
  );
};

export default Header;
