'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay, Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import styles from './carousel.module.css';
import { StaticImageData } from 'next/image';
import cacao from '../../../../public/svg/mainSliderCacao.svg';
import delivery from '../../../../public/svg/mainSliderDelivery.svg';
import free from '../../../../public/svg/mainSliderFree.svg';
import packing from '../../../../public/svg/mainSliderPacking.svg';
import CarouselItem from './CarouselItem';

interface ICarousel {
  id: number;
  image: StaticImageData;
  text: string;
}
const carouselData: ICarousel[] = [
  {
    id: 0,
    image: cacao,
    text: 'МИНДАЛЬНАЯ МУКА И НАТУРАЛЬНЫЕ ИНГРЕДИЕНТЫ'
  },
  {
    id: 1,
    image: delivery,
    text: 'ДОСТАВКА В ДЕНЬ ЗАКАЗА'
  },
  {
    id: 2,
    image: free,
    text: 'ВСЕГДА СВЕЖЕЕ'
  },
  {
    id: 3,
    image: packing,
    text: 'ОПТОВЫЕ ПОСТАВКИ ОТ ПРОИЗВОДИТЕЛЯ'
  }
];
SwiperCore.use([Autoplay]);
function Carousel() {
  return (
    <div className={styles.container}>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        loop={true}
        autoplay={{ delay: 3000 }}
        spaceBetween={0}
        slidesPerView={1}
        // navigation
      >
        {carouselData.map((item) => (
          <SwiperSlide key={item.id} className={styles.mySwiper}>
            <CarouselItem {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
