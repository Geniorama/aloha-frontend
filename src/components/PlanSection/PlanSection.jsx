import planes from "@/data/planes.json";
import CardPlan from "../CardPlan/CardPlan";
import TitleSection from "../TitleSection/TitleSection";
import styles from "@/components/PlanSection/PlanSection.module.css";
import Link from "next/link";
import Tabs from "../Tabs/Tabs";

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

export default function PlanSection() {
  return (
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
                <li>Las imágenes no usadas serán añadidas al mes siguiente.</li>
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
  );
}
