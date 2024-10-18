import styles from './brands.module.css';

const brands = [
  {
    className: 'metro',
    id: 0
  },
  {
    className: 'zenit',
    id: 1
  },
  {
    className: 'mvideo',
    id: 2
  },
  {
    className: 'gazprom',
    id: 3
  },
  {
    className: 'zarina',
    id: 4
  }
];


const Brands = () => {
  return (
    <>
      <div className={styles['brands']}>
        {brands.map((brand) => (
          <div
            key={brand.id}
            className={[styles.brand, styles[brand.className]].join(' ')}
          ></div>
        ))}
      </div>
      <div className={styles['pagination']}>
        <div className={[styles['pagination__element'], styles['_current']].join(' ')}></div>
        <div className={styles['pagination__element']}></div>
        <div className={styles['pagination__element']}></div>
      </div>
    </>
  )
}

export default Brands;