import HeroCategory from "@/components/Hero/HeroCategory/HeroCategory";
import Layout from "@/components/Layout/Layout";
import PlanSection from "@/components/PlanSection/PlanSection";
import styles from "@/styles/Editorial.module.css";
import categories from "@/data/categories";
import EditorialItemCard from "@/components/Categories/Editorial/EditorialItemCard/EditorialItemCard";
import PopularSearches from "@/components/PupularSearches/PopularSearches";

const metaData = {
  title: "Categoría | Editorial",
};

export default function EditorialPage() {
  return (
    <Layout metaData={metaData}>
      <HeroCategory
        background="/img/category/bg_fotos.jpg"
        search
        title="500.000 fotos editoriales"
        desc="Captura la esencia de la actualidad en cada fotografía"
        layer={{
          background:
            "linear-gradient(0deg, rgba(0,0,0,.7) 0%, rgba(0,0,0,0.3) 49%, rgba(0,0,0,0) 100%)",
          backgroundBlendMode: "multiply",
        }}
      />
      <section className={styles.info}>
        <h2>
          Nuevas imágenes editoriales <span>sin royalities</span>
        </h2>
        <p>
          Inyecte vitalidad en sus noticias con fotos editoriales de alta
          calidad que ilustran los eventos más excitantes de todo el mundo.
          <br />
          <br />
          Nuestras fotos están seleccionadas especialmente para periodistas,
          editores, blogueros, agencias de prensa y propietarios de sitios web.
        </p>
      </section>
      <section className={styles.categories}>
        {categories.editorial.map((item, index) => (
          <EditorialItemCard key={index} {...item} />
        ))}
      </section>
      <PlanSection />
      <PopularSearches />
    </Layout>
  );
}
