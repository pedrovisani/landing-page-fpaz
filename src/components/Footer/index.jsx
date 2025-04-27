import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={`${styles['footer']} flex-center`}>
      <p>Copyright © 2020-2025 C.E.F. DA PAZ SERVIÇOS FINANCEIROS</p>
    </footer>
  );
}

export default Footer;
