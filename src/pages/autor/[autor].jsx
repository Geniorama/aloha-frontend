import FilterOptions from "@/components/FilterOptions/FilterOptions";
import GridGallery from "@/components/GridGallery/GridGallery";
import HeroAuthor from "@/components/HeroAuthor/HeroAuthor";
import Layout from "@/components/Layout/Layout";

const metaData = {
  title: "Autor",
};

function AuthorPage() {
  return (
    <Layout metaData={metaData}>
      <HeroAuthor />
      <FilterOptions />
      <GridGallery />
    </Layout>
  );
}

export default AuthorPage;
