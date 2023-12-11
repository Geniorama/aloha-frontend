import styles from "./ProductChooseItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function ProductChooseItem({
  size,
  width,
  height,
  mp,
  active,
  onSelectSize,
}) {
  const onClick = () => onSelectSize(size);
  return (
    <div className={styles.container} onClick={onClick}>
      <div className={`${styles.content} ${active ? styles.active : ""}`}>
        <div className={styles.input}>
          <div className={styles.radio} />
          <div className={styles.tag}>
            <span style={{ textTransform: "uppercase" }}>{size}</span>
          </div>
        </div>
        <div className={styles.item}>
          <h4>{`${width}x${height}`}</h4>
          <span>
            {`${width}x${height}`} cm,
            <br /> {mp} dpi
          </span>
        </div>
      </div>
      {active ? (
        <FontAwesomeIcon className={`${styles.icon}`} icon={faChevronDown} />
      ) : null}
    </div>
  );
}
