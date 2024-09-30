import React from 'react';
import styles from './typography.module.css'
type TypographyProps = {
  children: React.ReactNode;
};
const Typography = ({ children }: TypographyProps) => {
  return <h2 className={styles.heading}>{children}</h2>;
};

export default Typography;
