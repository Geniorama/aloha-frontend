import { useState } from "react";
import ProductChooseItem from "../ProductChooseItem/ProductChooseItem";
import styles from "./ProductChooseSize.module.css";
import sizes from "@/data/sizes.json";

export default function ProductChooseSize() {
  const [active, setActive] = useState(sizes[2].tag);
  const onSetActiveRadio = (tag) => setActive(tag);
  return (
    <div className={styles.container}>
      {sizes.map((size, index) => (
        <ProductChooseItem
          key={index}
          active={active === size.tag}
          onSetActiveRadio={() => onSetActiveRadio(size.tag)}
          {...size}
        />
      ))}
    </div>
  );
}
