import { useState } from "react";
import ProductChooseItem from "../ProductChooseItem/ProductChooseItem";
import styles from "./ProductChooseSize.module.css";
import sizes from "@/data/sizes.json";

export default function ProductChooseSize({ sizes = {} }) {
  const sizes_label = Object.keys(sizes) || [];
  const [active, setActive] = useState(sizes_label[2]);
  const onSetActiveRadio = (tag) => setActive(tag);
  return (
    <div className={styles.container}>
      {sizes_label.map((size) => (
        <ProductChooseItem
          key={size}
          active={active === size}
          size={size}
          onSetActiveRadio={() => onSetActiveRadio(size.tag)}
          {...sizes[size]}
        />
      ))}
    </div>
  );
}
