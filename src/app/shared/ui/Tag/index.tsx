import React from 'react';
import styles from "./tag.module.css"
type TagProps = {
  children: React.ReactNode;
};
const Tag = ({ children }: TagProps) => {
  return <div className={styles.tag}>{children}</div>;
};

export default Tag;
