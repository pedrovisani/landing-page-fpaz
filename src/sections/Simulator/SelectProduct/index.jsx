import { useState } from 'react';
import styles from '../Simulator.module.css';

function SelectProduct({ productName, setProductName }) {
  const [showTabProducts, setShowTabProducts] = useState(false);

  if (showTabProducts === false) {
    return (
      <div onClick={() => setShowTabProducts(true)} className="select-product">
        {' '}
        <div className={styles['select-product-label']}>{productName}</div>
        <div className={`${styles['change-product']} flex-center icon-arrow-down`}></div>
      </div>
    );
  } else {
    return (
      <div className="pr">
        <div onClick={() => setShowTabProducts(false)} className="select-product">
          <div className={styles['select-product-label']}>{productName}</div>
          <div className={`${styles['change-product']} flex-center icon-arrow-up`}></div>
        </div>
        <div className={`${styles['list-product']} light-bg`}>
          <div
            onClick={() => {
              setProductName('Crédito consignado');
              setShowTabProducts(false);
            }}
            className={styles['item']}
          >
            Crédito consignado
          </div>
          <div
            onClick={() => {
              setProductName('Crédito com garantia de imóvel');
              setShowTabProducts(false);
            }}
            className={styles['item']}
          >
            Crédito com garantia de imóvel
          </div>
          <div
            onClick={() => {
              setProductName('Crédito com garantia de automóvel');
              setShowTabProducts(false);
            }}
            className={styles['item']}
          >
            Crédito com garantia de automóvel
          </div>
          <div
            onClick={() => {
              setProductName('Financiamento');
              setShowTabProducts(false);
            }}
            className={styles['item']}
          >
            Financiamento
          </div>
          <div
            onClick={() => {
              setProductName('Cartão de crédito consignado');
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
