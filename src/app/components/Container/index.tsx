import React from 'react';
import styles from './container.module.css';

const Container = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
