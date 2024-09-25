import Link from 'next/link';

import Container from '../Container';

import styles from './header.module.css';
import Logo from '@/app/shared/ui/Logo';
import Subheader from '../Subheader';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={styles.header}>
      <Subheader />
      <Container>
        <div className={styles.bg}>
          <ul className={styles.main_menu}>
            <li className={styles.menu__item}>
              <Link href='/'>СЛАДКИЕ ДНИ</Link>
              <Image src={'/svg/discount.svg'} alt={'discount'} height={24} width={24} />
            </li>
            <li className={styles.menu__item}>
              <Link href='/'>подарочные наборы</Link>
            </li>
            <li className={styles.menu__item}>
              <Link href='/'>Собрать набор</Link>
            </li>
            <li className={styles.menu__item}>
              <Logo />
            </li>
            <li className={styles.menu__item}>
              <Link href='/'>Создать дизайн</Link>
            </li>
            <li className={styles.menu__item}>
              <Link href='/'>КОМПАНИЯМ</Link>
            </li>
            <li className={styles.menu__item}>
              <Link href='/'>ВЕСЬ КАТАЛОГ</Link>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;
