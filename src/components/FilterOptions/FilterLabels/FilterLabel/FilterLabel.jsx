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
  const position = styles[`position-${align}`];
  return (
    <div className={styles.label}>
      <header onClick={onShow}>
        <div>
          <Image src={icon} alt="icon" />
          <span>{label}</span>
        </div>
        <Image src={Chevrondown} alt="chevrondown-icon" />
      </header>
      {show && items.length ? (
        <div className={`p-4 mt-2 ${size} ${position}`}>
          {items.length ? (
            <FilterLabelItems items={items} />
          ) : (
            <div>{children}</div>
          )}
        </div>
      ) : null}
    </div>
  );
}
