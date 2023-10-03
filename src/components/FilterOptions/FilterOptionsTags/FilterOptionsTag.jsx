import Image from "next/image";
import { useState } from "react";
import styles from "./FiterOptionsTag.module.css";
import Chevrondown from "../../../../public/icons/Chevron-down.svg";
import FilterOptionsTagItems from "./FilterOptionsTag/FilterOptionsTagItems";

export default function FilterOptionsTag({
  icon,
  label,
  children,
  items = [],
  align = "left",
}) {
  const [show, setShow] = useState(false);
  const onShow = () => setShow(!show);
  return (
    <div className={styles.FilterOptionsTag}>
      <div className={styles.Header} onClick={onShow}>
        <Image src={icon} alt="" />
        <span>{label}</span>
        <Image src={Chevrondown} alt="" />
      </div>
      {show && items.length ? (
        <div
          className={`${styles.Items} ${
            styles[
              items.length > 2
                ? "ItemsContentSizeBig"
                : "ItemsContentSizeNormal"
            ]
          } ${styles[`ItemPosition-${align}`]} p-4 mt-2`}
        >
          {items.length ? (
            <FilterOptionsTagItems items={items} />
          ) : (
            <div>{children}</div>
          )}
        </div>
      ) : null}
    </div>
  );
}
