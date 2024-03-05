import { useState } from "react";
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
import SlideExample1 from "../../public/img/home/image 113.jpg";
import SlideExample2 from "../../public/img/home/image 114.jpg";
import SlideExample3 from "../../public/img/home/image 116.jpg";
import SlideExample4 from "../../public/img/home/image 112.jpg";
import CardCategory from "@/components/CardCategory/CardCategory";
import "@fortawesome/fontawesome-svg-core/styles.css";
import CoverFotos from "../../public/img/home/categories/imagenes.jpg";
import CoverVectores from "../../public/img/home/categories/vectores.jpg";
import CoverIlustraciones from "../../public/img/home/categories/ilustraciones.jpg";
import CoverVideos from "../../public/img/home/categories/videos.jpg";
import CoverMusica from "../../public/img/home/categories/musica.jpg";
import CoverEditorial from "../../public/img/home/categories/editorial.jpg";
import CoverEfectos from "../../public/img/home/categories/efectos-de-sonido.jpg";
import LogoGoogle from "../../public/img/signup/logo-google.png";
import LogoFB from "../../public/img/signup/logo-fb.png";
import IconEnvelope from "../../public/img/signup/email.svg";
import BgColaboradores from "../../public/img/home/bg-colaboradores.png";
import Slider from "@/components/Slider/Slider";
import PlanSection from "@/components/PlanSection/PlanSection";
import CollectionCard from "@/components/CollectionCard/CollectionCard";

import collections from "@/data/collections.json";

const metaData = {
  title: "Inicio",
  description: "Mi metadescripción",
  keywords: "Banco imágenes, aloha",
  author: "Geniorama Agencia",
};

export default function Home() {
  const [regTerms, setRegTerms] = useState(false);

  const handleCheckboxChange = () => {
    setRegTerms(!regTerms);
  };
  const otoño_images = collections.find((item) => item.name.includes("otoño"));
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

            <div className="col-12 col-md-6 col-lg-4 mt-4">
              <CardCategory
                text={"Videos"}
                size={"large"}
                url="/categoria/videos"
                image={CoverVideos}
              />
            </div>

            <div className="col-12 col-md-6 col-lg-4 mt-4">
              <CardCategory
                text={"Música & SFX"}
                size={"large"}
                url="/musica-sfx"
                link_position={"bottom-right"}
                image={CoverMusica}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-4">
              <CardCategory
                text={"Editorial"}
                size={"large"}
                url="/categoria/editorial"
                link_position={"bottom-right"}
                image={CoverEfectos}
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.Section}>
        <div className="container">
          <TitleSection text="Colecciones más recientes." />
          <div className="text-center mb-4">
            <ButtonLink
              href="/colecciones"
              text="Ver todos"
              color="coral"
              size="m"
            />
          </div>
          <div>
            <Slider>
              {collections.map((collection) => (
                <CollectionCard key={collection.name} {...collection} />
              ))}
            </Slider>
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
                unoptimized
                src={GalleryExample}
                fill
                style={{ objectFit: "cover" }}
                alt=""
              />
            </div>

            <div className={styles.GridPopular__item}>
              <Image
                unoptimized
                src={GalleryExample4}
                fill
                style={{ objectFit: "cover" }}
                alt=""
              />
            </div>

            <div className={styles.GridPopular__item}>
              <Image
                unoptimized
                src={GalleryExample5}
                fill
                style={{ objectFit: "cover" }}
                alt=""
              />
            </div>

            <div className={styles.GridPopular__item}>
              <Image
                unoptimized
                src={GalleryExample1}
                fill
                style={{ objectFit: "cover" }}
                alt=""
              />
            </div>

            <div className={styles.GridPopular__item}>
              <Image
                unoptimized
                src={GalleryExample3}
                fill
                style={{ objectFit: "cover" }}
                alt=""
              />
            </div>

            <div className={styles.GridPopular__item}>
              <Image
                unoptimized
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
        <Slider>
          {otoño_images.images.map((image) => (
            <div key={image.id} className={styles.SlideItem}>
              <div style={{ height: "400px", width: "600px" }}>
                <Image
                  unoptimized
                  src={image.huge_thumb}
                  width={400}
                  height={500}
                  alt=""
                  quality={100}
                />
              </div>
            </div>
          ))}
        </Slider>

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

      {/* Section - Regístrate */}
      {/* <section className={`${styles.SectionSignup} ${styles.Section}`}>
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
                    unoptimized
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
                    unoptimized
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
                    unoptimized
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
      </section> */}

      {/* Section - colaboradores */}
      <section
        className={`${styles.Section} ${styles.SectionColab}`}
        style={{ position: "relative" }}
      >
        <Image
          unoptimized
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
      <PlanSection />
    </Layout>
  );
}
