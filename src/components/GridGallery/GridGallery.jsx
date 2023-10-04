import Image from "next/image";
import styles from "./GirdGallery.module.css";

const images = [
  {
    source: "/img/category/bg_fotos.jpg",
    height: 400,
  },
  {
    source: "/img/category/bg_fotos.jpg",
    height: 200,
  },
  {
    source: "/img/category/bg_fotos.jpg",
    height: 400,
  },
  {
    source: "/img/category/bg_fotos.jpg",
    height: 200,
  },
  {
    source: "/img/category/bg_fotos.jpg",
    height: 400,
  },
  {
    source: "/img/category/bg_fotos.jpg",
    height: 200,
  },
];

export default function GridGallery() {
  return (
    <div className={`container ${styles.GridGallery}`}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.source}
          className={styles.Image}
          width={200}
          height={image.height}
          alt=""
        />
      ))}
    </div>
  );
}
