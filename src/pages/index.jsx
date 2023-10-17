import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Layout from "@/components/Layout/Layout";
import HeroSearch from "@/components/Hero/HeroSearch";
import TitleSection from "@/components/TitleSection/TitleSection";
import ButtonLink from "@/components/ButtonLink/ButtonLink";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import GalleryExample from "../../public/img/home/image 110.png";
import GalleryExample1 from "../../public/img/home/image 105.png";
import GalleryExample2 from "../../public/img/home/image 104.png";
import GalleryExample3 from "../../public/img/home/image 102.png";
import GalleryExample4 from "../../public/img/home/image 111.png";
import GalleryExample5 from "../../public/img/home/image 109.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SlideExample1 from "../../public/img/home/image 113.jpg";
import SlideExample2 from "../../public/img/home/image 114.jpg";
import CardCategory from "@/components/CardCategory/CardCategory";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import CoverFotos from "../../public/img/home/categories/imagenes.jpg";
import CoverVectores from "../../public/img/home/categories/vectores.jpg";
import CoverIlustraciones from "../../public/img/home/categories/ilustraciones.jpg";
import CoverVideos from "../../public/img/home/categories/videos.jpg";
import CoverMusica from "../../public/img/home/categories/musica.jpg";
import CoverGratis from "../../public/img/home/categories/gratis.jpg";
import CoverEfectos from "../../public/img/home/categories/efectos-de-sonido.jpg";
import LogoGoogle from "../../public/img/signup/logo-google.png";
import LogoFB from "../../public/img/signup/logo-fb.png";
import IconEnvelope from "../../public/img/signup/email.svg";
import BgColaboradores from "../../public/img/home/bg-colaboradores.png";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import dotenv from "dotenv";
import Link from "next/link";
import Tabs from "@/components/Tabs/Tabs";
import CardPlan from "@/components/CardPlan/CardPlan";
import { useState } from "react";
dotenv.config();

