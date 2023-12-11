import ProductChooseItem from "../ProductChooseItem/ProductChooseItem";
import styles from "./ProductChooseSize.module.css";

export default function ProductChooseSize({
  sizes = {},
  active,
  onSelectSize = () => {},
}) {
  const sizes_label = Object.keys(sizes) || [];
  return (
    <div className={styles.container}>
      {sizes_label.map((size) => (
        <ProductChooseItem
          key={size}
          active={active === size}
          size={size}
          onSelectSize={onSelectSize}
          {...sizes[size]}
        />
      ))}
    </div>
  );
}
