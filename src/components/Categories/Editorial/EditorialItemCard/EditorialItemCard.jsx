import Image from "next/image";
import styles from "./EditorialItemCard.module.css";

export default function EditorialItemCard({ title, description, image = "" }) {
  return (
    <div className={styles.card}>
      <Image unoptimized src={image} width={600} height={800} quality={100} alt="" />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
