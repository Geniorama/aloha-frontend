import Image from "next/image";
import Link from "next/link";
import styles from "./SubcategoryCard.module.css";

export default function SubcategoryCard({ text, image, url }) {
  return (
    <div className={styles.content}>
      <Link className={`${styles.link} ${styles["top-left"]}`} href={url}>
        <span className={styles.link__text}>{text}</span>
        <span className={styles.link__arrow}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_396_1127)">
              <path
                d="M28.332 28.3346L11.6654 11.668"
                stroke="#222222"
                strokeWidth="3.33333"
              />
              <path
                d="M28.332 13.334L28.332 28.334L13.332 28.334"
                stroke="#222222"
                strokeWidth="3.33333"
              />
            </g>
            <defs>
              <clipPath id="clip0_396_1127">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
      </Link>
      <Image
        src={image}
        className={styles.image}
        width={400}
        height={400}
        alt=""
      />
    </div>
  );
}
