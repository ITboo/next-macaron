import React from 'react';
import Container from '../Container';
import Link from 'next/link';
import styles from './subheader.module.css';
import Image from 'next/image';

const linksArray = [
      {
        title: 'Гарантия свежести',
        href: '/pages/quality-assurance'
      },
      {
        title: 'Доставка и оплата',
        href: '/delivery'
      },
      {
        title: 'Оптовые поставки',
        href: '/pages/wholesale'
      },
      {
        title: 'Контакты',
        href: '/contacts'
      }
];

const socialsArray = [
  {
    title: 'Telegram',
    href: '/',
    img: '/svg/telegram.svg'
  },
  {
    title: 'Vk',
    href: '/',
    img: '/svg/vk.svg'
  },
  {
    title: 'Odnoklassniki',
    href: '/',
    img: '/svg/odnoklassniki.svg'
  }
]

const Subheader = () => {
  return (
    <div className={styles.bg}>
      <Container>
        <div className={styles.subheader}>         
        <nav className={styles.nav}>
          <ul className={styles.menu}>
            {linksArray.map(link=>(
            <li className={styles.menu__item} key={link.title}>
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
          </ul>
        </nav>
        <div className={styles.rightside}>
          <div className={styles.location}>
            <Image src={'/svg/location.svg'} alt={'location'} width={24} height={24} />
            <span>Санкт-Петербург</span>
          </div>

          <a href='tel:+88123098288' className={styles.phone}>
            <Image src={'/svg/phone.svg'} alt={'phone img'} width={24} height={24} />
            <span>8 812 309-82-88</span>
          </a>

          <div className={styles.drawer}>
            <Image src={'/svg/drawer.svg'} alt={'drawer'} width={24} height={24} />
            <span>Корзина</span>
          </div>

        <div className={styles.socials}>
          {socialsArray.map(social=>(
            <Link href={social.href} className={styles.socials_link} key={social.title}>
            <Image src={social.img} alt={social.title} width={24} height={24} />
          </Link>
          ))}
        </div>          
        </div>          
        </div>
      </Container>
    </div>
  );
};

export default Subheader;
