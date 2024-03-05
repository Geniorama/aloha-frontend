import styles from "./Footer.module.css";
import Image from "next/image";
import Logo from "../../../public/img/components/footer/logo-aloha-color.svg";
import Link from "next/link";
import AppStore from "../../../public/img/components/footer/app-store.png";
import GooglePlay from "../../../public/img/components/footer/google-play.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className={styles.alfooter}>
      <div className="container">
        <div className={`${styles.alfooterHeader} row align-items-center`}>
          <div className="col-12 col-lg-4">
            <Link href={'/'}>
              <Image unoptimized src={Logo} alt="Logo Aloha" className={styles.logo} />
            </Link>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <Link href="/planes">
              Planes y precios
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_48_55)">
                  <path
                    d="M22.6668 9.33301L9.3335 22.6663"
                    stroke="#FF595A"
                    strokeWidth="2.66667"
                  />
                  <path
                    d="M10.6665 9.33301H22.6665V21.333"
                    stroke="#FF595A"
                    strokeWidth="2.66667"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_48_55">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <Link href="#">
              Búsquedas populares
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_48_55)">
                  <path
                    d="M22.6668 9.33301L9.3335 22.6663"
                    stroke="#FF595A"
                    strokeWidth="2.66667"
                  />
                  <path
                    d="M10.6665 9.33301H22.6665V21.333"
                    stroke="#FF595A"
                    strokeWidth="2.66667"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_48_55">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>
        </div>
        <div className={`${styles.alfooterBottom} row`}>
          <div className="col-12 col-md-6 col-lg-4">
            <h5>Legal.</h5>
            <ul>
              <li>
                <Link href="#">Términos y uso del sitio web</Link>
              </li>
              <li>
               <Link href="#">Términos de servicio</Link>
              </li>
              <li>
               <Link href="#">Sobre nosotros</Link>
              </li>
              <li>
                <Link href="#">Política de privacidad</Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <h5>Contacto y soporte.</h5>
            <ul>
              <li>
                <Link href="tel:+34652757509">(+34) 652757509</Link>
              </li>
              <li>
                <Link href="mailto:info@alohaimages.co" target="_blank">info@alohaimages.co</Link>
              </li>
            </ul>
          </div>
          {/* <div className="col-12 col-md-6 col-lg-3">
            <h5>Apps.</h5>
            <div className={styles.alapps}>
              <Link href="#">
                <Image unoptimized src={AppStore} alt="App Store" />
              </Link>
              <Link href="#">
                <Image unoptimized src={GooglePlay} alt="App Store" />
              </Link>
            </div>
          </div> */}
          <div className="col-12 col-md-6 col-lg-4">
            <h5>Redes sociales.</h5>
            <div className={styles.alsocial}>
              <Link href="https://www.instagram.com/aloha_images/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              <Link href="https://www.facebook.com/alohaimagesphotostock/" target="_blank">
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
