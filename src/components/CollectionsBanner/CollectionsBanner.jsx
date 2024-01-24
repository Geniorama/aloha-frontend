import { Fragment } from "react";
import Image from "next/image";
import Slider from "../Slider/Slider";
import styles from "./CollectionsBanner.module.css";
import Link from "next/link";
import subcategories from "@/data/subcategories";
import subcategories_vectores from "@/data/subcategories_vector";
import subcategories_illustrations from "@/data/subcategories_illustrations";
import subcategories_videos from "@/data/subcategories_videos";

const subcategoriesList = {
  photos: subcategories,
  illustrations: subcategories_illustrations,
  vectors: subcategories_vectores,
  videos: subcategories_videos,
};

export default function CollectionsBanner({ title, cover }) {
  return (
    <div className="container">
      {cover ? (
        <div style={{ height: "200px", width: "100%", position: "relative" }}>
          <Image 
            unoptimized src={cover} fill alt="" quality={100} objectFit="cover" />
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
          {/* {category ? (
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
                      unoptimized
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
          ) : null} */}
        </Fragment>
      )}
    </div>
  );
}
