import CardCategory from "@/components/CardCategory/CardCategory";
import HeroCategory from "@/components/Hero/HeroCategory/HeroCategory";
import Layout from "@/components/Layout/Layout";
import PlanSection from "@/components/PlanSection/PlanSection";
import TitleSection from "@/components/TitleSection/TitleSection";

import styles from "@/styles/Category.module.css";

const metaData = {
  title: "Categoría | Vectores",
};

export default function Vectores() {
  return (
    <Layout metaData={metaData}>
      <div className="container-fluid">
        <HeroCategory
          background="/img/category/bg_fotos.jpg"
          search={true}
          title="Vectores"
          desc="Crea formas precisas y líneas perfectas"
          layer={{
            background:
              "linear-gradient(0deg, rgba(0,0,0,.7) 0%, rgba(0,0,0,0.3) 49%, rgba(0,0,0,0) 100%)",
            backgroundBlendMode: "multiply",
          }}
        />
      </div>
      <section className={styles.Section}>
        <div className="container">
          <TitleSection text="Categorías de fotos." />

          <div className={`mt-4 row ${styles.Grid} ${styles.Grid__style1}`}>
            {/* Column */}
            <div className={`col-12 col-md-4 ${styles.Column}`}>
              <div className={styles.Item} style={{ height: "40%" }}>
                <CardCategory
                  text={"Trabajo"}
                  height={"100%"}
                  image="/img/category/cat-trabajo.png"
                />
              </div>

              <div className={`${styles.Item}`} style={{ height: "30%" }}>
                <CardCategory
                  text="Relajado"
                  height="100%"
                  image="/img/category/cat-relajado.png"
                />
              </div>

              <div className={styles.Item} style={{ height: "30%" }}>
                <CardCategory
                  text={"Paisaje"}
                  height={"100%"}
                  image="/img/category/cat-paisaje.png"
                />
              </div>
            </div>

            {/* Column */}
            <div className={`col-12 col-md-4 ${styles.Column}`}>
              <div className={styles.Item} style={{ height: "20%" }}>
                <CardCategory
                  text={"Flores"}
                  height={"100%"}
                  image="/img/category/cat-flores.png"
                />
              </div>

              <div className={styles.Item} style={{ height: "55%" }}>
                <CardCategory
                  text={"Amigos"}
                  height={"100%"}
                  image="/img/category/cat-amigos.png"
                />
              </div>

              <div className={styles.Item} style={{ height: "25%" }}>
                <CardCategory
                  text={"Abstracto"}
                  height={"100%"}
                  image="/img/category/cat-abstracto.png"
                />
              </div>
            </div>

            {/* Column */}
            <div className={`col-12 col-md-4 ${styles.Column}`}>
              <div className={styles.Item} style={{ height: "35%" }}>
                <CardCategory
                  text={"Arquitectura"}
                  height={"100%"}
                  image="/img/category/cat-arquitectura.png"
                />
              </div>

              <div className={styles.Item} style={{ height: "35%" }}>
                <CardCategory
                  text={"Backgrounds"}
                  height={"100%"}
                  image="/img/category/cat-background.png"
                />
              </div>

              <div className={styles.Item} style={{ height: "30%" }}>
                <CardCategory
                  text={"Comida"}
                  height={"100%"}
                  image="/img/category/cat-comida.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <PlanSection />
    </Layout>
  );
}
