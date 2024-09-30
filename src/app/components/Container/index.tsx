import React from 'react';
import styles from './container.module.css';

const Container = ({
  children
}: Readonly<{
  children?: React.ReactNode;
  className?: string
}>) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
