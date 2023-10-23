import { useState } from "react";
import styles from "./QASectionItem.module.css";
export default function QASectionItem({ label, children }) {
  const [active, setActive] = useState(false);
  const onChange = () => setActive(!active);
  return (
    <div className={styles.QAItem} onClick={onChange}>
      <div>
        <h3>{label}</h3>
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 9.5L12 15.5L18 9.5"
            stroke="#1A01A6"
            stroke-width="2.25"
          />
        </svg>
      </div>
      {active && children ? <p>{children}</p> : null}
    </div>
  );
}
