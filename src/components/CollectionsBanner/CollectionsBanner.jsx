import Image from "next/image";
import Slider from "../Slider/Slider";
import categories from "@/data/categories";
import subcategories from "@/data/subcategories";
import styles from "./CollectionsBanner.module.css";
import Link from "next/link";
import { Fragment } from "react";

export default function CollectionsBanner({ title, category, source }) {
  const items = [];
  for (const [key, value] of Object.entries(subcategories)) {
    value.map((item) => items.push({ ...item, category: key }));
  }
  const banner = items.find((item) => source === item.text)?.image || "";
  return (
    <div className="container">
      {banner ? (
        <div style={{ height: "200px", width: "100%", position: "relative" }}>
          <Image src={banner} fill alt="" objectFit="cover" />
        </div>
      ) : (
        <Fragment>
          {title ? (
            <div>
              <h4 className={styles.Title}>{title} de fondo.</h4>
              <p className={styles.Caption}>
                7.561.497 imágenes de fondo están disponibles bajo una licencia
                sin royalities
              </p>
            </div>
          ) : null}
          {category ? (
            <Slider autoplay={false}>
              {items.map((item, index) => (
                <div
                  key={index}
                  style={{ padding: "100px", position: "relative" }}
                >
                  <Link
                    href={`/categoria/fotos/collections?source=${item.text}`}
                  >
                    <Image
                      src={item.image}
                      width={250}
                      height={100}
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                        margin: "0 8px",
                        filter: "brightness(0.6)",
                      }}
                      alt=""
                    />
                    <div
                      style={{
                        height: "100px",
                        position: "absolute",
                        top: 0,
                        width: "250px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <h5 className="m-0 text-white">{item.text}</h5>
                    </div>
                  </Link>
                </div>
              ))}
            </Slider>
          ) : null}
        </Fragment>
      )}
    </div>
  );
}
