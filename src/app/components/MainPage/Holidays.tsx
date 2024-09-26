import styles from './holidays.module.css';
import { StaticImageData } from 'next/image';
import imageGreen from '../../../../public/mainHolidaysGreen.png';
import imageRed from '../../../../public/mainHolidaysRed.png';
import imageYellow from '../../../../public/mainHolidaysYellow.png';
import HolidaysItem from './HolidaysItem';

interface CardsHolidays {
  id: number;
  text: string;
  image: StaticImageData;
}
const holidaysData: CardsHolidays[] = [
  {
    id: 0,
    text: 'Скоро День рождения близкого человека',
    image: imageYellow
  },
  {
    id: 1,
    text: '1 января Новый Год 2021',
    image: imageGreen
  },
  {
    id: 2,
    text: '14 февраля День Святого Валентина',
    image: imageRed
  },
  {
    id: 3,
    text: '23 февраля День Защитника Отечества',
    image: imageYellow
  },
  {
    id: 4,
    text: '8 марта Международный Женский День',
    image: imageGreen
  },
  {
    id: 5,
    text: '9 марта День Сурка',
    image: imageRed
  }
];

function Holidays() {
  return (
    <section className={styles.holidays}>
      <h3 className={styles.title}>Ближайшие праздники</h3>
      <div className={styles.holidays_container}>
        {holidaysData.map((holiday) => (
          <HolidaysItem key={holiday.id} {...holiday} />
        ))}
        <div className={styles.dotted}></div>
      </div>
    </section>
  );
}

export default Holidays;
