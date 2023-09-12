import Layout from "@/components/Layout/Layout";
import HeroCategory from "@/components/Hero/HeroCategory/HeroCategory";
import TitleSection from "@/components/TitleSection/TitleSection";
import ButtonLink from "@/components/ButtonLink/ButtonLink";
import CardGrid from "@/components/CardGrid/CardGrid";
import styles from "@/styles/Category.module.css";

import PlanSection from "@/components/PlanSection/PlanSection";
import PopularAuthors from "@/components/PopularAuthors/PopularAuthors";
import Slider from "@/components/Slider/Slider";
import Categories from "@/components/Categories/Categories";
import images from "@/data/images.json";

import categories from "@/data/categories/photos";

const metaData = {
  title: "Categoría | Fotos",
};

export default function Fotos() {
  return (
    <Layout metaData={metaData}>
      <HeroCategory
        background="/img/category/bg_fotos.jpg"
        search={true}
        title="Fotos"
        desc="La magia en cada imagen"
        layer={{
          background:
            "linear-gradient(0deg, rgba(0,0,0,.7) 0%, rgba(0,0,0,0.3) 49%, rgba(0,0,0,0) 100%)",
          backgroundBlendMode: "multiply",
        }}
      />
      <Categories title="fotos" categories={categories} />
      <section className={`${styles.Section}`}>
        <div className="container">
          <TitleSection text={"Colección de fotos."} />
          <div className="text-center mb-4">
            <ButtonLink text={"Ver todos"} color={"coral"} size={"m"} />
          </div>
          <div>
            <Slider>
              <CardGrid items={images.photo_example} />
              <CardGrid items={images.photo_exampleWith4Images} />
              <CardGrid items={images.photo_example} />
              <CardGrid items={images.photo_example} />
              <CardGrid items={images.photo_exampleWith4Images} />
            </Slider>
          </div>
        </div>
      </section>
      <PopularAuthors />
      <PlanSection />
    </Layout>
  );
}
