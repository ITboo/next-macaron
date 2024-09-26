import styles from './proposals.module.css';
import readySet from '../../../../public/svg/mainProposalsReadySet.svg';
import assembleSet from '../../../../public/svg/mainProposalsAssambleSet.svg';
import ProposalsItem from './ProposalsItem';
import corparative from '../../../../public/svg/mainProposalsCorparativeSet.svg';
import individual from '../../../../public/svg/mainProposalsIndividualSet.svg';
import optom from '../../../../public/svg/mainProposalsOptomSet.svg';
import weddings from '../../../../public/svg/mainProposalsWeddingSet.svg';
import { StaticImageData } from "next/image";

interface CardsProposales {
  id: number;
  title: string;
  text: string;
  image: StaticImageData;
  color: string;
}

const proposalsData: CardsProposales[] = [
  {
    id: 0,
    title: 'Готовые наборы',
    text: 'Готовые наборы со скидкой. Вы можете подобрать набор на подходящий случай.',
    image: readySet,
    color: 'rgba(255,219,195,1)'
  },
  {
    id: 1,
    title: 'Собрать свой набор',
    text: 'Выбрать количество макарун, и выбрать вкусы',
    image: assembleSet,
    color: 'rgba(255, 194, 204, 1)'
  },
  {
    id: 2,
    title: 'Набор с индивидуальной печатью',
    text: 'Собрать набор макарон с уникальным дизайном. ',
    image: individual,
    color: 'rgba(180, 234, 179, 1)'
  },
  {
    id: 3,
    title: 'Свадебные предложения',
    text: 'Нежные пирожные макаронс с разными вкусами для украшения вашего свадебного торжества',
    image: weddings,
    color: 'rgba(253, 213, 205, 1)'
  },
  {
    id: 4,
    title: 'Корпоративные подарки',
    text: 'От 85 руб за шт. С уникальным дизайном. Приятный комплимент для коллег и партнеров',
    image: corparative,
    color: 'rgba(168, 250, 223, 1)'
  },
  {
    id: 5,
    title: 'Оптовые поставки',
    text: 'Предложение для кофеен, кафе, отелей и т.д.Посмотрите условия сотрудничества и отзывы.',
    image: optom,
    color: 'rgba(196, 198, 236, 1)'
  }
];

function Proposals() {
  return (
    <section className={styles.proposals}>
      {proposalsData.map((proposal) => (
        <ProposalsItem key={proposal.id} {...proposal} />
      ))}
    </section>
  );
}

export default Proposals;
