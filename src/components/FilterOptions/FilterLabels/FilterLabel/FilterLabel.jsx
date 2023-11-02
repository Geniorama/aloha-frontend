import Image from "next/image";
import { useState } from "react";
import Chevrondown from "../../../../../public/icons/Chevron-down.svg";
import FilterLabelItems from "./FilterLabelItems";
import styles from "./FilterLabel.module.css";
export default function FilterLabel({
  icon,
  label,
  children,
  items = [],
  align = "left",
}) {
  const [show, setShow] = useState(false);
  const onShow = () => setShow(!show);
  const size = styles[items.length > 2 ? "size-big" : "size-normal"];
  return (
    <div className={styles.label}>
      <div className={styles.title} onClick={onShow}>
        <div>
          <Image src={icon} alt="icon" />
          <span>{label}</span>
        </div>
        <Image src={Chevrondown} alt="chevrondown-icon" />
      </div>
      {show && items.length ? (
        <div className={`p-lg-4 mt-2 ${size} ${styles[`position-${align}`]}`}>
          {items.length ? (
            <FilterLabelItems items={items} />
          ) : (
            <div>{children}</div>
          )}
        </div>
      ) : (
        <div className={styles.divider} />
      )}
    </div>
  );
}
