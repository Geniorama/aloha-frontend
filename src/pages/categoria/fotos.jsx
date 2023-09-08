import Layout from "@/components/Layout/Layout";
import HeroCategory from "@/components/Hero/HeroCategory/HeroCategory";
import bgFotos from "../../../public/img/category/bg_fotos.jpg";
import TitleSection from "@/components/TitleSection/TitleSection";
import HomeStyles from "@/styles/Home.module.css";
import CardCategory from "@/components/CardCategory/CardCategory";
import styles from "@/styles/Category.module.css";
import img_trabajo from "../../../public/img/category/cat-trabajo.png";
import img_flores from "../../../public/img/category/cat-flores.png";
import img_abstracto from "../../../public/img/category/cat-abstracto.png";
import img_paisaje from "../../../public/img/category/cat-paisaje.png";
import img_comida from "../../../public/img/category/cat-comida.png";
import img_arquitectura from "../../../public/img/category/cat-arquitectura.png";
import img_relajado from "../../../public/img/category/cat-relajado.png";
import img_amigos from "../../../public/img/category/cat-amigos.png";
import img_backgrounds from "../../../public/img/category/cat-background.png";
import ButtonLink from "@/components/ButtonLink/ButtonLink";
import CardGrid from "@/components/CardGrid/CardGrid";

import Image from "next/image";
import PlanSection from "@/components/PlanSection/PlanSection";
import PopularAuthors from "@/components/PopularAuthors/PopularAuthors";
import Slider from "@/components/Slider/Slider";
import Categories from "@/components/Categories/Categories";

const metaData = {
  title: "Categoría | Fotos",
};

const exampleImages = [
  "https://images.unsplash.com/photo-1693443760721-93025350bf03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
  "https://images.unsplash.com/photo-1693443760721-93025350bf03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
  "https://images.unsplash.com/photo-1693443760721-93025350bf03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
];

const exampleWith4Images = [
  "https://images.unsplash.com/photo-1693661925821-bc241be1cf69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
  "https://images.unsplash.com/photo-1693661925821-bc241be1cf69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
  "https://images.unsplash.com/photo-1693661925821-bc241be1cf69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
  "https://images.unsplash.com/photo-1693661925821-bc241be1cf69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
];

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
      <Categories />
      <section className={`${styles.Section}`}>
        <div className="container">
          <TitleSection text={"Colección de fotos."} />
          <div className="text-center">
            <ButtonLink text={"Ver todos"} color={"coral"} size={"m"} />
          </div>
          <div>
            <Slider>
              <CardGrid items={exampleImages} />
              <CardGrid items={exampleWith4Images} />
              <CardGrid items={exampleImages} />
              <CardGrid items={exampleImages} />
              <CardGrid items={exampleWith4Images} />
            </Slider>
          </div>
        </div>
      </section>
      <PopularAuthors />
      <PlanSection />
    </Layout>
  );
}
