import { AlohaIcon } from "../SvgImages/SvgImages";
import styles from "./MenuSelect.module.css";

export default function MenuSelect({ items }) {
  return (
    <ul className={`${styles.MenuSelect}`}>
      {items.map((item) => (
        <li key={item.id} className={`${styles.MenuOption} ${styles.Selected}`}>
          {item.icon && (
            <span className={`${styles.IconOption}`}>
              <AlohaIcon size={item.iconSize ? item.iconSize : "20"} icon={item.icon} />
            </span>
          )}
          <span className={`${styles.TextOption}`}>{item.title}</span>
        </li>
      ))}
    </ul>
  );
}
