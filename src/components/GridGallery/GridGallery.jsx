import Image from "next/image";
import styles from "./GirdGallery.module.css";
import Link from "next/link";

export default function GridGallery({ images = [] }) {
  const getOrientation = (image) => {
    const sizes = {
      horizontal: {
        width: 1000,
        height: 250,
      },
      vertical: {
        width: 1000,
        height: 450,
      },
      square: { width: 1000, height: 400 },
    };
    if (parseInt(image.width) > parseInt(image.height)) return sizes.horizontal;
    if (parseInt(image.width) === parseInt(image.height)) return sizes.square;
    if (parseInt(image.width) < parseInt(image.height)) return sizes.vertical;
  };
  return (
    <div className={`container ${styles.GridGallery}`}>
      {images.map((image, index) => {
        const orientation = getOrientation(image);
        return (
          <Link key={image.id} href={`/producto/${image.id}`}>
            <Image
              key={index}
              src={image.huge_thumb}
              className={styles.Image}
              width={orientation?.width}
              height={orientation?.height}
              quality={100}
              alt=""
              priority
              objectPosition="top"
            />
          </Link>
        );
      })}
    </div>
  );
}
