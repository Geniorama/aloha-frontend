import Layout from "@/components/Layout/Layout";
import search from "@/services/search.service";
import styles from "@/styles/Search.module.css";
import Image from "next/image";
import { Fragment } from "react";

const metaData = {
  title: "Resultado",
};

export default function SearchPhoto({ result = [] }) {
  console.log(result);
  return (
    <Layout metaData={metaData}>
      <main className={styles.content}>
        {result.map((item) => (
          <div key={item.id}>
            <Image
              src={item.large_thumb || ""}
              className={styles.image}
              width={item.width}
              height={item.height * 0.1 < 600 ? item.height * 0.1 : 600}
              alt=""
            />
            {console.log(item.height, item.height * 0.1)}
          </div>
        ))}
      </main>
    </Layout>
  );
}

export const getServerSideProps = async ({ params }) => {
  try {
    const query = params.keywaord || "";
    const response = await search(query);
    const result = response?.result ?? [];

    return { props: { result } };
  } catch (error) {
    return { props: { result: [] } };
  }
};
