import FilterOptions from "@/components/FilterOptions/FilterOptions";
import GridGallery from "@/components/GridGallery/GridGallery";
import HeroAuthor from "@/components/HeroAuthor/HeroAuthor";
import Layout from "@/components/Layout/Layout";
import search from "@/services/search.service";
import { useEffect, useState } from "react";

const metaData = {
  title: "Autor",
};

function AuthorPage({ images }) {
  const [author, setAuthor] = useState({});
  useEffect(() => {
    const item = images.length ? images[0] : {};
    if (item) setAuthor({ username: item.username, avatar: item.avatar });
  }, [images]);
  return (
    <Layout metaData={metaData}>
      <HeroAuthor author={author} />
      <FilterOptions />
      <GridGallery images={images} />
    </Layout>
  );
}

export const getServerSideProps = async (ctx) => {
  const query = ctx.params.autor;
  const response = await search("", {
    search_user: query,
    search_limit: 10,
  });
  const images = response?.result ?? {};
  return { props: { images } };
};

export default AuthorPage;
