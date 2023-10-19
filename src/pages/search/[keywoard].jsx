import CateogiresBanner from "@/components/CategoriesBanner/CategoriesBanner";
import FilterOptions from "@/components/FilterOptions/FilterOptions";
import GridGallery from "@/components/GridGallery/GridGallery";
import Layout from "@/components/Layout/Layout";
import search from "@/services/search.service";

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

export const getServerSideProps = async ({ params }) => {
  try {
    const param = params.keywoard || "";

    const response = await search(param, { search_limit: 30, full_info: true });
    const result = response?.result ?? [];
    return { props: { result } };
  } catch (error) {
    return { props: { result: [] } };
  }
};
