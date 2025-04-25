import styles from "./Products.module.css";

function Products() {
  return (
    <section id="produtos" className="section main-bg">
      <div className={`${styles["products-container"]} flex-center wh-100`}>
        <div class={`${styles.products} gap-20 pr`}>
          <div className={styles["products-content"]}>
            <div className="flex-row gap-12">
              <i className="icon-coin i color-yellow"></i>
              <p className={styles["product-title"]}>CRÉDITO CONSIGNADO</p>
            </div>
            <p className={styles["product-description"]}>
              Crédito rápido e descomplicado, para aposentados, pensionistas e
              servidores públicos
            </p>
          </div>
          <div className={styles["products-content"]}>
            <div className="flex-row gap-12">
              <i className="icon-coin i color-yellow"></i>
              <p className={styles["product-title"]}>CRÉDITO PESSOAL</p>
            </div>
            <p className={styles["product-description"]}>
              Crédito com garantia de imóvel ou automóvel, ou crédito para
              correntistas de bancos específicos
            </p>
          </div>
          <div className={styles["products-content"]}>
            <div className="flex-row gap-12">
              <i className="icon-coin i color-yellow"></i>
              <p className={styles["product-title"]}>ANTECIPAÇÃO DO FGTS</p>
            </div>
            <p className={styles["product-description"]}>
              Permite o saque do saldo do FGTS de forma ágil, com adesão 100%
              online. Ou seja, dinheiro rápido e sem comprometer a renda mensal
            </p>
          </div>
          <div className={styles["products-content"]}>
            <div className="flex-row gap-12">
              <i className="icon-office i color-gray"></i>
              <p className={styles["product-title"]}>
                FINANCIAMENTO
              </p>
            </div>
            <p className={styles["product-description"]}>
              Destinado a aposentados e pensionistas do INSS e servidores
              públicos. Funciona como um cartão de crédito normal, mas com a
              vantagem de taxas de juros mais baixas e a facilidade do desconto
              automático diretamente da folha de pagamento ou benefício
            </p>
          </div>
          <div className={styles["products-content"]}>
            <div className="flex-row gap-12">
              <i className="icon-profile i color-dark"></i>
              <p className={styles["product-title"]}>CONSÓRCIOS</p>
            </div>
            <p className={styles["product-description"]}>
              Aquisição de bens como carros, imóveis ou serviços, sem juros, por
              meio de sorteios ou lances em grupos. Também, é possível adquirir
              cotas contempladas
            </p>
          </div>
          <div className={styles["products-content"]}>
            <div className="flex-row gap-12">
              <i className="icon-card i color-green"></i>
              <p className={styles["product-title"]}>
                CARTÃO DE CRÉDITO CONSIGNADO
              </p>
            </div>
            <p className={styles["product-description"]}>
              Destinado a aposentados e pensionistas do INSS e servidores
              públicos. Funciona como um cartão de crédito normal, mas com a
              vantagem de taxas de juros mais baixas e a facilidade do desconto
              automático diretamente da folha de pagamento ou benefício
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
