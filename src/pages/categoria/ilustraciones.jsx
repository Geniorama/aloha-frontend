import ButtonLink from "@/components/ButtonLink/ButtonLink";
import CardGrid from "@/components/CardGrid/CardGrid";
import Categories from "@/components/Categories/Categories";
import CollectionCard from "@/components/CollectionCard/CollectionCard";
import HeroCategory from "@/components/Hero/HeroCategory/HeroCategory";
import Layout from "@/components/Layout/Layout";
import PlanSection from "@/components/PlanSection/PlanSection";
import PopularAuthors from "@/components/PopularAuthors/PopularAuthors";
import Slider from "@/components/Slider/Slider";
import TitleSection from "@/components/TitleSection/TitleSection";
import categories from "@/data/categories";
import images from "@/data/images.json";
import styles from "@/styles/Category.module.css";

import collections from "@/data/collections.json";

const metaData = {
  title: "Categoría | Ilustraciones",
};

function Ilustrations() {
  return (
    <Layout metaData={metaData}>
      <HeroCategory
        background="/img/category/bg-ilustrations.jpg"
        search={true}
        title="Ilustraciones"
        desc="Cada trazo cuenta una historia"
        layer={{
          background:
            "linear-gradient(0deg, rgba(0,0,0,.7) 0%, rgba(0,0,0,0.3) 49%, rgba(0,0,0,0) 100%)",
          backgroundBlendMode: "multiply",
        }}
      />
      <Categories
        title="ilustraciones"
        path="ilustraciones"
        categories={categories.illustrations}
      />
      <section className={`${styles.Section}`}>
        <div className="container">
          <TitleSection text={"Colección de ilustraciones."} />
          <div className="text-center">
            <ButtonLink text={"Ver todos"} color={"coral"} size={"m"} />
          </div>
          <div>
            <Slider>
              {collections
                .filter(
                  (item) =>
                    item.name.includes("comida") ||
                    item.name.includes("Tecnologia") ||
                    item.name.includes("Japandi Aestethic")
                )
                .map((collection) => (
                  <CollectionCard key={collection.name} {...collection} />
                ))}
            </Slider>
            {/* <Slider>
              <CardGrid items={images.photo_example} />
              <CardGrid items={images.photo_exampleWith4Images} />
              <CardGrid items={images.photo_example} />
              <CardGrid items={images.photo_example} />
              <CardGrid items={images.photo_exampleWith4Images} />
            </Slider> */}
          </div>
        </div>
      </section>
      <PopularAuthors type="secondary" />
      <PlanSection />
    </Layout>
  );
}

export default Ilustrations;
