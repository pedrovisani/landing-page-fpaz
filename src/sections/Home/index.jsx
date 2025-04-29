import styles from './Home.module.css';

function Home() {
  return (
    <section id="inicio" className={`${styles['home-section']} main-bg`}>
      <div className={`${styles['home-container']} flex-center-sp flex-row wh-100 pr`}>
        <div className="wh-100 pr">
          <img className="wh-100 pa" />
        </div>
        <div className={`${styles['home-content']} flex-center-start flex-column h-100 gap-24`}>
          <div>
            <p className={styles['home-title']}>Crédito</p>
            <p className={styles['home-title']}>confiável para</p>
            <p className={styles['home-title']}>transformar</p>
            <p className={styles['home-title']}>seus sonhos</p>
            <p className={styles['home-title']}>em realidade</p>
          </div>
          <p className={styles['home-subtitle']}>
            Soluções de crédito flexíveis e personalizadas para você!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
