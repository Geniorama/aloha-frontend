import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import HeroSearch from "@/components/Hero/HeroSearch";
import TitleSection from "@/components/TitleSection/TitleSection";
import ButtonLink from "@/components/ButtonLink/ButtonLink";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import GalleryExample from "../../public/img/home/image 110.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SlideExample1 from "../../public/img/home/image 113.jpg";
import SlideExample2 from "../../public/img/home/image 114.jpg";
import CardCategory from "@/components/CardCategory/CardCategory";
import LogoBrands1 from "../../public/img/home/brands/image 21.png";
import LogoBrands2 from "../../public/img/home/brands/image 22.png";
import LogoBrands3 from "../../public/img/home/brands/image 23.png";
import LogoBrands4 from "../../public/img/home/brands/image 24.png";
import LogoBrands5 from "../../public/img/home/brands/image 25.png";
import PricingCard from "@/components/PricingCard/PricingCard";
import FormNewsletter from "@/components/FormNewsletter/FormNewsletter";
import FormPartners from "@/components/FormPartners/FormPartners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
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

  return (
    <div>
      <Header />
      <div className="container-fluid">
        <HeroSearch />
      </div>

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
              <Image src={GalleryExample} fill style={{ objectFit: "cover" }} />
            </div>

            <div className={styles.GridPopular__item}>
              <Image src={GalleryExample} fill style={{ objectFit: "cover" }} />
            </div>

            <div className={styles.GridPopular__item}>
              <Image src={GalleryExample} fill style={{ objectFit: "cover" }} />
            </div>

            <div className={styles.GridPopular__item}>
              <Image src={GalleryExample} fill style={{ objectFit: "cover" }} />
            </div>

            <div className={styles.GridPopular__item}>
              <Image src={GalleryExample} fill style={{ objectFit: "cover" }} />
            </div>

            <div className={styles.GridPopular__item}>
              <Image src={GalleryExample} fill style={{ objectFit: "cover" }} />
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

      {/* Section - Categorías */}
      <section className={`${styles.Section}`}>
        <div className="container">
          <TitleSection text="Categorías." color={"black"} />
          <div className="row mt-5">
            <div className="col-12 col-lg-4">
              <CardCategory text={"Fotos"} />
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-5 mt-lg-0">
              <CardCategory link_position={"bottom-right"} text={"Vectores"} />
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-5 mt-lg-0">
              <CardCategory text={"Ilustraciones"} />
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-4">
              <CardCategory text={"Videos"} size={"large"} />
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-4">
              <CardCategory
                text={"Música"}
                size={"large"}
                link_position={"bottom-right"}
              />
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-4">
              <CardCategory text={"Gratis"} size={"large"} />
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-4">
              <CardCategory
                text={"Efectos de sonido"}
                size={"large"}
                link_position={"bottom-right"}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section - Empresas */}
      <section
        className={styles.Section}
        style={{ background: "var(--aloha-coral)" }}
      >
        <div className="container">
          <div className={styles.BoxTitleEmpresas}>
            <TitleSection
              text="Empresas que trabajan con nosotros."
              color={"blue"}
            />
          </div>

          <div
            className={`${styles.RowBrands} d-flex align-items-center flex-row flex-wrap`}
          >
            <div className={styles.RowBrands__item}>
              <Image src={LogoBrands1} />
            </div>

            <div className={styles.RowBrands__item}>
              <Image src={LogoBrands2} />
            </div>

            <div className={styles.RowBrands__item}>
              <Image src={LogoBrands3} />
            </div>

            <div className={styles.RowBrands__item}>
              <Image src={LogoBrands4} />
            </div>

            <div className={styles.RowBrands__item}>
              <Image src={LogoBrands5} />
            </div>
          </div>

          <div className={`row align-items-center ${styles.RowCta}`}>
            <div className="col-12 col-md-3 col-lg-4 d-none d-md-block">
              <div className="d-flex justify-content-end">
                <h3 className={styles.TextHola}>hola!</h3>
              </div>
            </div>
            <div className={`col-12 col-md-9 col-lg-8 ${styles.ColCta}`}>
              <div className="d-flex align-items-start position-relative">
                <span className={styles.ctaArrow}>
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_124_3263)">
                      <path d="M85 85L35 35" stroke="white" strokeWidth="10" />
                      <path d="M40 85H85V40" stroke="white" strokeWidth="10" />
                    </g>
                    <defs>
                      <clipPath id="clip0_124_3263">
                        <rect
                          width="120"
                          height="120"
                          fill="white"
                          transform="matrix(1 0 0 -1 0 120)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <div className={styles.ctaText}>
                  <br />
                  <br />
                  <p>¿Quieres un paquete personalizado para tu empresa?</p>
                  <span className="d-none d-lg-block">
                    <ButtonLink
                      text={"Solicita un presupuesto"}
                      href={"/"}
                      color={"blue"}
                      size={"l"}
                    />
                  </span>

                  <span className="d-lg-none">
                    <ButtonLink
                      text={"Solicita un presupuesto"}
                      href={"/"}
                      color={"blue"}
                      size={"m"}
                    />
                  </span>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br className="d-none d-md-block" />
                  <br className="d-none d-md-block" />
                </div>
                <span
                  className={styles.ctaArrow}
                  style={{ alignSelf: "flex-end" }}
                >
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_124_3267)">
                      <path d="M35 35L85 85" stroke="white" strokeWidth="10" />
                      <path d="M80 35H35V80" stroke="white" strokeWidth="10" />
                    </g>
                    <defs>
                      <clipPath id="clip0_124_3267">
                        <rect
                          width="120"
                          height="120"
                          fill="white"
                          transform="matrix(-1 0 0 1 120 0)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.Section}>
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
        {/* Slider */}
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
      </section>

      <section
        className={styles.Section}
        style={{ background: "var(--aloha-blue)" }}
      >
        <div className="container">
          <TitleSection text="Planes." color={"white"} />
          <div style={{ marginLeft: "15%" }}>
            <ButtonLink
              href={"/"}
              text={"Conoce todos los planes"}
              color={"coral"}
              size={"m"}
            />
          </div>

          <div className="row mt-5">
            <div className="col-12 col-lg-4">
              <PricingCard
                title={"Imágenes."}
                desc={
                  "Más de 263 millones de fotos y vectores de stock de alta calidad para cubrir sus necesidades creativas."
                }
                price={"$0,19"}
                label_price={"imagen"}
                href={"/"}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-4 mt-lg-0">
              <PricingCard
                title={"Videos."}
                desc={
                  "Más de 263 millones de fotos y vectores de stock de alta calidad para cubrir sus necesidades creativas."
                }
                price={"$0,19"}
                label_price={"video"}
                href={"/"}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-4 mt-lg-0">
              <PricingCard
                title={"Sonido."}
                desc={
                  "Más de 263 millones de fotos y vectores de stock de alta calidad para cubrir sus necesidades creativas."
                }
                price={"$0,19"}
                label_price={"pista"}
                href={"/"}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${styles.Section} ${styles.SectionNewsletter}`}
        style={{ background: "#FAFAFA" }}
      >
        <div className="container">
          <div className="text-center">
            <TitleSection
              text="Regístrate en nuestro newsletter."
              color={"blue"}
            />
          </div>
          <div className="py-5 row justify-content-center">
            <div className="col-12 col-md-9 col-lg-8">
              <FormNewsletter />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.Section}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10">
              <TitleSection
                text="¿Quieres ser parte de nuestros colaboradores?"
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
                Déjanos tus datos y pronto estaremos comunicándonos contigo para
                ser parte de este gran mundo Aloha.
              </p>
              <div className="mt-5">
                <FormPartners />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
