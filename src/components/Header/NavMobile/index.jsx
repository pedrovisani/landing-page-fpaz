import { Link } from 'react-router-dom';
import styles from '../Header.module.css';

function NavMobile({ showNavMobile, setShowNavMobile }) {
  if (showNavMobile === true) {
    return (
      <div className={styles['nav-options-mobile']}>
        <div onClick={() => setShowNavMobile(false)} className={styles['close-nav-mobile']}></div>
        <menu>
          <Link to="/">
            <li onClick={() => setShowNavMobile(false)} className={styles['menu-btn']}>
              <p>Início</p>
            </li>
          </Link>
          <Link to="/produtos">
            <li onClick={() => setShowNavMobile(false)} className={styles['menu-btn']}>
              <p>Produtos</p>
            </li>
          </Link>
          <Link to="/simulador">
            <li onClick={() => setShowNavMobile(false)} className={styles['menu-btn']}>
              <p>Simulador</p>
            </li>
          </Link>
          <Link to="/contato">
            <li onClick={() => setShowNavMobile(false)} className={styles['menu-btn']}>
              <p>Contato</p>
            </li>
          </Link>
        </menu>
      </div>
    );
  }
}

export default NavMobile;
