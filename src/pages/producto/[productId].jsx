import ButtonLink from "@/components/ButtonLink/ButtonLink";
import Layout from "@/components/Layout/Layout";
import ProductChooseItem from "@/components/Product/ProductChooseItem/ProductChooseItem";
import ProductChooseSize from "@/components/Product/ProductChooseSize/ProductChooseSize";
import { api } from "@/helpers/helpers";
import getMediaData from "@/services/product.service";
import styles from "@/styles/Product.module.css";
import {
  faArrowRight,
  faClone,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { getCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const metaData = {
  title: "Producto",
};

const getImage = async (media) => {
  try {
    const response = await axios.post(`${api}`, null, {
      params: {
        dp_command: "getMediaData",
        dp_media_id: media ?? "7587996",
        dp_translate_items: true,
        dp_lang: "sp",
        dp_apikey: "79a81d2c27320915317994339a8b0589fe45c6ad",
        // dp_full_similar: true,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

function ProductPage({ data: product }) {
  const [items, setItems] = useState({
    series: [],
    similar: [],
  });

  const router = useRouter();

  const session = getCookie("session_id");

  useEffect(() => {
    if (product) {
      if (!items.series.length)
        getImage(product.series).then((data) => {
          const series = data
            ? Object.entries(data)
                .filter((item) => item[0].includes("item"))
                .map((item) => item[1])
            : [];
          setItems({ ...items, series });
        });
      if (!items.similar.length)
        getImage(product.similar).then((data) => {
          const similar = data
            ? Object.entries(data)
                .filter((item) => item[0].includes("item"))
                .map((item) => item[1])
            : [];
          setItems({ ...items, similar });
        });
    }
  }, [items, product]);

  const handleDownloadImage = () => {
    if (!session) return router.push("/signin");
  };

  if (!product) return <div>Cargando...</div>;
  return (
    <Layout metaData={metaData}>
      <section className="container px-5">
        <h2 className={styles.title}>{product.title} </h2>
      </section>
      <section className={`container px-5 ${styles.info__container}`}>
        <div className={styles.hero}>
          <Image
            src={product.url_big}
            className={styles.cover}
            width={1000}
            height={1000}
            quality={100}
            style={{ objectFit: "cover", objectPosition: "center" }}
            alt=""
          />
        </div>
        <div className={styles.options}>
          <ProductChooseSize sizes={product.sizes} />
          <div className={`mt-2 w-100 d-none d-lg-block ${styles.info__nav}`}>
            <button className={styles.button}>
              <ButtonLink
                type="submit"
                onClick={handleDownloadImage}
                text="Descargar imagen"
                color="white"
              />
            </button>
          </div>
        </div>
        <div className={styles.info__items}>
          <Link
            href={`/search/${product.id}?related_type=similar`}
            className={styles.searchLink}
          >
            <span>Buscar imágenes similares</span>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className={styles.searchLink__icon}
            />
          </Link>
          <div>
            <h6>Colaborador</h6>
            <Link href={`/autor/${product.username}`}>
              <span>{product.username}</span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className={styles.info__arrowIcon}
              />
            </Link>
          </div>
          <div>
            <h6>ID de la imagen</h6>
            <Link href="#">
              <span>{product.id}</span>
              <Image src="/Copy-blue.svg" width={18} height={18} alt="" />
            </Link>
          </div>
        </div>
        <div className={`mt-5 ${styles.info__nav}`}>
          <button
            type="button"
            className={styles.button}
            onClick={handleDownloadImage}
          >
            <span>Descargar imagen</span>
          </button>
        </div>
      </section>
      <section className={`container my-4 px-4 ${styles.description}`}>
        <div>
          <h5 className="mb-4">Información de uso</h5>
          <p>{product.description}</p>
        </div>
        <div className="mt-5 mt-lg-0">
          <h5 className="mb-4">Palabras clave</h5>
          <div className={styles.tags}>
            {product.tags &&
              product.tags.slice(0, 15).map((tag) => (
                <Link
                  key={tag}
                  href={`/search/${tag}`}
                  style={{ textDecoration: "none" }}
                >
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>
      <section className="container p-4">
        <h5 className={styles.gallery__title}>Misma serie:</h5>
        <div className={styles.gallery}>
          {items.series.map((serie) => (
            <Link key={serie.id} href={`/producto/${serie.id}`}>
              <Image
                key={serie.id}
                src={serie.large_thumb}
                width={400}
                height={400}
                quality={100}
                style={{ objectFit: "cover" }}
                alt=""
              />
            </Link>
          ))}
        </div>
        <Link
          target="_blank"
          href={`/search/${product.id}?related_type=serie`}
          style={{ textDecoration: "none" }}
        >
          <button className={styles.button_small}>
            <span>Ver más</span>
          </button>
        </Link>
      </section>
      <section className="container p-4">
        <h5 className={styles.gallery__title}>Imágenes similares:</h5>
        <div className={styles.gallery}>
          {items.similar.map((similar) => (
            <Link key={similar.id} href={`/producto/${similar.id}`}>
              <Image
                key={similar.id}
                src={similar.large_thumb}
                width={400}
                height={400}
                quality={100}
                style={{ objectFit: "cover" }}
                alt=""
              />
            </Link>
          ))}
        </div>
        <Link
          target="_blank"
          href={`/search/${product.id}?related_type=similar`}
          style={{ textDecoration: "none" }}
        >
          <button className={styles.button_small}>
            <span>Ver más</span>
          </button>
        </Link>
      </section>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const query = params.productId || "";
    const data = (await getMediaData(query)) || {};
    return { props: { data } };
  } catch (error) {
    return { props: {} };
  }
}

export default ProductPage;
