import { useState } from "react";
import { AlohaIcon } from "../SvgImages/SvgImages";
import styles from "./MenuSelect.module.css";

export default function MenuSelect({ items, onSelect }) {
  const [itemSelect, setItemSelect] = useState({});
  const handleItemClick = (selectedItem) => {
    setItemSelect(selectedItem);
    onSelect(selectedItem); // Llamamos a la función onSelect con el elemento seleccionado
  };

  return (
    <ul className={`${styles.MenuSelect}`}>
      {items.map((item) => (
        <li key={item.id} className={`${styles.MenuOption} ${styles.Selected}`} onClick={() => handleItemClick(item)}>
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
