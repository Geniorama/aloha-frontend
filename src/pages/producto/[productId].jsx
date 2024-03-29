import ButtonLink from "@/components/ButtonLink/ButtonLink";
import Layout from "@/components/Layout/Layout";
import ProductChooseItem from "@/components/Product/ProductChooseItem/ProductChooseItem";
import ProductChooseSize from "@/components/Product/ProductChooseSize/ProductChooseSize";
import SimilarProducts from "@/components/SimilarProducts/SimilarProducts";
import { api, downloadSource } from "@/helpers/helpers";
import stripe from "@/lib/stripe";
import { saveDeal } from "@/services/hubspot.service";
import getMediaData from "@/services/product.service";
import { getMedia } from "@/services/purchase.service";
import { getSubscriptions } from "@/services/subaccount";
import { login } from "@/services/user.service";
import styles from "@/styles/Product.module.css";
import {
  faArrowRight,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const metaData = {
  title: "Producto",
};

function ProductPage({ data: product, session_id, file_name, downloadLink }) {
  const [selectedSize, setSelectedSize] = useState("s");
  const router = useRouter();

  useEffect(() => {
    if (file_name && downloadLink) downloadSource(file_name, downloadLink);
  }, [file_name, downloadLink]);

  const subaccount_id = getCookie("user_id");

  const handleSelectSize = (size) => setSelectedSize(size);

  const handleDownloadImage = async () => {
    if (!session_id) return router.push("/signin");
    const subscriptions = await getSubscriptions({ session_id, subaccount_id });

    const name = `${product.title}${product.original_extension}`;
    if (!subscriptions.length)
      return stripe({
        media_name: name,
        media_id: product.id,
        media_option: selectedSize,
        client_reference_id: subaccount_id,
        url: `/producto/${product.id}`,
      });

    const purhcase = await getMedia({
      session_id,
      media_id: product.id,
      media_license: "standard",
      media_option: selectedSize,
    });

    if (purhcase) return downloadSource(name, purhcase.downloadLink);
  };

  if (!product) return <div>Cargando...</div>;

  return (
    <Layout metaData={metaData}>
      <section className="container px-5">
        <h2 className={styles.title}>{product.title} </h2>
      </section>
      <section className={`container px-5 ${styles.info__container}`}>
        {console.log(product.mp4)}
        <div className={styles.hero}>
          {product.mp4 ? (
            <video src={product.mp4} controls width="100%" height="100%" />
          ) : (
            <Image 
              unoptimized
              src={product.url_big}
              className={styles.cover}
              width={1000}
              height={1000}
              quality={100}
              style={{ objectFit: "cover", objectPosition: "center" }}
              alt=""
            />
          )}
        </div>
        <div className={styles.options}>
          <ProductChooseSize
            active={selectedSize}
            sizes={product.sizes}
            onSelectSize={handleSelectSize}
          />
          <div className={`mt-2 w-100 d-none d-lg-block ${styles.info__nav}`}>
            <button className={styles.button} onClick={handleDownloadImage}>
              Descargar imagen
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_48_55)">
                  <path
                    d="M22.6668 9.33301L9.3335 22.6663"
                    stroke="#fff"
                    strokeWidth="2.66667"
                  />
                  <path
                    d="M10.6665 9.33301H22.6665V21.333"
                    stroke="#fff"
                    strokeWidth="2.66667"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_48_55">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
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
              <Image unoptimized src="/Copy-blue.svg" width={18} height={18} alt="" />
            </Link>
          </div>
        </div>
        <div className={`mt-5 ${styles.info__nav}`}>
          <button className={styles.button} onClick={handleDownloadImage}>
            Descargar imagen
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_48_55)">
                <path
                  d="M22.6668 9.33301L9.3335 22.6663"
                  stroke="#fff"
                  strokeWidth="2.66667"
                />
                <path
                  d="M10.6665 9.33301H22.6665V21.333"
                  stroke="#fff"
                  strokeWidth="2.66667"
                />
              </g>
              <defs>
                <clipPath id="clip0_48_55">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
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
      <SimilarProducts product={product} />
    </Layout>
  );
}

export async function getServerSideProps({ params, query, ...ctx }) {
  try {
    let transaction;
    let purchase;
    const productId = params.productId || "";

    const data =
      (await getMediaData(productId, {
        full_similar: true,
        search_layout: 1,
      })) || {};

    const auth = (await login()) || {};
    const session_id = auth.sessionid ?? "";
    const sp_session_id = query.session_id;

    const email = getCookie("email", ctx);

    if (sp_session_id) {
      const res = await fetch(
        `https://api.stripe.com/v1/checkout/sessions/${sp_session_id}`,
        {
          method: "GET",
          headers: {
            Authorization: `bearer ${process.env.STRIPE_SECRET_KEY}`,
          },
        }
      );

      transaction = await res.json();

      purchase = await getMedia({
        session_id,
        media_id: transaction.metadata.media_id,
        media_license: "standard",
        media_option: transaction.metadata.media_option,
      });

      if (purchase.downloadLink) {
        await saveDeal({ email, productId, transaction: sp_session_id });
      }
    }

    return {
      props: {
        data,
        session_id,
        file_name: transaction ? transaction.metadata.media_name : false,
        downloadLink: purchase ? purchase.downloadLink : false,
      },
    };
  } catch (error) {
    return { props: {} };
  }
}

export default ProductPage;
