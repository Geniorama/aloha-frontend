import ButtonLink from "@/components/ButtonLink/ButtonLink";
import CardGrid from "@/components/CardGrid/CardGrid";
import Categories from "@/components/Categories/Categories";
import HeroCategory from "@/components/Hero/HeroCategory/HeroCategory";
import Layout from "@/components/Layout/Layout";
import Slider from "@/components/Slider/Slider";
import TitleSection from "@/components/TitleSection/TitleSection";
import categories from "@/data/categories";
import collections from "@/data/collections.json";

import styles from "@/styles/Collections.module.css";

import images from "@/data/images";
import CollectionCard from "@/components/CollectionCard/CollectionCard";
import PlanSection from "@/components/PlanSection/PlanSection";

const metaData = {
  title: "Colecciones",
};

function ColecctionsPage() {
  return (
    <Layout metaData={metaData}>
      <HeroCategory
        background="/img/collections/banner-collection.jpg"
        title="Colecciones"
        desc="Crea formas precisas y líneas perfectas"
        search
        layer={{
          background:
            "linear-gradient(0deg, rgba(0,0,0,.7) 0%, rgba(0,0,0,0.3) 49%, rgba(0,0,0,0) 100%)",
          backgroundBlendMode: "multiply",
        }}
      />
      <Categories
        title="colecciones"
        path="collections"
        categories={categories.collections}
      />
      <section className={styles.Section} style={{ marginTop: "100px" }}>
        <div className="container">
          <TitleSection text="Colecciones más recientes." />
          <div className="text-center mb-4">
            <ButtonLink text="Ver todos" color="coral" size="m" />
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
      <section className={styles.Section} style={{ marginTop: "100px" }}>
        <div className="container">
          <TitleSection text="Tendencias de color" />
          <div className="text-center mb-4">
            <ButtonLink text="Ver todos" color="coral" size="m" />
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
      <PlanSection />
    </Layout>
  );
}

export default ColecctionsPage;
