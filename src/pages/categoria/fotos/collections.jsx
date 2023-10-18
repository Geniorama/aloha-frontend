import FilterOptions from "@/components/FilterOptions/FilterOptions";
import GridGallery from "@/components/GridGallery/GridGallery";
import Layout from "@/components/Layout/Layout";
import search from "@/services/search.service";
import styles from "@/styles/Collections.module.css";

function CollectionsPage({ images }) {
  return (
    <Layout metaData={{ title: "Fotos | Listado colecciones" }}>
      <div className="container">
        <h2 className={styles.Title}>Todas las colecciones.</h2>
        <FilterOptions />
        <GridGallery images={images} />
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  try {
    const response = await search("fotos", {
      search_limit: 10,
    });
    const images = response?.result ?? [];
    return { props: { images } };
  } catch (error) {
    return { props: {} };
  }
};

export default CollectionsPage;
