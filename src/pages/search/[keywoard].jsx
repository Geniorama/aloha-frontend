import CateogiresBanner from "@/components/CategoriesBanner/CategoriesBanner";
import FilterOptions from "@/components/FilterOptions/FilterOptions";
import GridGallery from "@/components/GridGallery/GridGallery";
import Layout from "@/components/Layout/Layout";
import search, { getRelated } from "@/services/search.service";

const metaData = {
  title: "Resultado",
};

export default function SearchPage({ result = [] }) {
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
    const response = query.similar
      ? await getRelated("similar", params.keywoard)
      : await search(param, { search_limit: 30, full_info: true });
    const result = response ?? [];
    return { props: { result } };
  } catch (error) {
    return { props: { result: [] } };
  }
};
