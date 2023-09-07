import ButtonLink from "../ButtonLink/ButtonLink";
import Image from "next/image";
import styles from "./CardGrid.module.css";

export default function CardGrid({ items = [], name }) {
  return (
    <div
      className={`${styles.Grid} ${
        items.length > 3 ? styles.Grid_4 : styles.Grid_3
      }`}
    >
      {items.length &&
        items.map((item, i) => (
          <div key={i} className={styles.Item}>
            <Image src={item} alt="" fill />
          </div>
        ))}
      <div className={styles.caption}>
        <h3>
          Japandi Aesthetic
          <span> &middot; 300</span>
        </h3>
      </div>
    </div>
  );
}
