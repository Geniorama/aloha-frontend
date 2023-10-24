import CollectionsBanner from "@/components/CollectionsBanner/CollectionsBanner";
import FilterOptions from "@/components/FilterOptions/FilterOptions";
import GridGallery from "@/components/GridGallery/GridGallery";
import Layout from "@/components/Layout/Layout";
import { capitalizeFirstLetter } from "@/helpers/helpers";
import search from "@/services/search.service";
import styles from "@/styles/Collections.module.css";

function CollectionsPage({ images, query }) {
  const titleBanner = query?.source
    ? capitalizeFirstLetter(query.source)
    : "Fotos de stock";
  const title = query.source
    ? `Colección ${query.source}.`
    : "Todas las colecciones.";
  return (
    <Layout metaData={{ title: "Fotos | Listado colecciones" }}>
      <CollectionsBanner
        title={titleBanner}
        category="illustrations"
        source={query?.source}
      />
      <div className="container mt-5">
        <h2 className={styles.Title}>{title}</h2>
        <FilterOptions />
        <GridGallery images={images} />
      </div>
    </Layout>
  );
}

export const getServerSideProps = async ({ query }) => {
  try {
    const response = await search(query?.source ?? "fotos", {
      search_limit: 10,
    });
    const images = response?.result ?? [];
    return { props: { images, query } };
  } catch (error) {
    return { props: {} };
  }
};

export default CollectionsPage;
