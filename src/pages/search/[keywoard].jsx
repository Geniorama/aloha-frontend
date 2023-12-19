import CateogiresBanner from "@/components/CategoriesBanner/CategoriesBanner";
import FilterOptions from "@/components/FilterOptions/FilterOptions";
import GridGallery from "@/components/GridGallery/GridGallery";
import Layout from "@/components/Layout/Layout";
import search, { getRelated } from "@/services/search.service";
import { useEffect } from "react";

const metaData = {
  title: "Resultado",
};

const search_type = {
  todas: {},
  fotos: {
    search_vector: false,
    search_video: false,
  },
  vectores: {
    search_photo: false,
    search_video: false,
  },
  ilustraciones: {
    illustration: 1,
  },
  videos: {
    search_photo: false,
    search_vector: false,
    search_video: true,
  },
};

export default function SearchPage({ result = [] }) {
  const get = async () =>
    await search("perro", {
      search_limit: 30,
      ...search_type["videos"],
      full_info: true,
    });

  useEffect(() => {
    get();
  }, []);
  return (
    <Layout metaData={metaData}>
      <CateogiresBanner category="photos" />
      <FilterOptions />
      <GridGallery images={result} />
    </Layout>
  );
}

export const getServerSideProps = async ({ params, query }) => {
  try {
    const param = params.keywoard || "";
    const response = query.related_type
      ? await getRelated(query.related_type, params.keywoard)
      : await search(param, {
          search_limit: 30,
          ...search_type[query.category],
          full_info: true,
        });
    const result = response ?? [];
    console.log(result);
    return { props: { result } };
  } catch (error) {
    return { props: { result: [] } };
  }
};
