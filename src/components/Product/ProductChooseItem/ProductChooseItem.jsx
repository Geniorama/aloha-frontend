import styles from "./ProductChooseItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function ProductChooseItem({ label, tag, size, dpi, active }) {
  return (
    <div className={styles.container}>
      <div className={`${styles.content} ${active ? styles.active : ""}`}>
        <div className={styles.input}>
          <div className={styles.radio} />
          <div className={styles.tag}>
            <span>{tag}</span>
          </div>
        </div>
        <div className={styles.item}>
          <h4>{label}</h4>
          <span>
            {size} cm,
            <br /> {dpi} dpi
          </span>
        </div>
      </div>
      {active ? (
        <FontAwesomeIcon className={`${styles.icon}`} icon={faChevronDown} />
      ) : null}
    </div>
  );
}
