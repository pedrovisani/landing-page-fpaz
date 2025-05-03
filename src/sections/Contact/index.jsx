import styles from './Contact.module.css';

function Contact() {
  return (
    <section id="contato" className="section main-bg">
      <div className={`${styles['contact-container']} flex-center wh-100`}>
        <form name="contact" className={styles['contact-form']} method="POST" netlify>
          <fieldset className={styles['fields-form']}>
            <legend className={styles['legend-form']}>ENTRE EM CONTATO CONOSCO</legend>
            <label htmlFor="nome">Nome</label>
            <input
              className={styles['input-form']}
              placeholder="Fernando Carvalho"
              type="text"
              name="nome"
              required
            />
            <label htmlFor="email">E-mail</label>
            <input
              className={styles['input-form']}
              placeholder="email@email.com"
              type="email"
              name="email"
              required
            />
            <label htmlFor="celular">Celular</label>
            <input
              className={styles['input-form']}
              placeholder="(XX) XXXXX-XXXX"
              type="tel"
              name="celular"
              required
            />
            <label htmlFor="solicitacao">Escreva no campo abaixo</label>
            <textarea
              className={styles['text-area-form']}
              placeholder="Olá! Gostaria de simular a contratação de um financiamento!"
              name="solicitacao"
              required
            ></textarea>
          </fieldset>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
