import Categories from "@/components/Categories/Categories";
import HeroCategory from "@/components/Hero/HeroCategory/HeroCategory";
import Layout from "@/components/Layout/Layout";
import PlanSection from "@/components/PlanSection/PlanSection";
import categories from "@/data/categories";

const metaData = {
  title: "Categoría | Vectores",
};

export default function Vectores() {
  return (
    <Layout metaData={metaData}>
      <HeroCategory
        background="/img/category/bg-vectores.jpg"
        search={true}
        title="Vectores"
        category="vectores"
        desc="Crea formas precisas y líneas perfectas"
        layer={{
          background:
            "linear-gradient(0deg, rgba(0,0,0,.7) 0%, rgba(0,0,0,0.3) 49%, rgba(0,0,0,0) 100%)",
          backgroundBlendMode: "multiply",
        }}
      />
      <Categories
        title="vectores"
        path="vectores"
        categories={categories.vectors}
      />
      <PlanSection />
    </Layout>
  );
}
