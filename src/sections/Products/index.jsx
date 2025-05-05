import { useState } from 'react';
import { Link } from 'react-router-dom';
import Product01 from './Product01';
import Product02 from './Product02';
import Product03 from './Product03';
import Product04 from './Product04';
import Product05 from './Product05';
import Product06 from './Product06';
import styles from './Products.module.css';

function Products() {
  const [productTab, setProductTab] = useState('');

  if (productTab == '') {
    return (
      <section id="produtos" className="section main-bg">
        <div className={`${styles['products-container']} flex-center wh-100`}>
          <div className={`${styles['products']} wh-100 pr`}>
            <div className="products-content">
              <div className="flex-row gap-12">
                <i className="icon-coin i-g color-yellow"></i>
                <p className={styles['product-title']}>CRÉDITO CONSIGNADO</p>
              </div>
              <p className={styles['product-description']}>
                Crédito rápido e descomplicado, para aposentados, pensionistas e servidores públicos
              </p>
              <Link to="/produtos">
                <button onClick={() => setProductTab('product-01')}>Saiba mais</button>
              </Link>
            </div>
            <div className="products-content">
              <div className="flex-row gap-12">
                <i className="icon-coin i-g color-yellow"></i>
                <p className={styles['product-title']}>CRÉDITO PESSOAL</p>
              </div>
              <p className={styles['product-description']}>
                Crédito com garantia de imóvel ou automóvel, ou crédito para correntistas de bancos
                específicos
              </p>
              <Link to="/produtos">
                <button onClick={() => setProductTab('product-02')}>Saiba mais</button>
              </Link>
            </div>
            <div className="products-content">
              <div className="flex-row gap-12">
                <i className="icon-coin i-g color-yellow"></i>
                <p className={styles['product-title']}>ANTECIPAÇÃO DO SAQUE FGTS</p>
              </div>
              <p className={styles['product-description']}>
                Permite o saque do saldo do FGTS de forma ágil, com adesão 100% online. Ou seja,
                dinheiro rápido e sem comprometer a renda mensal
              </p>
              <Link to="/produtos">
                <button onClick={() => setProductTab('product-03')}>Saiba mais</button>
              </Link>
            </div>
            <div className="products-content">
              <div className="flex-row gap-12">
                <i className="icon-office i-g color-gray"></i>
                <p className={styles['product-title']}>FINANCIAMENTO</p>
              </div>
              <p className={styles['product-description']}>
                Financiamento de veículos, imóveis e maquinário agrícola, para quem deseja realizar
                projetos de forma planejada, com taxas competitivas, prazos flexíveis e condições
                que cabem no bolso.
              </p>
              <Link to="/produtos">
                <button onClick={() => setProductTab('product-04')}>Saiba mais</button>
              </Link>
            </div>
            <div className="products-content">
              <div className="flex-row gap-12">
                <i className="icon-profile i-g color-dark"></i>
                <p className={styles['product-title']}>CONSÓRCIOS</p>
              </div>
              <p className={styles['product-description']}>
                Aquisição de bens como carros, imóveis ou serviços, sem juros, por meio de sorteios
                ou lances em grupos. Também, é possível negociar cotas com acréscimo de ágio.
              </p>
              <Link to="/produtos">
                <button onClick={() => setProductTab('product-05')}>Saiba mais</button>
              </Link>
            </div>
            <div className="products-content">
              <div className="flex-row gap-12">
                <i className="icon-card i-g color-green"></i>
                <p className={styles['product-title']}>CARTÃO DE CRÉDITO CONSIGNADO</p>
              </div>
              <p className={styles['product-description']}>
                Destinado a aposentados, pensionistas e servidores públicos. Vantagem de taxas de
                juros mais baixas e a facilidade do desconto automático diretamente da folha de
                pagamento ou benefício
              </p>
              <Link to="/produtos">
                <button onClick={() => setProductTab('product-06')}>Saiba mais</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  } else if (productTab == 'product-01') {
    return (
      <section id="produtos" className="section main-bg">
        <div className={`${styles['products-container']} wh-100`}>
          <Product01 setProductTab={setProductTab} />
        </div>
      </section>
    );
  } else if (productTab == 'product-02') {
    return (
      <section id="produtos" className="section main-bg">
        <div className={`${styles['products-container']} wh-100`}>
          <Product02 setProductTab={setProductTab} />
        </div>
      </section>
    );
  } else if (productTab == 'product-03') {
    return (
      <section id="produtos" className="section main-bg">
        <div className={`${styles['products-container']} wh-100`}>
          <Product03 setProductTab={setProductTab} />
        </div>
      </section>
    );
  } else if (productTab == 'product-04') {
    return (
      <section id="produtos" className="section main-bg">
        <div className={`${styles['products-container']} wh-100`}>
          <Product04 setProductTab={setProductTab} />
        </div>
      </section>
    );
  } else if (productTab == 'product-05') {
    return (
      <section id="produtos" className="section main-bg">
        <div className={`${styles['products-container']} wh-100`}>
          <Product05 setProductTab={setProductTab} />
        </div>
      </section>
    );
  } else if (productTab == 'product-06') {
    return (
      <section id="produtos" className="section main-bg">
        <div className={`${styles['products-container']} wh-100`}>
          <Product06 setProductTab={setProductTab} />
        </div>
      </section>
    );
  }
}

export default Products;
