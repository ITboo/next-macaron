import styles from './proposals.module.css';
import Image, { StaticImageData } from 'next/image';
import arrow from '../../../../public/svg/arrowBlackRight.svg';
type ProposalsItemProps = {
  id: number;
  title: string;
  text: string;
  image: StaticImageData;
  color: string;
};

function ProposalsItem({ id, title, text, image, color }: ProposalsItemProps) {
  const rotationClass =
    id % 6 === 1 || id === 5
      ? styles.horizontal
      : id % 6 === 2
        ? styles.vertical
        : id % 6 === 3
          ? styles.both
          : styles.diagonal;

  return (
    <div
      className={`${styles.proposals_item} ${rotationClass} `}
      style={{ backgroundColor: color }}
    >
      <Image src={image} alt={title} width={100} height={100} className={styles.image} />
      <div className={styles.title}>
        <h4>{title}</h4>
        <Image src={arrow} alt={`go to ${title}`} width={16} height={10} />
      </div>
      <div className={styles.text}>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default ProposalsItem;
