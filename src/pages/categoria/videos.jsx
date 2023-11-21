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

import categories from "@/data/categories";

import collections from "@/data/collections.json";
import CollectionCard from "@/components/CollectionCard/CollectionCard";

const metaData = {
  title: "Categoría | Videos",
};

export default function Videos() {
  return (
    <Layout metaData={metaData}>
      <HeroCategory
        background="/img/category/bg_videos.png"
        search={true}
        title="Videos"
        desc="Más de 13.500 videos de alta calidad"
        layer={{
          background:
            "linear-gradient(0deg, rgba(0,0,0,.7) 0%, rgba(0,0,0,0.3) 49%, rgba(0,0,0,0) 100%)",
          backgroundBlendMode: "multiply",
        }}
      />
      <Categories title="videos" path="videos" categories={categories.videos} />
      <section className={`${styles.Section}`}>
        <div className="container">
          <TitleSection text={"Colección de videos."} />
          <div className="text-center mb-4">
            <ButtonLink text={"Ver todos"} color={"coral"} size={"m"} />
          </div>
          <div>
            <Slider>
              {collections.map((collection) => (
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
      <PopularAuthors type="dark" />
      <PlanSection />
    </Layout>
  );
}
