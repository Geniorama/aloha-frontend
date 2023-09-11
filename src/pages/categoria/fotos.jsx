import Layout from "@/components/Layout/Layout";
import HeroCategory from "@/components/Hero/HeroCategory/HeroCategory";
import bgFotos from "../../../public/img/category/bg_fotos.jpg";
import TitleSection from "@/components/TitleSection/TitleSection";
import styles from "@/styles/Category.module.css";
import ButtonLink from "@/components/ButtonLink/ButtonLink";
import CardGrid from "@/components/CardGrid/CardGrid";

import PlanSection from "@/components/PlanSection/PlanSection";
import PopularAuthors from "@/components/PopularAuthors/PopularAuthors";
import Slider from "@/components/Slider/Slider";
import Categories from "@/components/Categories/Categories";
import {
  photo_categories,
  photo_exampleImages,
  photo_exampleWith4Images,
} from "@/data";

const metaData = {
  title: "Categoría | Fotos",
};

export default function Fotos() {
  return (
    <Layout metaData={metaData}>
      <div className="container-fluid">
        <HeroCategory
          background={bgFotos.src}
          search={true}
          title="Fotos"
          desc="La magia en cada imagen"
          layer={{
            background:
              "linear-gradient(0deg, rgba(0,0,0,.7) 0%, rgba(0,0,0,0.3) 49%, rgba(0,0,0,0) 100%)",
            backgroundBlendMode: "multiply",
          }}
        />
      </div>
      <Categories categories={photo_categories} />
      <section className={`${styles.Section}`}>
        <div className="container">
          <TitleSection text={"Colección de fotos."} />
          <div className="text-center">
            <ButtonLink text={"Ver todos"} color={"coral"} size={"m"} />
          </div>
          <div>
            <Slider>
              <CardGrid items={photo_exampleImages} />
              <CardGrid items={photo_exampleWith4Images} />
              <CardGrid items={photo_exampleImages} />
              <CardGrid items={photo_exampleImages} />
              <CardGrid items={photo_exampleWith4Images} />
            </Slider>
          </div>
        </div>
      </section>
      <PopularAuthors />
      <PlanSection />
    </Layout>
  );
}
