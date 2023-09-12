import ProductChooseItem from "../ProductChooseItem/ProductChooseItem";
import styles from "./ProductChooseSize.module.css";

export default function ProductChooseSize() {
  return (
    <div className={styles.container}>
      <ProductChooseItem
        tag="S"
        label="1000 x 668"
        size="89.26x42.71"
        dpi="300"
      />
      <ProductChooseItem
        tag="L"
        label="2000 x 1335"
        size="89.26x42.71"
        dpi="300"
      />
      <ProductChooseItem
        tag="XL"
        label="6016x4016"
        size="89.26x42.71"
        dpi="300"
        active
      />
      <ProductChooseItem
        tag="SUPER"
        label="1000 x 668"
        size="89.26x42.71"
        dpi="300"
      />
      <ProductChooseItem
        tag="EL"
        label="1000 x 668"
        size="89.26x42.71"
        dpi="300"
      />
    </div>
  );
}
