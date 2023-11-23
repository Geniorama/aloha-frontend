import CollectionsBanner from "@/components/CollectionsBanner/CollectionsBanner";
import FilterOptions from "@/components/FilterOptions/FilterOptions";
import GridGallery from "@/components/GridGallery/GridGallery";
import Layout from "@/components/Layout/Layout";
import { capitalizeFirstLetter, slugify } from "@/helpers/helpers";
import search from "@/services/search.service";
import styles from "@/styles/Collections.module.css";
import collections from "@/data/collections.json";
import { useEffect, useState } from "react";
import getMediaData from "@/services/product.service";

function CollectionPage({ name, sources }) {
  const [images, setImages] = useState([]);
  const titleBanner = name ? capitalizeFirstLetter(name) : "Fotos de stock";
  const title = name ? `Colección ${name}.` : "Todas las colecciones.";
  useEffect(() => {
    getMediaData(sources).then((res) => {
      const data = [];
      Object.entries(res).forEach(
        ([key, value]) => key.includes("item") && data.push(value)
      );
      setImages(data);
    });
  }, [sources]);
  console.log(images.slice(0, 3));
  return (
    <Layout metaData={{ title: "Fotos | Listado colecciones" }}>
      <CollectionsBanner
        title={titleBanner}
        cover={images ? images[0].huge_thumb : null}
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
    const collection =
      collections.find((item) => slugify(item.name) === query.collection) || {};
    return { props: { ...collection } };
  } catch (error) {
    return { props: {} };
  }
};

export default CollectionPage;
