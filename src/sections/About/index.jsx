import styles from './About.module.css';

function About() {
  return (
    <section id="sobre" className="section worker-bg">
      <div className={`${styles['about-container']} flex-column wh-100`}>
        <div className="flex-start-center flex-column gap-32">
          <h1 className="h-100">
            FAZ <strong>COM</strong> A <strong>FPAZ</strong>
          </h1>
          <p className="h-100">
            Há mais de 13 anos no mercado, atendendo com excelência e de forma personalizada a todo
            o norte/nordeste e com parcerias em todo Brasil, oferecemos soluções criativas e
            flexíveis as mais diversas demandas de ações promocionais e eventos corporativos,
            aproximando as marcas dos nossos clientes ao seu público alvo, pois acreditamos que
            podemos transformar as ideias em experiências únicas e encantadoras <br />
            <br />
            <br />
            Aqui, na FPAZ, você conta com uma área de Planejamento estratégico promocional, de
            Comunicação e eventos corporativos. Um pool de ideias criativas para oferecer a melhor
            solução, a melhor ação promocional e o melhor evento, para sua marca e para sua empresa.
          </p>
        </div>
        <div className={styles['value']}>
          <h1>Nosso compromisso com o cliente</h1>
          <div className={styles['value-container']}>
            <div className="flex-start-center h-100">
              <div className={`${styles['value-content']} ${styles['invert-move-two']}`}>
                <h1>
                  Atendimento objetivo e com linguagem <br />
                  simples
                </h1>
              </div>
            </div>
            <div className="flex-end-center h-100">
              <div
                className={`${styles['value-content']} ${styles['invert-move-one']} bg-primary-one text-light`}
              >
                <h1>Transparência nas informações</h1>
              </div>
            </div>{' '}
            <div className="flex-start-center h-100">
              <div className={`${styles['value-content']} ${styles['invert-move-two']}`}>
                <h1>Consultoria personalizada</h1>
              </div>
            </div>{' '}
            <div className="flex-end-center h-100">
              <div
                className={`${styles['value-content']} ${styles['invert-move-one']} bg-primary-two text-light`}
              >
                <h1>Produtos de qualidade</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