export default function Home() {
  const [regTerms, setRegTerms] = useState(false);

  const handleCheckboxChange = () => {
    setRegTerms(!regTerms);
  };

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button className={className} onClick={onClick}>
        <div className="slick-arrow-icon">
          <FontAwesomeIcon
            size={"lg"}
            icon={faChevronRight}
            style={{ fontSize: "20px" }}
          />
        </div>
      </button>
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button className={className} onClick={onClick}>
        <div className="slick-arrow-icon">
          <FontAwesomeIcon
            size={"lg"}
            icon={faChevronLeft}
            style={{ fontSize: "20px" }}
          />
        </div>
      </button>
    );
  }

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 3000,
    speed: 2000,
    variableWidth: true,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // Pantallas grandes
        settings: {
          slidesToShow: 5,
          dots: true,
        },
      },
      {
        breakpoint: 769, // Tablets
        settings: {
          slidesToShow: 4,
          centerMode: false,
        },
      },
      {
        breakpoint: 480, // Dispositivos móviles
        settings: {
          slidesToShow: 2,
          centerMode: true,
          variableWidth: true,
          arrows: false,
        },
      },
    ],
  };

  const planes = [
    {
      id: "fotos-vectores-suscripcion",
      name: "Suscripción",
      category: [
        {
          name: "Fotos y vectores",
          slug: "fotos-y-vectores",
        },
      ],
      type: [
        {
          id: "pago-anual",
          name: "Pago anual",
          subitems: [
            {
              name: "10 imágenes",
              small: "mes",
              price: 8.99,
              price_per_item: 0.9,
              small_per_item: "por imagen",
            },

            {
              name: "75 imágenes",
              small: "mes",
              price: 59,
              price_per_item: 0.79,
              small_per_item: "por imagen",
            },

            {
              name: "150 imágenes",
              small: "mes",
              price: 89,
              price_per_item: 0.59,
              small_per_item: "por imagen",
            },

            {
              name: "750 imágenes",
              small: "mes",
              price: 169,
              price_per_item: 0.23,
              small_per_item: "por imagen",
            },
          ],
        },

        {
          id: 2,
          name: "Pago mensual",
          subitems: [
            {
              name: "10 imágenes",
              small: "mes",
              price: 8.99,
              price_per_item: 0.9,
              small_per_item: "por imagen",
            },

            {
              name: "75 imágenes",
              small: "mes",
              price: 59,
              price_per_item: 0.79,
              small_per_item: "por imagen",
            },

            {
              name: "150 imágenes",
              small: "mes",
              price: 89,
              price_per_item: 0.59,
              small_per_item: "por imagen",
            },

            {
              name: "750 imágenes",
              small: "mes",
              price: 169,
              price_per_item: 0.23,
              small_per_item: "por imagen",
            },
          ],
        },
      ],
    },

    {
      id: "fotos-vectores-prepago",
      name: "Prepago",
      category: [
        {
          name: "Fotos y vectores",
          slug: "fotos-y-vectores",
        },
      ],
      type: [
        {
          id: 1,
          name: "Pago anual",
          subitems: [
            {
              name: "3 imágenes",
              small: "mes",
              price: 42,
              price_per_item: 14,
              small_per_item: "por imagen",
            },

            {
              name: "10 imágenes",
              small: "mes",
              price: 49,
              price_per_item: 4.9,
              small_per_item: "por imagen",
            },

            {
              name: "25 imágenes",
              small: "mes",
              price: 99,
              price_per_item: 3.96,
              small_per_item: "por imagen",
            },

            {
              name: "25 imágenes",
              small: "mes",
              price: 299,
              price_per_item: 2.99,
              small_per_item: "por imagen",
            },
          ],
        },

        {
          id: 2,
          name: "Pago mensual",
          subitems: [
            {
              name: "10 imágenes",
              small: "mes",
              price: 8.99,
              price_per_item: 0.9,
              small_per_item: "por imagen",
            },

            {
              name: "75 imágenes",
              small: "mes",
              price: 59,
              price_per_item: 0.79,
              small_per_item: "por imagen",
            },
          ],
        },
      ],
    },

    {
      id: 3,
      name: "Suscripción",
      category: [
        {
          name: "Videos",
          slug: "videos",
        },
      ],
      type: [
        {
          id: 1,
          name: "Pago anual",
          subitems: [
            {
              name: "10 videos",
              small: "mes",
              price: 8.99,
              price_per_item: 0.9,
              small_per_item: "por video",
            },

            {
              name: "75 videos",
              small: "mes",
              price: 59,
              price_per_item: 0.79,
              small_per_item: "por video",
            },

            {
              name: "150 videos",
              small: "mes",
              price: 89,
              price_per_item: 0.59,
              small_per_item: "por video",
            },

            {
              name: "750 videos",
              small: "mes",
              price: 169,
              price_per_item: 0.23,
              small_per_item: "por video",
            },
          ],
        },

        {
          id: 2,
          name: "Pago mensual",
          subitems: [
            {
              name: "10 videos",
              small: "mes",
              price: 8.99,
              price_per_item: 0.9,
              small_per_item: "por video",
            },

            {
              name: "75 videos",
              small: "mes",
              price: 59,
              price_per_item: 0.79,
              small_per_item: "por video",
            },

            {
              name: "150 videos",
              small: "mes",
              price: 89,
              price_per_item: 0.59,
              small_per_item: "por video",
            },

            {
              name: "750 videos",
              small: "mes",
              price: 169,
              price_per_item: 0.23,
              small_per_item: "por video",
            },
          ],
        },
      ],
    },

    {
      id: 2,
      name: "Prepago",
      category: [
        {
          name: "Videos",
          slug: "videos",
        },
      ],
      type: [
        {
          id: 1,
          name: "Pago anual",
          subitems: [
            {
              name: "3 imágenes",
              small: "mes",
              price: 42,
              price_per_item: 14,
              small_per_item: "por video",
            },

            {
              name: "10 imágenes",
              small: "mes",
              price: 49,
              price_per_item: 4.9,
              small_per_item: "por video",
            },

            {
              name: "25 imágenes",
              small: "mes",
              price: 99,
              price_per_item: 3.96,
              small_per_item: "por video",
            },

            {
              name: "25 imágenes",
              small: "mes",
              price: 299,
              price_per_item: 2.99,
              small_per_item: "por video",
            },
          ],
        },

        {
          id: 2,
          name: "Pago mensual",
          subitems: [
            {
              name: "10 imágenes",
              small: "mes",
              price: 8.99,
              price_per_item: 0.9,
              small_per_item: "por video",
            },

            {
              name: "75 imágenes",
              small: "mes",
              price: 59,
              price_per_item: 0.79,
              small_per_item: "por video",
            },
          ],
        },
      ],
    },
  ];

  const planesFotosVectores = planes.filter((plan) => {
    return plan.category.some(
      (categoria) => categoria.name === "Fotos y vectores"
    );
  });

  const planesVideos = planes.filter((plan) => {
    return plan.category.some((categoria) => categoria.name === "Videos");
  });

  const tabsMenu = [
    {
      id: 1,
      title: "Fotos y vectores",
      content: <CardPlan planes={planesFotosVectores} />,
    },

    {
      id: 2,
      title: "Videos",
      content: <CardPlan planes={planesVideos} />,
    },

    {
      id: 3,
      title: "Música & SFX",
      content: "Content 3",
    },
  ];

  const metaData = {
    title: "Inicio",
    description: "Mi metadescripción",
    keywords: "Banco imágenes, aloha",
    author: "Geniorama Agencia",
  };

  return (
    <Layout metaData={metaData}>
      <div className="container-fluid">
        <HeroSearch />
      </div>
      {/* Section - Categorías */}
      <section className={`${styles.Section}`}>
        <div className="container">
          <TitleSection text="Categorías." color={"black"} />
          <div className="row mt-5">
            <div className="col-12 col-lg-4">
              <CardCategory
                text={"Fotos"}
                url="/categoria/fotos"
                image={CoverFotos}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-5 mt-lg-0">
              <CardCategory
                link_position={"bottom-right"}
                text={"Vectores"}
                url="/categoria/vectores"
                image={CoverVectores}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-5 mt-lg-0">
              <CardCategory
                text={"Ilustraciones"}
                url="/categoria/ilustraciones"
                image={CoverIlustraciones}
              />
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-4">
              <CardCategory
                text={"Videos"}
                size={"large"}
                url="/categoria/videos"
                image={CoverVideos}
              />
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-4">
              <CardCategory
                text={"Música"}
                size={"large"}
                url="/categoria/musica"
                link_position={"bottom-right"}
                image={CoverMusica}
              />
            </div>

            {/* <div className="col-12 col-md-6 col-lg-3 mt-4">
              <CardCategory
                text={"Gratis"}
                size={"large"}
                image={CoverGratis}
              />
            </div> */}

            <div className="col-12 col-md-6 col-lg-3 mt-4">
              <CardCategory
                text={"Efectos de sonido"}
                size={"large"}
                link_position={"bottom-right"}
                image={CoverEfectos}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section - Fotos populares */}
      <section className={`${styles.SectionPopular} ${styles.Section}`}>
        <div className="container">
          <TitleSection text="Fotos populares." color={"black"} />
          <div className="text-end text-lg-center my-3 pe-md-5">
            <ButtonLink
              href={"/"}
              text={"Ver todas las fotos"}
              color={"coral"}
            />
          </div>

          <div className={styles.GridPopular}>
            <div className={styles.GridPopular__item}>
              <Image
                src={GalleryExample}
                fill
                style={{ objectFit: "cover" }}
                alt=""
              />
            </div>

            <div className={styles.GridPopular__item}>
              <Image
                src={GalleryExample4}
                fill
                style={{ objectFit: "cover" }}
                alt=""
              />
            </div>

            <div className={styles.GridPopular__item}>
              <Image
                src={GalleryExample5}
                fill
                style={{ objectFit: "cover" }}
                alt=""
              />
            </div>

            <div className={styles.GridPopular__item}>
              <Image
                src={GalleryExample1}
                fill
                style={{ objectFit: "cover" }}
                alt=""
              />
            </div>

            <div className={styles.GridPopular__item}>
              <Image
                src={GalleryExample3}
                fill
                style={{ objectFit: "cover" }}
                alt=""
              />
            </div>

            <div className={styles.GridPopular__item}>
              <Image
                src={GalleryExample2}
                fill
                style={{ objectFit: "cover" }}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section - Fotos de temporada */}
      <section className={`${styles.Section}`}>
        <div className="container">
          <TitleSection text="Fotos de temporada." color={"black"} />
        </div>

        {/* Slider */}
        <div>
          <Slider {...settings}>
            <div className={styles.SlideItem}>
              <Image src={SlideExample1} responsive="true" />
            </div>
            <div className={styles.SlideItem}>
              <Image src={SlideExample2} responsive="true" />
            </div>
            <div className={styles.SlideItem}>
              <Image src={SlideExample2} responsive="true" />
            </div>
            <div className={styles.SlideItem}>
              <Image src={SlideExample2} responsive="true" />
            </div>
            <div className={styles.SlideItem}>
              <Image src={SlideExample2} responsive="true" />
            </div>
            <div className={styles.SlideItem}>
              <Image src={SlideExample2} responsive="true" />
            </div>
          </Slider>
        </div>

        {/* Promo */}
        <div className="container-fluid">
          <div
            className="p-4 mt-5 mt-md-0 px-5 p-md-3 mb-3 text-center d-flex justify-content-center align-items-center"
            style={{ background: "var(--aloha-blue)" }}
          >
            <p className={`${styles.PromoText}`}>
              Obtén 100 imágenes por $100/mes{" "}
              <span className="d-none d-lg-inline-block">
                <ButtonLink
                  href={"/"}
                  size={"xl"}
                  text={"Comprar ahora"}
                  color={"coral"}
                />
              </span>{" "}
              <span className="d-lg-none">
                <ButtonLink
                  href={"/"}
                  size={"m"}
                  text={"Comprar ahora"}
                  color={"coral"}
                />
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Section - Fotos gratis */}
      {/* <section className={`${styles.Section} pt-0`}>
        <div className="container">
          <TitleSection text="Fotos gratis." color={"black"} />
          <div style={{ marginLeft: "35%" }} className="ps-5 ps-lg-0">
            <ButtonLink
              href={"/"}
              text={"Ver todas"}
              color={"coral"}
              size={"m"}
            />
          </div>
        </div>
        <div>
          <Slider {...settings}>
            <div className={styles.SlideItem}>
              <Image src={SlideExample1} responsive="true" alt="" />
            </div>
            <div className={styles.SlideItem}>
              <Image src={SlideExample2} responsive="true" alt="" />
            </div>
            <div className={styles.SlideItem}>
              <Image src={SlideExample2} responsive="true" alt="" />
            </div>
            <div className={styles.SlideItem}>
              <Image src={SlideExample2} responsive="true" alt="" />
            </div>
            <div className={styles.SlideItem}>
              <Image src={SlideExample2} responsive="true" alt="" />
            </div>
            <div className={styles.SlideItem}>
              <Image src={SlideExample2} responsive="true" alt="" />
            </div>
          </Slider>
        </div>
      </section> */}

      {/* Section - Regístrate */}
      <section className={`${styles.SectionSignup} ${styles.Section}`}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-7">
              <h3 className={`${styles.SectionSignup__title}`}>
                Regístrate y descarga semanalmente imágenes gratis.
              </h3>
            </div>
            <div className="col-12 col-lg-5 px-4">
              <button
                className={`${styles.ButtonSignUp} ${
                  !regTerms && styles.disabled
                } mb-4`}
              >
                <span>
                  <Image
                    src={LogoGoogle}
                    className={`${styles.ButtonSignUp__logo}`}
                    alt="Sign up with Google"
                  />
                </span>
                <span className={`${styles.ButtonSignUp__name} mx-2`}>
                  Sign up with Google
                </span>
                <span className={`${styles.ButtonSignUp__arrow}`}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_48_55)">
                      <path
                        d="M22.6668 9.33301L9.3335 22.6663"
                        stroke="#222222"
                        strokeWidth="2.66667"
                      />
                      <path
                        d="M10.6665 9.33301H22.6665V21.333"
                        stroke="#222222"
                        strokeWidth="2.66667"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_48_55">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </button>

              <button
                className={`${styles.ButtonSignUp} ${
                  !regTerms && styles.disabled
                } mb-4`}
              >
                <span>
                  <Image
                    src={LogoFB}
                    className={`${styles.ButtonSignUp__logo}`}
                    alt="Sign up with Google"
                  />
                </span>
                <span className={`${styles.ButtonSignUp__name} mx-2`}>
                  Sign up with Facebook
                </span>
                <span className={`${styles.ButtonSignUp__arrow}`}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_48_55)">
                      <path
                        d="M22.6668 9.33301L9.3335 22.6663"
                        stroke="#222222"
                        strokeWidth="2.66667"
                      />
                      <path
                        d="M10.6665 9.33301H22.6665V21.333"
                        stroke="#222222"
                        strokeWidth="2.66667"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_48_55">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </button>

              <button
                className={`${styles.ButtonSignUp} ${
                  !regTerms && styles.disabled
                } mb-4`}
              >
                <span>
                  <Image
                    src={IconEnvelope}
                    className={`${styles.ButtonSignUp__logo}`}
                    alt="Sign up with Google"
                  />
                </span>
                <span className={`${styles.ButtonSignUp__name} mx-2`}>
                  Sign up with Email
                </span>
                <span className={`${styles.ButtonSignUp__arrow}`}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_48_55)">
                      <path
                        d="M22.6668 9.33301L9.3335 22.6663"
                        stroke="#222222"
                        strokeWidth="2.66667"
                      />
                      <path
                        d="M10.6665 9.33301H22.6665V21.333"
                        stroke="#222222"
                        strokeWidth="2.66667"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_48_55">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </button>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="condiciones"
                  onChange={handleCheckboxChange}
                  defaultChecked={regTerms ? true : false}
                />
                <label className="form-check-label" htmlFor="condiciones">
                  Acepto las{" "}
                  <a href="#" style={{ color: "white" }}>
                    condiciones de la membresía
                  </a>
                </label>
              </div>

              <div className="form-check mt-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="newsletter"
                />
                <label className="form-check-label" htmlFor="newsletter">
                  Me gustaría recibir el newsletter y ofertas especiales
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section - colaboradores */}
      <section
        className={`${styles.Section} ${styles.SectionColab}`}
        style={{ position: "relative" }}
      >
        <Image
          fill
          src={BgColaboradores}
          alt=""
          style={{ objectFit: "cover" }}
        />
        <div className={styles.LayerOpacity}></div>
        <div className="container position-relative text-center">
          <h5 className={`${styles.SectionColab__title}`}>
            Únete a nuestra comunidad de colaboradores.
          </h5>
          <p className={`${styles.SectionColab__desc}`}>
            Sabemos que detrás de cada pieza de imagen, video o sonido hay una
            mente creativa. Puedes crear contenido y venderlo con Aloha.
          </p>

          <ButtonLink
            text={"Quiero vender contenido"}
            color={"coral"}
            size={"m"}
          />
        </div>
      </section>

      {/* Section - Planes */}
      <section className={styles.Section}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-7">
              <TitleSection
                text="Tenemos planes especiales para ti."
                color={"black"}
              />
              <p
                className="mt-3"
                style={{
                  fontSize: "18px",
                  color: "var(--aloha-black)",
                  fontWeight: "500",
                  maxWidth: "600px",
                }}
              >
                Explora los diferentes planes, o si necesitas algo más
                personalizado{" "}
                <Link style={{ color: "var(--aloha-blue)" }} href={"#"}>
                  Escríbenos
                </Link>
                .
              </p>
              <div className="mt-5"></div>
            </div>
            <div className="col-12 col-lg-5">{/* Empty space */}</div>
          </div>

          <div className="row">
            <div className="col-12 col-lg-4">
              <div className={`${styles.CardFeatures}`}>
                <h6 className={`${styles.CardFeatures__title}`}>
                  Tu plan de suscripción o prepago incluye:
                </h6>
                <ul className={`${styles.CardFeatures__list}`}>
                  <li>
                    Las imágenes no usadas serán añadidas al mes siguiente.
                  </li>
                  <li>Imágenes adicionales a $1 cada una.</li>
                  <li>
                    Uso impreso o digital (se excluyen artículos para reventa).
                  </li>
                  <li>Derechos de impresión: hasta 500.000 copias.</li>
                  <li>Derecho a usar las imágenes de por vida.</li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-lg-8">
              <Tabs items={tabsMenu} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

// export async function getServerSideProps() {
//   const apiKey = process.env.API_KEY;
//   const apiUrl = process.env.API_URL;

//   try {
//     const res = await fetch(apiUrl + '?dp_command=getInfo&dp_apikey=' + apiKey);
//     const data = await res.json()

//     return {
//       props: {
//         data
//       }
//     }

//   } catch (error) {
//     console.log('Hubo un error', error)
//   }

// }
