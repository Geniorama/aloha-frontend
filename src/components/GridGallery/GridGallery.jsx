import Image from "next/image";
import styles from "./GirdGallery.module.css";
import Link from "next/link";

export default function GridGallery({ images = [] }) {
  return (
    <div className={`container ${styles.GridGallery}`}>
      {images.map((image, index) => (
        <Link key={image.id} href={`/producto/${image.id}`}>
          <Image
            key={index}
            src={image.url_big}
            className={styles.Image}
            width={1000}
            quality={100}
            height={image.height * 0.1 < 600 ? image.height * 0.1 : 500}
            alt=""
          />
        </Link>
      ))}
    </div>
  );
}
