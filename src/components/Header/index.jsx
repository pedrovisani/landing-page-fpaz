import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import halfPartLogoOne from '../../assets/frames/half-part-logo-one.svg';
import halfPartLogoTwo from '../../assets/frames/half-part-logo-two.svg';

function Header() {
  return (
    <aside id="inicio" className={`${styles['menu']} flex-center-sp flex-row`}>
      <div className={`flex-row`}>
        <Link to="/">
          <div className={`${styles['logo-svg']} flex-center`}>
            <img className={styles['half-part-logo-one']} src={halfPartLogoOne} />
            <img className={styles['half-part-logo-two']} src={halfPartLogoTwo} />
          </div>
        </Link>

        <div className={`${styles['logo-name-container']} flex-column pr`}>
          <div className={`${styles['title-content']} pr`}>
            <h1 className={styles['logo-name']}>FPAZ</h1>
          </div>
          <div className={`${styles['subtitle-content']} pr`}>
            <h3 className={styles['logo-description']}>CONSÓRCIOS E SERVIÇOS FINANCEIROS</h3>
          </div>
        </div>
      </div>

      <nav className="nav flex-center">
        <menu className="flex-row gap-4">
          <Link to="/">
            <li className={styles['menu-btn']}>
              <p>Início</p>
            </li>
          </Link>
          <Link to="/produtos">
            <li className={styles['menu-btn']}>
              <p>Produtos</p>
            </li>
          </Link>
          <Link to="/simulador">
            <li className={styles['menu-btn']}>
              <p>Simulador</p>
            </li>
          </Link>
          <Link to="/contato">
            <li className={styles['menu-btn']}>
              <p>Contato</p>
            </li>
          </Link>
        </menu>
      </nav>
    </aside>
  );
}

export default Header;
