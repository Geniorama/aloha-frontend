import styles from "@/components/PopularAuthors/AuthorCard/AuthorCard.module.css";
import Image from "next/image";

export default function AuthorCard({ cover, author, photo }) {
  return (
    <div className={styles.authorCard}>
      <Image src={cover} className={styles.cover} width={290} height={150} />
      <div className={styles.main}>
        <div className={styles.author}>
          <Image src={photo} className={styles.photo} width={85} height={85} />
          <h4>{author}</h4>
        </div>
      </div>
    </div>
  );
}
