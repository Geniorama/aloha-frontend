import ButtonLink from "../ButtonLink/ButtonLink";
import Image from "next/image";
import styles from "./CardGrid.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function CardGrid({
  items = [],
  name = "Japandi Aesthetic",
  quantity,
}) {
  const sliceItems = (items.length && items.slice(0, 4)) || [];
  const columns =
    sliceItems.length <= 1
      ? styles.Grid_1
      : styles[`Grid_${sliceItems.length}`];

  return (
    <div className={`${styles.Grid} ${columns}`}>
      {sliceItems.length &&
        sliceItems.map((item, i) => (
          <div key={i} className={styles.Item}>
            <Image src={item} alt="image" objectFit="cover" fill />
          </div>
        ))}
      <div className={styles.caption}>
        <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
        <h3>
          {name}
          <span> &middot; {quantity}</span>
        </h3>
      </div>
    </div>
  );
}
