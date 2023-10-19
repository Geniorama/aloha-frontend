import styles from "@/components/PopularAuthors/AuthorCard/AuthorCard.module.css";
import Image from "next/image";
import Link from "next/link";

export default function AuthorCard({ link = "", cover, author, photo }) {
  return (
    <Link href={link}>
      <div className={styles.authorCard}>
        <Image
          src={cover}
          className={styles.cover}
          width={290}
          height={150}
          quality={100}
          style={{ objectFit: "cover" }}
          alt="cover"
        />
        <div className={styles.main}>
          <div className={styles.author}>
            <Image
              src={photo}
              className={styles.photo}
              width={85}
              height={85}
              alt="avatar"
            />
            <h4>{author}</h4>
          </div>
        </div>
      </div>
    </Link>
  );
}
