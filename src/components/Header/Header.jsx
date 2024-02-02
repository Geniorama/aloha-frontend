import React, { Fragment, useEffect, useRef, useState } from "react";
import LogoBlack from "../../../public/img/components/header/logo-black-aloha.svg";
import Link from "next/link";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faBars } from "@fortawesome/free-solid-svg-icons";
import { Collapse } from "react-bootstrap";
import Image from "next/image";
import SearchBar from "../SearchBar/SearchBar";
import LogoLetter from "../../../public/img/components/header/logo-aloha-letter.svg";
import menuData from "./menuData.json";
import ButtonLink from "../ButtonLink/ButtonLink";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import SubMenuDesktop from "../SubMenuDesktop/SubMenuDesktop";
import { logout } from "@/lib/auth";
import { getCookies } from "cookies-next";

const Header = () => {
  const headerRef = useRef(null);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [indiceSubMenuAbierto, setIndiceSubMenuAbierto] = useState(null);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [user, setUser] = useState({});
  const data = getCookies();

  const username = user.name?.includes(".com") ? user.email : user.name;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    setUser({ name: data.name, email: data.email });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(data)

  const onShowSubMenu = () => setIsSubMenuOpen(!isSubMenuOpen);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (headerRef.current) {
      const headerHeight = headerRef.current.offsetHeight;

      if (scrollPosition > headerHeight) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
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
    <Fragment>
      <nav
        className={`${styles.navbar} ${headerClassName} navbar navbar-expand-lg`}
        ref={headerRef}
      >
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            {/* <Image
            unoptimized
            src={isHeaderFixed ? LogoLetter : LogoBlack}
            alt="Logo Aloha"
          /> */}
            {isHeaderFixed ? (
              <svg
                width="39"
                height="36"
                viewBox="0 0 39 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.0548 0.597656L30.6939 5.94827C27.5126 2.68297 22.4311 0.653712 17.5121 0.653712C7.84234 0.650909 0 8.49325 0 18.1658C0 27.8384 7.84234 35.6808 17.5149 35.6808C22.4339 35.6808 27.5154 33.6515 30.6967 30.3862L30.0576 35.6808H38.7324V0.597656H30.0576H30.0548ZM17.5121 26.5323C12.893 26.5323 9.14566 22.7877 9.14566 18.1658C9.14566 13.544 12.8902 9.79937 17.5121 9.79937C22.134 9.79937 25.8786 13.544 25.8786 18.1658C25.8786 22.7877 22.134 26.5323 17.5121 26.5323Z"
                  fill="#1A01A6"
                />
              </svg>
            ) : (
              <svg
                width="164"
                height="64"
                viewBox="0 0 173 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.0548 10.5977L30.6939 15.9483C27.5126 12.683 22.4311 10.6537 17.5121 10.6537C7.84234 10.6509 0 18.4933 0 28.1658C0 37.8384 7.84234 45.6808 17.5149 45.6808C22.4339 45.6808 27.5154 43.6515 30.6967 40.3862L30.0576 45.6808H38.7324V10.5977H30.0576H30.0548ZM17.5121 36.5323C12.893 36.5323 9.14566 32.7877 9.14566 28.1658C9.14566 23.544 12.8902 19.7994 17.5121 19.7994C22.134 19.7994 25.8786 23.544 25.8786 28.1658C25.8786 32.7877 22.134 36.5323 17.5121 36.5323Z"
                  fill="#222222"
                />
                <path
                  d="M163.798 10.5977L164.437 15.9483C161.256 12.683 156.174 10.6537 151.255 10.6537C141.583 10.6537 133.74 18.4961 133.74 28.1686C133.74 37.8412 141.583 45.6836 151.255 45.6836C156.174 45.6836 161.256 43.6543 164.437 40.389L163.798 45.6836H172.473V10.5977H163.798ZM151.255 36.5323C146.636 36.5323 142.889 32.7877 142.889 28.1658C142.889 23.544 146.633 19.7994 151.255 19.7994C155.877 19.7994 159.622 23.544 159.622 28.1658C159.622 32.7877 155.877 36.5323 151.255 36.5323Z"
                  fill="#222222"
                />
                <path
                  d="M74.6731 10.6504C65.0005 10.6504 57.1582 18.4927 57.1582 28.1653C57.1582 37.8379 65.0005 45.6803 74.6731 45.6803C84.3457 45.6803 92.1881 37.8379 92.1881 28.1653C92.1881 18.4927 84.3457 10.6504 74.6731 10.6504ZM74.6731 36.529C70.0541 36.529 66.3067 32.7844 66.3067 28.1625C66.3067 23.5406 70.0513 19.796 74.6731 19.796C79.295 19.796 83.0396 23.5406 83.0396 28.1625C83.0396 32.7844 79.295 36.529 74.6731 36.529Z"
                  fill="#222222"
                />
                <path
                  d="M54.4031 0H43.8027V45.6778H54.4031V0Z"
                  fill="#222222"
                />
                <path
                  d="M130.559 27.9387C130.436 18.3726 122.647 10.6536 113.05 10.6536C110.606 10.6536 108.279 11.1553 106.169 12.0606V0H95.5684V45.6778H106.169V27.6248C106.446 24.0596 109.417 21.2539 113.05 21.2539C116.682 21.2539 119.922 24.3146 119.961 28.1013V45.6835H130.559V27.9415V27.9387Z"
                  fill="#222222"
                />
                <path
                  d="M120.025 51.5134C120.025 50.8827 120.552 50.3418 121.183 50.3418C121.814 50.3418 122.355 50.8827 122.355 51.5134C122.355 52.144 121.828 52.671 121.183 52.671C120.538 52.671 120.025 52.144 120.025 51.5134ZM120.244 53.5482H122.133V60.8665H120.244V53.5482Z"
                  fill="#222222"
                />
                <path
                  d="M135.538 56.3596V60.8666H133.649V56.4913C133.649 55.6281 133.209 55.1011 132.419 55.1011C131.584 55.1011 131.057 55.6561 131.057 56.7548V60.8666H129.168V56.4913C129.168 55.6281 128.728 55.1011 127.937 55.1011C127.147 55.1011 126.561 55.6561 126.561 56.7548V60.8666H124.672V53.5484H126.561V54.3247C126.97 53.7109 127.66 53.3438 128.596 53.3438C129.532 53.3438 130.177 53.7249 130.586 54.3976C131.04 53.7389 131.771 53.3438 132.766 53.3438C134.434 53.3438 135.533 54.5293 135.533 56.3596H135.538Z"
                  fill="#222222"
                />
                <path
                  d="M145.417 53.5482V60.8664H143.528V60.0032C143.001 60.6618 142.211 61.071 141.143 61.071C139.195 61.071 137.586 59.3893 137.586 57.2059C137.586 55.0225 139.195 53.3408 141.143 53.3408C142.211 53.3408 143.001 53.75 143.528 54.4087V53.5454H145.417V53.5482ZM143.528 57.2087C143.528 55.9783 142.665 55.1458 141.493 55.1458C140.322 55.1458 139.472 55.9811 139.472 57.2087C139.472 58.4364 140.336 59.2716 141.493 59.2716C142.651 59.2716 143.528 58.4364 143.528 57.2087Z"
                  fill="#222222"
                />
                <path
                  d="M155.396 53.5485V60.5163C155.396 62.9156 153.507 64.0003 151.576 64.0003C150.009 64.0003 148.751 63.4005 148.106 62.2149L149.715 61.2927C150.023 61.8645 150.505 62.3186 151.632 62.3186C152.818 62.3186 153.549 61.6739 153.549 60.5191V59.7287C153.036 60.4154 152.246 60.8415 151.206 60.8415C149.126 60.8415 147.562 59.157 147.562 57.0941C147.562 55.0312 149.129 53.3467 151.206 53.3467C152.246 53.3467 153.036 53.7699 153.549 54.4594V53.5513H155.394L155.396 53.5485ZM153.552 57.0913C153.552 55.9337 152.689 55.1013 151.503 55.1013C150.318 55.1013 149.454 55.9365 149.454 57.0913C149.454 58.246 150.318 59.0953 151.503 59.0953C152.689 59.0953 153.552 58.2601 153.552 57.0913Z"
                  fill="#222222"
                />
                <path
                  d="M161.586 59.3585C162.317 59.3585 162.903 59.0502 163.225 58.627L164.747 59.5043C164.061 60.4993 162.962 61.071 161.558 61.071C159.1 61.071 157.547 59.3893 157.547 57.2059C157.547 55.0225 159.114 53.3408 161.412 53.3408C163.579 53.3408 165.115 55.0534 165.115 57.2059C165.115 57.4834 165.087 57.7329 165.042 57.9823H159.523C159.786 58.9493 160.591 59.3585 161.586 59.3585ZM163.225 56.5192C162.99 55.4654 162.2 55.0421 161.409 55.0421C160.4 55.0421 159.711 55.5831 159.492 56.5192H163.225Z"
                  fill="#222222"
                />
                <path
                  d="M172.475 58.7309C172.475 60.3117 171.099 61.0741 169.532 61.0741C168.069 61.0741 166.984 60.4603 166.457 59.3335L168.097 58.4114C168.301 59.0112 168.8 59.3616 169.532 59.3616C170.132 59.3616 170.541 59.157 170.541 58.7309C170.541 57.663 166.765 58.2488 166.765 55.673C166.765 54.1791 168.038 53.3467 169.546 53.3467C170.731 53.3467 171.757 53.8876 172.326 54.8994L170.717 55.7767C170.499 55.3087 170.087 55.0312 169.546 55.0312C169.078 55.0312 168.696 55.2358 168.696 55.631C168.696 56.7129 172.472 56.0402 172.472 58.7337L172.475 58.7309Z"
                  fill="#222222"
                />
              </svg>
            )}
          </Link>
          {/* Menú #1 */}
          <div className={styles.menufirst}>
            <ul className="navbar-nav" style={{ alignItems: "center" }}>
              <li className={styles.navImages}>
                <div className="nav-item">
                  <Link className="nav-link" href="/categoria/fotos">
                    {menuData[0].text}
                    <svg
                      width="10"
                      height="7"
                      viewBox="0 0 10 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="#7F7F7F"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </Link>
                </div>
                <div className={`${styles.show} ${styles.navSubmenu}`}>
                  <SubMenuDesktop isHeaderFixed={isHeaderFixed} />
                </div>
              </li>
              {menuData
                .filter((item) => item.text != "Imágenes")
                .map((item, i) => (
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
              <SearchBar size="small" customClass='searchBarHeaderFixed' />
            </div>
          )}
          {user.email ? (
            <div className={styles.navProfile} style={{ position: "relative" }}>
              <span className={styles.navUsername}>
                {username}{" "}
                <Image
                  src="/icons/Arrow-profile.svg"
                  width={14}
                  height={14}
                  alt=""
                />
              </span>
              <div className={styles.navMenuUser}>
                <div role="header">
                  <h2>{user.name}</h2>
                  <span>{user.email}</span>
                </div>
                <div role="menu">
                  <div>
                    <Link href="/perfil">
                      <span>Perfil</span>
                    </Link>
                  </div>
                </div>
                <div role="logout">
                  <a onClick={logout}>
                    <span>Salir</span>
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.menusecond}>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" href="/auth/signup">
                    Registrarme
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/auth/signin">
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
          )}
          <div className={styles.menuThree}>
            <button
              className={`${styles.menuButton}`}
              onClick={handleMenuToggle}
            >
              {!isMenuOpen ? "Menú" : "Salir"}
              <div
                className={`${styles.menuButton__toggle} ${
                  isMenuOpen && styles.close
                }`}
              >
                <span></span>
                <span></span>
              </div>
            </button>
            <Collapse in={isMenuOpen}>
              <div className={`${styles.menu} ${styles.menuResponsive}`}>
                <ul className="navbar-nav flex-column">
                  {menuData.map((item, i) => (
                    <li
                      className={`${item.subMenu && styles.Dropdown} ${
                        styles.menuItem
                      } nav-item py-3 px-4`}
                      key={i}
                    >
                      {item.subMenu ? (
                        <div
                          className={`nav-link ${styles.subMenuToggle}`}
                          onClick={() =>
                            setIndiceSubMenuAbierto(
                              indiceSubMenuAbierto === i ? null : i
                            )
                          }
                        >
                          <span style={{ color: "var(--aloha-black)" }}>
                            {item.text}
                          </span>
                          <span
                            className={`${styles.subMenuArrow} ${
                              indiceSubMenuAbierto === i && styles.abierto
                            }`}
                          >
                            <FontAwesomeIcon icon={faChevronDown} />
                          </span>
                        </div>
                      ) : (
                        <Link
                          className={`nav-link`}
                          style={{
                            fontWeight: "600",
                            color: "var(--aloha-black)",
                          }}
                          href={item.path}
                        >
                          {item.text}
                        </Link>
                      )}

                      {item.subMenu && indiceSubMenuAbierto === i && (
                        <ul
                          className={`${styles.DropdownMenu} navbar-nav mt-4 flex-column`}
                        >
                          {item.subMenu.map((item, i) => (
                            <li key={i} className="nav-item py-2">
                              <ButtonLink
                                href={item.path}
                                text={item.text}
                                size={"s"}
                                color={"blue"}
                              />
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>

                <div className="d-none d-sm-block px-4 my-4">
                  <Link
                    href={"/signup"}
                    style={{
                      fontSize: "24px",
                      color: "var(--aloha-blue)",
                      fontWeight: "600",
                    }}
                  >
                    Registrarme
                  </Link>
                  <span
                    className="px-2"
                    style={{ color: "#AEAEAE", fontSize: "20px" }}
                  >
                    |
                  </span>
                  <ButtonLink
                    href="/signin"
                    text={"Iniciar sesión"}
                    color={"blue"}
                    size={"l"}
                  />
                </div>

                <div className="d-sm-none px-4 my-4">
                  <Link
                    href={"/signup"}
                    style={{
                      fontSize: "18px",
                      color: "var(--aloha-blue)",
                      fontWeight: "600",
                    }}
                  >
                    Registrarme
                  </Link>
                  <span
                    className="px-2"
                    style={{ color: "#AEAEAE", fontSize: "20px" }}
                  >
                    |
                  </span>
                  <ButtonLink
                    href="/signin"
                    text={"Iniciar sesión"}
                    color={"blue"}
                    size={"m"}
                  />
                </div>
              </div>
            </Collapse>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
