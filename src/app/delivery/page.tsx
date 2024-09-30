import Image from 'next/image';
import styles from './page.module.css';

import Container from '@/app/components/Container';
import Breadcrumb from '@/app/shared/ui/Breadcrumb';

const Delivery = () => {
  return (
    <section>
      <div className={styles.bg}>
        <Container>
          <Breadcrumb homeElement={'Главная'} separator={'>'} translatedLink={'Доставка и оплата'} />
          <div className={styles.delivery_wrapper}>
            <Image src='/bike.png' alt='bike' width={476} height={330} />
            <div className={styles.delivery_info}>
              <h2 className={styles.delivery_title}>Доставка и оплата</h2>
              <p className={styles.delivery_description}>
                Для наших покупателей доступны 2 способа доставки:
                <span className={styles.accent}> курьерская доставка</span> по Санкт-Петербургу в
                пределах КАД и <span className={styles.accent}>самовывоз</span>.
              </p>
              <h3 className={styles.subtitle}>Курьерская доставка:</h3>
              <div className={styles.text}>
                <p>
                  Курьеры работают каждый день с 11 до 21 часа. Доставка макарон осуществляется
                  только по Санкт-Петербургу в пределах кольцевой автомобильной дороги (КАД). Точная
                  зона доставки.
                </p>
                <p>
                  Если Вы готовы принять заказ в интервале с 12 до 17 часов или с 17 до 21 часа, то
                  доставка будет стоить 300 рублей
                </p>
                <p>При заказе от 3000 рублей доставка БЕСПЛАТНАЯ.</p>
                <p>
                  При оформлении заказа до 15 часов возможна доставка в тот же день в промежутке с
                  17 до 21 часа. Курьер предупредит Вас о своём прибытии за 30-40 минут.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className={styles.delivery_wrapper}>
          <div className={styles.delivery_info}>
            <h3 className={styles.subtitle}>Самовывоз</h3>
            <div className={styles.text}>
              <p>
                Вы можете сделать заказ и забрать его самостоятельно с нашего производства по
                адресу: ул. Маршала Тухачевского 22 БЦ &ldquo;Сова&rdquo;
              </p>
              <p>
                Заказ необходимо сделать до 20 часов, чтобы забрать его на следующий день в пункте
                самовывоза в любое удобное время в промежутке с 13 до 22 часов.
              </p>
              <p>
                Оплатить заказ банковской картой можно заранее при оформлении. Непосредственно при
                получении банковской картой расплатиться нельзя.
              </p>
            </div>

            <h3 className={styles.subtitle}>Оплата</h3>
            <div className={styles.text}>
              <p>
                Вы можете оплатить заказ при получении наличными или заранее оплатить заказ
                банковской картой. Для этого укажите выбранный способ при оформлении заказа.
              </p>
              <p>
                Оплата банковской картой удобна, если вы хотите отправить десерты в подарок или не
                желаете возиться с наличными при получении заказа.
              </p>
              <p>
                Если у Вас нет карты российского банка, мы можем принять оплату через платёжную
                систему PayPal.
              </p>
            </div>
          </div>
          <Image src='/location.png' alt='location' width={320} height={370} />
        </div>
      </Container>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.3658737490505!2d30.414789117901982!3d59.97202886880766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46963239d73e0061%3A0xc0f40dd3d0c4a369!2sSova!5e0!3m2!1sen!2sby!4v1727376347975!5m2!1sen!2sby'
        width='600'
        height='450'
        className={styles.map}
        allowFullScreen={true}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </section>
  );
};

export default Delivery;
