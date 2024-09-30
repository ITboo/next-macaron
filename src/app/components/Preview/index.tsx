import Image from 'next/image';
import React from 'react';
import styles from './preview.module.css';
type PreviewProps = {
  href?: string;
  imgSrc: string;
  date?: string;
  title: string;
  description: string;
  children?: string;
};

const Preview = ({ imgSrc, date, title, description }: PreviewProps) => {
  return (
    <article className={styles.preview}>
      <Image src={imgSrc} alt={title} width={370} height={210} />
      <div className={styles.text}>
        <span className={styles.date}>{date}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
};

export default Preview;
