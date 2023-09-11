import ButtonLink from "@/components/ButtonLink/ButtonLink";
import CardGrid from "@/components/CardGrid/CardGrid";
import Categories from "@/components/Categories/Categories";
import HeroCategory from "@/components/Hero/HeroCategory/HeroCategory";
import Layout from "@/components/Layout/Layout";
import PlanSection from "@/components/PlanSection/PlanSection";
import PopularAuthors from "@/components/PopularAuthors/PopularAuthors";
import Slider from "@/components/Slider/Slider";
import TitleSection from "@/components/TitleSection/TitleSection";
import categories from "@/data/categories/illustration.json";
import images from "@/data/images.json";
import styles from "@/styles/Category.module.css";

const metaData = {
  title: "Categoría | Ilustraciones",
};

function Ilustrations() {
  return (
    <Layout metaData={metaData}>
      <HeroCategory
        background="https://plus.unsplash.com/premium_photo-1682124752476-40db22034a58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"
        search={true}
        title="Ilustraciones"
        desc="Cada trazo cuenta una historia"
        layer={{
          background:
            "linear-gradient(0deg, rgba(0,0,0,.7) 0%, rgba(0,0,0,0.3) 49%, rgba(0,0,0,0) 100%)",
          backgroundBlendMode: "multiply",
        }}
      />
      <Categories title="ilustraciones" categories={categories} />
      <section className={`${styles.Section}`}>
        <div className="container">
          <TitleSection text={"Colección de ilustraciones."} />
          <div className="text-center">
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

export default Ilustrations;
