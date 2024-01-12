import CateogiresBanner from "@/components/CategoriesBanner/CategoriesBanner";
import FilterOptions from "@/components/FilterOptions/FilterOptions";
import GridGallery from "@/components/GridGallery/GridGallery";
import Layout from "@/components/Layout/Layout";
import PlayerListTrends from "@/components/PlayerListTrends/PlayerListTrends";
import { search_type } from "@/helpers/helpers";
import { getPlayList } from "@/services/musicfx.service";
import search, { getRelated } from "@/services/search.service";

const metaData = {
  title: "Resultado",
};

export default function SearchPage({ result = [], category }) {
  console.log(result);
  return (
    <Layout metaData={metaData}>
      <CateogiresBanner category="photos" />
      <FilterOptions />
      {category === "musica" ? (
        <div className="container py-1">
          <PlayerListTrends playlist={result} />
        </div>
      ) : (
        <GridGallery images={result} />
      )}
    </Layout>
  );
}

export const getServerSideProps = async ({ params, query }) => {
  try {
    const param = params.keywoard || "";
    if (query.category === "musica") {
      const playlist =
        (await getPlayList(param, {
          search_instrument: 2,
        })) || [];
      return { props: { result: playlist, category: query.category } };
    } else {
      const response = query.related_type
        ? await getRelated(query.related_type, params.keywoard)
        : await search(param, {
            search_limit: 30,
            ...search_type[query.category],
            full_info: true,
          });
      const result = response ?? [];
      return { props: { result } };
    }
  } catch (error) {
    return { props: { result: [] } };
  }
};
