import Image from 'next/image';
import React from 'react';
import styles from './preview.module.css';
import Link from 'next/link';
type PreviewProps = {
  href?: string;
  src: string;
  date?: string;
  title: string;
  description: string;
  children?: string;
};

const Preview = ({ news }: PreviewProps) => {
  return (
    <Link href={''}>
    <article className={styles.preview}>
      <Image src={news.src} alt={news.title} width={370} height={210} />
      <div className={styles.text}>
        <span className={styles.date}>{news.date}</span>
        <h3 className={styles.title}>{news.title}</h3>
        <p className={styles.description}>{news.description}</p>
      </div>
    </article>
    </Link>
  );
};

export default Preview;
