import ButtonLink from "@/components/ButtonLink/ButtonLink";
import Layout from "@/components/Layout/Layout";
import ProductChooseItem from "@/components/Product/ProductChooseItem/ProductChooseItem";
import ProductChooseSize from "@/components/Product/ProductChooseSize/ProductChooseSize";
import { api } from "@/helpers/helpers";
import styles from "@/styles/Product.module.css";
import {
  faArrowRight,
  faClone,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const metaData = {
  title: "Producto",
};

const getImage = async (media) => {
  try {
    const response = await axios.post(`${api}`, null, {
      params: {
        dp_command: "getMediaData",
        dp_media_id: media ?? "222637964",
        dp_apikey: "79a81d2c27320915317994339a8b0589fe45c6ad",
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

  useEffect(() => {
    if (product) {
      if (!items.series.length)
        getImage(product.series).then((data) => {
          const series = Object.entries(data)
            .filter((item) => item[0].includes("item"))
            .map((item) => item[1]);
          setItems({ ...items, series });
        });
      if (!items.similar.length)
        getImage(product.similar).then((data) => {
          const similar = Object.entries(data)
            .filter((item) => item[0].includes("item"))
            .map((item) => item[1]);
          setItems({ ...items, similar });
        });
    }
  }, [items, product]);

  if (!product) return <div>Cargando...</div>;
  return (
    <Layout metaData={metaData}>
      <section className="container px-4">
        <h2 className={styles.title}>{product.title} </h2>
      </section>
      <section className={`container px-4 ${styles.info__container}`}>
        <div className={styles.hero}>
          <Image
            src={product.large_thumb}
            className={styles.cover}
            width={100}
            height={100}
            alt=""
          />
        </div>
        <div className={styles.options}>
          <ProductChooseSize sizes={product.sizes} />
          <div className={`mt-2 w-100 d-none d-lg-block ${styles.info__nav}`}>
            <button className={styles.button}>
              <ButtonLink text="Descargar imagen" color="white" />
            </button>
            <Link href="#" className={`${styles.searchLink} mt-4 p-4 p-lg-0`}>
              <span>Empezar prueba gratis</span>
            </Link>
          </div>
        </div>
        <div className={styles.info__items}>
          <Link href="#" className={styles.searchLink}>
            <span>Buscar imágenes similares</span>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className={styles.searchLink__icon}
            />
          </Link>
          <div>
            <h6>Colaborador</h6>
            <Link href="#">
              <span>Paul Steven</span>
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
          <button className={styles.button}>
            <span>Descargar imagen</span>
            {/* <FontAwesomeIcon icon={faArrowRight} /> */}
          </button>
          <Link href="#" className={`${styles.searchLink} p-4`}>
            <span>Empezar prueba gratis</span>
          </Link>
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
            {product.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="container p-4">
        <h5 className={styles.gallery__title}>Misma serie:</h5>
        <div className={styles.gallery}>
          {items.series.map((serie) => (
            <Image
              key={serie.id}
              src={serie.large_thumb}
              width={100}
              height={100}
              alt=""
            />
          ))}
        </div>
        <button className={styles.button_small}>
          <span>Ver más</span>
        </button>
      </section>
      <section className="container p-4">
        <h5 className={styles.gallery__title}>Imágenes similares:</h5>
        <div className={styles.gallery}>
          {items.similar.map((similar) => (
            <Image
              key={similar.id}
              src={similar.large_thumb}
              width={100}
              height={100}
              alt=""
            />
          ))}
        </div>
        <button className={styles.button_small}>
          <span>Ver más</span>
        </button>
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          productId: "222637964",
        },
      }, // See the "paths" section below
    ],
    fallback: true, // false or "blocking"
  };
}

export async function getStaticProps() {
  const data = (await getImage()) || {};

  return { props: { data }, revalidate: 1 };
}

export default ProductPage;
