import styles from './footer.module.css';

import Container from '../Container';
import Image from 'next/image';
import Link from 'next/link';

const info = [
  {
    id: 0,
    img: '/svg/heart.svg',
    title: 'Готовим вручную и с любовью'
  },
  {
    id: 1,
    img: '/svg/delivery.svg',
    title: 'Доставим в день заказа'
  },
  {
    id: 2,
    img: '/svg/natural_ingredients.svg',
    title: '100% миндальная мука и натуральные ингредиенты'
  }
];

const linksArray = [
  {
    title: 'ИНФОРМАЦИЯ',
    links: [
      {
        title: 'О компании',
        href: '/'
      },
      {
        title: 'Гарантии вкуса и свежести',
        href: '/'
      },
      {
        title: 'Доставка и оплата',
        href: '/'
      },
      {
        title: 'Контакты',
        href: '/'
      }
    ]
  },
  {
    title: 'КАТАЛОГ',
    links: [
      {
        title: 'Каталог десертов',
        href: '/'
      },
      {
        title: 'Готовые наборы',
        href: '/'
      },
      {
        title: 'Собрать свой набор',
        href: '/'
      },
      {
        title: 'Акции',
        href: '/'
      }
    ]
  },
  {
    title: 'ДЛЯ БИЗНЕСА',
    links: [
      {
        title: 'Корпоративные подарки',
        href: '/'
      },
      {
        title: 'Для юридических лиц',
        href: '/'
      },
      {
        title: 'Оптовикам',
        href: '/'
      }
    ]
  }
];

const socialsArray = [
  {
    title: 'Instagram',
    href: '/',
    img: '/svg/instagram.svg'
  },
  {
    title: 'Facebook',
    href: '/',
    img: '/svg/facebook.svg'
  },
  {
    title: 'Vk',
    href: '/',
    img: '/svg/vk_.svg'
  }
];

const Footer = () => {
  return (
    <footer className={styles.bg}>
      <Container>
        <div className={styles.footer}>
          <div className={styles.info_wrapper}>
            <div className={styles.info_container}>
              {info.map((item) => (
                <div className={styles.info_item} key={item.id}>
                  <Image src={item.img} alt={item.title} width={45} height={40} />
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
            <p className={styles.info_text}>
              © 2021 Макароншоп<br/> 
              ООО &ldquo;Квантум&rdquo;, Санкт-Петербург, улица Маршала Тухачевского, дом 22
            </p>
          </div>
          <div className={styles.nav_wrapper}>
            {linksArray.map((link) => (
              <div className={styles.nav_container} key={link.title}>
                <h2 className={styles.link_title}>{link.title}</h2>
                <div className={styles.nav_links}>
                  {link.links.map((item) => (
                    <Link href={item.href} key={item.title}>{item.title}</Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.contact_us}>
            <div className={styles.phone_time}>
              <a href='tel:+78123098288' className={styles.phone}>
                +7 (812) 309 82 88
              </a>
              <p>с 9:00 до 21:00</p>
            </div>

            <div className={styles.socials}>
              {socialsArray.map((social) => (
                <Link href={social.href} key={social.title}>
                  <Image src={social.img} alt={social.title} width={40} height={40} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
