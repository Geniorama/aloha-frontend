import Image from "next/image";
import { useState } from "react";
import styles from "./FiterOptionsTag.module.css";
import Chevrondown from "../../../../public/icons/Chevron-down.svg";
import FilterOptionsTagItems from "./FilterOptionsTag/FilterOptionsTagItems";

const alignStyles = {
  left: { left: "0" },
  center: { left: "50%", transform: "translate(-50%,0)" },
  right: { right: "0" },
};

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
          } p-4 mt-2`}
          style={{
            "@maida (minWidth: 900px)": {
              ...alignStyles[align],
            },
          }}
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
