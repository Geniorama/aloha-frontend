import { Fragment, useEffect, useState } from "react";

import styles from "@/styles/Product.module.css";
import Link from "next/link";
import Image from "next/image";

export default function SimilarProducts({ product }) {
  const [items, setItems] = useState({
    series: [],
    similar: [],
  });

  useEffect(() => {
    if (!items.series.length || !items.similar.length) {
      const series = [];
      const similar = [];

      Object.entries(product.series).forEach(([key, value]) =>
        series.push(value)
      );

      Object.entries(product.similar).forEach(([key, value]) =>
        similar.push(value)
      );
      if (series.length || similar.length) setItems({ series, similar });
    }
  }, [items, product]);
  return (
    <Fragment>
      <section className="container p-4">
        <h5 className={styles.gallery__title}>Misma serie:</h5>
        <div className={styles.gallery}>
          {items.series.map((serie) => (
            <Link key={serie.id} href={`/producto/${serie.id}`}>
              <Image
                unoptimized
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
                unoptimized
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
    </Fragment>
  );
}
