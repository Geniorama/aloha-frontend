import Layout from "@/components/Layout/Layout";
import search from "@/services/search.service";
import styles from "@/styles/Search.module.css";
import Image from "next/image";
import Link from "next/link";

const metaData = {
  title: "Resultado",
};

export default function SearchPage({ result = [] }) {
  return (
    <Layout metaData={metaData}>
      <main className={styles.content}>
        {result.map((item) => (
          <Link key={item.id} href={`/producto/${item.id}`}>
            <Image
              src={item.url_big || ""}
              className={styles.image}
              width={item.width}
              height={item.height * 0.1 < 600 ? item.height * 0.1 : 500}
              alt=""
            />
          </Link>
        ))}
      </main>
    </Layout>
  );
}

export const getServerSideProps = async ({ params }) => {
  try {
    const query = params.keywoard || "";
    const response = await search(query, { search_limit: 10 });
    const result = response?.result ?? [];
    console.log(query);
    return { props: { result } };
  } catch (error) {
    return { props: { result: [] } };
  }
};
