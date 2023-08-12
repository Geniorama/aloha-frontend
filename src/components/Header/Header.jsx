import React, { useEffect, useRef, useState } from "react";
import LogoBlack from "../../../public/img/components/header/logo-black-aloha.svg";
import Link from "next/link";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faBars } from "@fortawesome/free-solid-svg-icons";
import { Collapse } from "react-bootstrap";
import Image from "next/image";
import SearchBar from "../SearchBar/SearchBar";
import LogoLetter from '../../../public/img/components/header/logo-aloha-letter.svg';
import menuData from './menuData.json';
import ButtonLink from "../ButtonLink/ButtonLink";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const headerRef = useRef(null);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [indiceSubMenuAbierto, setIndiceSubMenuAbierto] = useState(null);


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
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
    setIndiceSubMenuAbierto(!indiceSubMenuAbierto);
  };

  const headerClassName = isHeaderFixed
    ? `${styles.header} ${styles.fixed}`
    : styles.header;

  return (
    <nav
      className={`${styles.navbar} ${headerClassName} navbar navbar-expand-lg`}
      ref={headerRef}
    >
      <div className={styles.container}>
        <Link href="#" className={styles.logo}>
          <Image src={isHeaderFixed ? LogoLetter : LogoBlack} alt="Logo Aloha" />
        </Link>
        {/* Menú #1 */}
        <div className={styles.menufirst}>
          <ul className="navbar-nav">
            {menuData.map((item, i) => (
              <li key={i} className="nav-item">
                <Link className="nav-link" href={item.path}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/*Search*/}

        {isHeaderFixed && (
          <div className="d-none d-sm-block">
            <SearchBar size="small" />
          </div>
        )
        }

        {/* Menú #2 */}
        <div className={styles.menusecond}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Registrarme
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Iniciar sesión
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_69_1496)">
                    <path
                      d="M11.3337 4.66699L4.66699 11.3337"
                      stroke="#FF595A"
                      strokeWidth="1.33333"
                    />
                    <path
                      d="M5.33398 4.66699H11.334V10.667"
                      stroke="#FF595A"
                      strokeWidth="1.33333"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_69_1496">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.menuThree}>
          <button
            className={`${styles.menuButton} d-lg-none`}
            onClick={handleMenuToggle}
          >
            {!isMenuOpen
              ? "Menú"
              : "Salir"
            }
            <div className={`${styles.menuButton__toggle} ${isMenuOpen && styles.close}`}>
              <span></span>
              <span></span>
            </div>
          </button>
          <Collapse in={isMenuOpen}>
            <div className={`${styles.menu} d-lg-none`}>
              <ul className="navbar-nav flex-column">
                {menuData.map((item, i) => (
                  <li className={`${item.subMenu && styles.Dropdown} ${styles.menuItem} nav-item py-3 px-4`} key={i}>
                    {item.subMenu ? (
                      <div
                        className={`nav-link ${styles.subMenuToggle}`}
                        onClick={() => setIndiceSubMenuAbierto(indiceSubMenuAbierto === i ? null : i)}
                      >
                        <span style={{color: 'var(--aloha-black)'}}>
                          {item.text}
                        </span>
                        <span className={`${styles.subMenuArrow} ${indiceSubMenuAbierto === i && styles.abierto}`}>
                          <FontAwesomeIcon icon={faChevronDown} />
                        </span>
                      </div>
                    )
                      :
                      (
                        <Link className={`nav-link`} style={{fontWeight: '600', color: 'var(--aloha-black)'}} href={item.path}>
                          {item.text}
                        </Link>
                      )}

                    {item.subMenu && indiceSubMenuAbierto === i && (
                      <ul className={`${styles.DropdownMenu} navbar-nav mt-4`}>
                        {item.subMenu.map((item, i) => (
                          <li key={i} className="nav-item py-2">
                            <ButtonLink href={item.path} text={item.text} size={'s'} color={'blue'} />
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

              <div className="d-none d-sm-block px-4 my-4">
                <ButtonLink text={'Registrarme'} color={'blue'} size={'l'}/>
                <span className="px-2" style={{color: '#AEAEAE', fontSize: '20px'}}>
                  |
                </span>
                <ButtonLink text={'Iniciar sesión'} color={'blue'} size={'l'}/>
              </div>

              <div className="d-sm-none px-4 my-4">
                <ButtonLink text={'Registrarme'} color={'blue'} size={'m'}/>
                <span className="px-2" style={{color: '#AEAEAE', fontSize: '20px'}}>
                  |
                </span>
                <ButtonLink text={'Iniciar sesión'} color={'blue'} size={'m'}/>
              </div>
            </div>
          </Collapse>
        </div>
      </div>
    </nav>
  );
};

export default Header;
