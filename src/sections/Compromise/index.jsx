import styles from './Compromise.module.css';

function Compromise() {
  return (
    <section className="section main-bg">
      <div className={`${styles['compromise-container']} flex-column wh-100`}>
        <h1>Compromisso com o nosso cliente</h1>
        <div className={styles['compromises']}>
          <div className={styles['compromises-content']}>
            <div className="flex-row w-100 gap-4">
              <i className="icon-checkmark i-p color-green"></i>
              <h1>Crédito fácil</h1>
            </div>
            <h2>Atendimento objetivo e com linguagem simples dos nossos consultores.</h2>
          </div>
          <div className={styles['compromises-content']}>
            <div className="flex-row w-100 gap-4">
              <i className="icon-user-tie i-p color-dark"></i>
              <h1>Consultoria online e personalizada</h1>
            </div>
            <h2>Equipe preparada para tirar todas as suas dúvidas, antes da contratação.</h2>
          </div>
          <div className={styles['compromises-content']}>
            <div className="flex-row w-100 gap-4">
              <i className="icon-spinner i-p color-yellow"></i>
              <h1>Liberação rápida</h1>
            </div>
            <h2>
              Após cadastro realizado, a liberação dos valores é rápida e normalmente no mesmo dia
              da contratação.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Compromise;
