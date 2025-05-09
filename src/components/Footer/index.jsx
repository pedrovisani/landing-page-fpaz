import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles['footer']}>
      <p>
        Copyright © 2020-2025 C.E.F. DA PAZ SERVIÇOS FINANCEIROS. CNPJ: 38.112.423/0001-76. <br />{' '}
        Todos os direitos reservados.
      </p>
    </footer>
  );
}

export default Footer;
