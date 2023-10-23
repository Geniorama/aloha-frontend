import Layout from "@/components/Layout/Layout";
import PlanSection from "@/components/PlanSection/PlanSection";
import QASection from "@/components/QASection/QASection";
import styles from "@/styles/Planes.module.css";
import Image from "next/image";

const metaData = {
  title: "Planes",
  description: "Mi metadescripción",
  keywords: "Banco imágenes, aloha",
  author: "Geniorama Agencia",
};

function PlanesPage() {
  return (
    <Layout metaData={metaData}>
      <PlanSection />
      <section className={styles.Banner}>
        <div>
          <h2>¿Necesitas una solución personalizada?</h2>
          <p>
            Podemos personalizar nuestros planes según tus necesidades.
            <br /> ¡Ponte en contacto con nosotros para concretar precios y
            condiciones!
          </p>
          <button type="submit" target="_self">
            <Image src="/icons/Whatsapp.svg" width={25} height={25} alt="" />
            <span>Escríbenos</span>
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
                  stroke="black"
                  strokeWidth="2.66667"
                />
                <path
                  d="M10.6665 9.33301H22.6665V21.333"
                  stroke="black"
                  strokeWidth="2.66667"
                />
              </g>
              <defs>
                <clipPath id="clip0_48_55">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </section>
      <section className={styles.BannerBusiness}>
        <div className={styles.BannerBusinessBackground}>
          <Image
            src="/img/planes/business-banner.jpg"
            sizes="(min-width: 568px) 568px, (min-width: 1024px) 1024px, 128px"
            loader={({ width }) =>
              width >= 568
                ? "/img/planes/business-banner.jpg"
                : "/img/planes/business-small-banner.jpg"
            }
            fill
            alt=""
          />
        </div>
        <div className={styles.BannerBusinessContent}>
          <h2>
            ¿Necesitas un plan para <span>tu empresa?</span>
          </h2>
          <p>
            Eleva el esfuerzo de tu equipo al siguiente nivel con nuestros
            planes para empresa
          </p>
          <button type="submit" target="_self">
            <span>Ver planes para empresas</span>
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
                  stroke="black"
                  strokeWidth="2.66667"
                />
                <path
                  d="M10.6665 9.33301H22.6665V21.333"
                  stroke="black"
                  strokeWidth="2.66667"
                />
              </g>
              <defs>
                <clipPath id="clip0_48_55">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </section>
      <QASection />
    </Layout>
  );
}

export default PlanesPage;
