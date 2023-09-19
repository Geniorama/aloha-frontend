import Image from "next/image";
import styles from "./EditorialItemCard.module.css";

export default function EditorialItemCard({ title, description, image = "" }) {
  return (
    <div className={styles.card}>
      <Image src={image} width={1000} height={1000} alt="" />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
