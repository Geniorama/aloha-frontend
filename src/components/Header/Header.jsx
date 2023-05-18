import LogoBlack from '../../../public/img/components/header/logo-black-aloha.svg';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
  return (
    <nav className={`${styles.navbar} navbar navbar-expand-lg`}>
      <div className="container">
        <Link href='#'>
          <Image src={LogoBlack} alt="Logo Aloha Black"/>
        </Link>
       {/* Menú #1 */}
       <div className={styles.menufirst}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Imagenes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Videos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Editorial</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Música & SFX</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Planes</a>
            </li>
          </ul>
        </div>

        {/* Menú #2 */}
        <div className={styles.menusecond}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Registrarme</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Iniciar sesión</a>
            </li>
          </ul>
        </div>


      </div>
    </nav>
  )
}

export default Header;