import Image from "next/image";
import styles from "./GirdGallery.module.css";
import Link from "next/link";

export default function GridGallery({ images = [] }) {
  const getOrientation = (image) => {
    const sizes = {
      horizontal: {
        width: 400,
        height: 250,
      },
      vertical: {
        width: 250,
        height: 500,
      },
      square: { width: 400, height: 400 },
    };
    if (parseInt(image.width) > parseInt(image.height)) return sizes.horizontal;
    if (parseInt(image.width) === parseInt(image.height)) return sizes.square;
    if (parseInt(image.width) < parseInt(image.height)) return sizes.vertical;
  };
  return (
    <div className={`container ${styles.GridGallery}`}>
      {images.map((image, index) => {
        const orientation = getOrientation(image);
        console.log(
          "orientation",
          orientation,
          "width",
          image.width,
          "height",
          image.height,
          index,
          image.huge_thumb
        );
        return (
          <Link key={image.id} href={`/producto/${image.id}`}>
            <Image
              key={index}
              src={image.huge_thumb}
              objectFit="cover"
              objectPosition="top"
              className={styles.Image}
              width={orientation.width}
              height={orientation.height}
              quality={100}
              alt=""
            />
          </Link>
        );
      })}
    </div>
  );
}
