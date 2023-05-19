import React, { useEffect, useRef, useState } from 'react';
import LogoBlack from '../../../public/img/components/header/logo-black-aloha.svg';
import LogoLetter from '../../../public/img/components/header/logo-aloha-letter.svg';
import Link from 'next/link';
import styles from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera , faBars} from '@fortawesome/free-solid-svg-icons';
import { Collapse } from 'react-bootstrap';

const Header = () => {

  const headerRef = useRef(null);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const headerHeight = headerRef.current.offsetHeight;

    if (scrollPosition > headerHeight) {
      setIsHeaderFixed(true);
    } else {
      setIsHeaderFixed(false);
    }
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const headerClassName = isHeaderFixed ? `${styles.header} ${styles.fixed}` : styles.header;
  const logoImageUrl = isHeaderFixed ? '/img/components/header/logo-aloha-letter.svg' : '/img/components/header/logo-black-aloha.svg';

  return (
    <nav className={`${styles.navbar} ${headerClassName} navbar navbar-expand-lg`} ref={headerRef}>
      <div className={styles.container}>
        <Link href='#' className={styles.logo}>
          <img src={logoImageUrl} alt="Logo Aloha" />
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

        {/*Search*/}
        <div className={styles.search}>
          <form>
            <select name="" id="">
              <option value="">Todas</option>
              <option value="">Item 1</option>
              <option value="">Item 2</option>
              <option value="">Item 3</option>
            </select>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.66667 11.3333C9.24399 11.3333 11.3333 9.24399 11.3333 6.66667C11.3333 4.08934 9.24399 2 6.66667 2C4.08934 2 2 4.08934 2 6.66667C2 9.24399 4.08934 11.3333 6.66667 11.3333Z" stroke="#979797" strokeWidth="1.42857"/>
              <path d="M14 14L10 10" stroke="#979797" strokeWidth="1.42857"/>
            </svg>

            <input type="text" placeholder='Buscar imagenes' />
            <button>
              <FontAwesomeIcon icon={faCamera} />
            </button>
          </form>
        </div>
        {/* Menú #2 */}
        <div className={styles.menusecond}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Registrarme</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Iniciar sesión
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_69_1496)">
                  <path d="M11.3337 4.66699L4.66699 11.3337" stroke="#FF595A" strokeWidth="1.33333"/>
                  <path d="M5.33398 4.66699H11.334V10.667" stroke="#FF595A" strokeWidth="1.33333"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_69_1496">
                  <rect width="16" height="16" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.menuThree}>
          <div className={`${styles.searchIcon} d-lg-none d-md-none`}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.66667 11.3333C9.24399 11.3333 11.3333 9.24399 11.3333 6.66667C11.3333 4.08934 9.24399 2 6.66667 2C4.08934 2 2 4.08934 2 6.66667C2 9.24399 4.08934 11.3333 6.66667 11.3333Z" stroke="#979797" strokeWidth="1.42857"/>
                <path d="M14 14L10 10" stroke="#979797" strokeWidth="1.42857"/>
              </svg>
          </div>
          <button className={`${styles.menuButton} d-lg-none`} onClick={handleMenuToggle}>
          Menú<FontAwesomeIcon icon={faBars} />
          </button>
          <Collapse in={isMenuOpen}>
            <div className={`${styles.menu} d-lg-none`}>
              <ul>
                <li>Menu Item 1</li>
                <li>Menu Item 2</li>
                <li>Menu Item 3</li>
              </ul>
            </div>
          </Collapse>
        </div>
      </div>
    </nav>
  )
}

export default Header;