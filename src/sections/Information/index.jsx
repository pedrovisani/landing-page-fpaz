import styles from './Information.module.css';

function Information() {
  return (
    <section id="sobre" className="section main-bg">
      <div className={`${styles['information-container']} flex-column wh-100`}>
        <h1 className={styles['information-container-title']}>COMPROMISSO COM O NOSSO CLIENTE</h1>
        <div className={styles['information']}>
          <div className="information-content flex-column">
            <div className="flex-row w-100 gap-4">
              <i className="icon-checkmark i-p color-green"></i>
              <h1 className="w-fit">Crédito fácil</h1>
            </div>
            <h2>Atendimento objetivo e com linguagem simples dos nossos consultores.</h2>
          </div>
          <div className="information-content flex-column">
            <div className="flex-row w-100 gap-4">
              <i className="icon-user-tie i-p"></i>
              <h1 className="w-fit">Consultoria online e personalizada</h1>
            </div>
            <h2>Equipe preparada para tirar todas as suas dúvidas, antes da contratação.</h2>
          </div>
          <div className="information-content flex-column">
            <div className="flex-row w-100 gap-4">
              <i className="icon-spinner i-p color-yellow"></i>
              <h1 className="w-fit">Liberação rápida</h1>
            </div>
            <h2>
              Após cadastro realizado, a liberação dos valores é rápida e normalmente no mesmo dia
              da contratação.
            </h2>
          </div>
        </div>
        <div className={styles['steps']}>
          <h1>Passo a passo para a contratação</h1>
          <div className={styles['steps-container']}>
            <div className="steps-content">
              <h1>1. Fale com um consultor</h1>
              <h2>
                Informe seus dados e de quanto precisa, nosso consultor irá fazer uma análise.
              </h2>
            </div>
            <div className="steps-content">
              <h1>2. Receba sua simulação</h1>
              <h2>Receba sua simulação com os valores das parcelas e prazo para pagar.</h2>
            </div>
            <div className="steps-content">
              <h1>3. Analise a proposta</h1>
              <h2>Após você analisar a proposta, seguimos para a formalização do contrato.</h2>
            </div>
            <div className="steps-content">
              <h1>4. Finalize e receba seu dinheiro</h1>
              <h2>Com todos os documentos aprovados, seu dinheiro será liberado na sua conta.</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Information;
