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
              setProduct({ id: 0, name: 'Crédito consignado' });
              setShowTabProducts(false);
            }}
            className={styles['item']}
          >
            Crédito consignado
          </div>
          <div
            onClick={() => {
              setProduct({ id: 1, name: 'Crédito com garantia de imóvel' });
              setShowTabProducts(false);
            }}
            className={styles['item']}
          >
            Crédito com garantia de imóvel
          </div>
          <div
            onClick={() => {
              setProduct({ id: 2, name: 'Crédito com garantia de automóvel' });
              setShowTabProducts(false);
            }}
            className={styles['item']}
          >
            Crédito com garantia de automóvel
          </div>
          <div
            onClick={() => {
              setProduct({ id: 3, name: 'Financiamento' });
              setShowTabProducts(false);
            }}
            className={styles['item']}
          >
            Financiamento
          </div>
          <div
            onClick={() => {
              setProduct({ id: 4, name: 'Cartão de crédito consignado' });
              setShowTabProducts(false);
            }}
            className={styles['item']}
          >
            Cartão de crédito consignado
          </div>
        </div>
      </div>
    );
  }
}

export default SelectProduct;
