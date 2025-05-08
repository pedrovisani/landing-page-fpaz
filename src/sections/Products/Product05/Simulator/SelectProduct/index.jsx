import { useState } from 'react';
import styles from '../Simulator.module.css';

function SelectProduct({ product, setProduct }) {
  const [showTabProducts, setShowTabProducts] = useState(false);

  if (showTabProducts === false) {
    return (
      <div onClick={() => setShowTabProducts(true)} className="select-product">
        {' '}
        <div className={styles['select-product-label']}>{product.name}</div>
        <div className={`${styles['change-product']} flex-center icon-arrow-down`}></div>
      </div>
    );
  } else {
    return (
      <div className="pr">
        <div onClick={() => setShowTabProducts(false)} className="select-product">
          <div className={styles['select-product-label']}>{product.name}</div>
          <div className={`${styles['change-product']} flex-center icon-arrow-up`}></div>
        </div>
        <div className={`${styles['list-product']} light-bg`}>
          <div
            onClick={() => {
              setProduct({ id: 0, name: 'Consórcio de imóvel' });
              setShowTabProducts(false);
            }}
            className={styles['item']}
          >
            Consórcio de imóvel
          </div>
          <div
            onClick={() => {
              setProduct({ id: 1, name: 'Consórcio de automóvel' });
              setShowTabProducts(false);
            }}
            className={styles['item']}
          >
            Consórcio de automóvel
          </div>
        </div>
      </div>
    );
  }
}

export default SelectProduct;
