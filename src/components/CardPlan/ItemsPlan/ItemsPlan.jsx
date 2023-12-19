import styles from "./ItemsPlan.module.css";
import { formatter } from "@/helpers/helpers";

export default function ItemsPlan({ items, namePlan, onClick }) {
  if (!items || items.length < 1) {
    return;
  }

  return (
    <ul className={styles.ListItems}>
      {items &&
        items.map((item, i) => (
          <li
            key={i}
            className={styles.ListItems__item}
            onClick={() => onClick(item)}
          >
            <div className="form-check d-flex align-items-center">
              <input
                className={`${styles.InputCheck} form-check-input`}
                type="radio"
                name={namePlan}
                value={item.id}
                id={item.id}
              />
              <label
                className={`${styles.LabelItem} w-100 ms-3 form-check-label d-flex justify-content-between align-items-center`}
                htmlFor={item.id}
              >
                <div>
                  <span
                    className={`d-block`}
                    style={{ color: "var(--aloha-gray)" }}
                  >
                    <b
                      className={`${styles.Name}`}
                      style={{ fontWeight: "600", fontSize: "16px" }}
                    >
                      {item.name}
                    </b>
                    /
                    <small
                      style={{ fontSize: "12px" }}
                      className={`${styles.Small}`}
                    >
                      {item.small}
                    </small>
                  </span>

                  <span
                    className="d-block"
                    style={{ fontWeight: "600", fontSize: "20px" }}
                  >
                    {formatter.format(item.price)}
                  </span>
                </div>

                <div className="text-right d-flex flex-column align-items-end">
                  <span
                    className="d-block"
                    style={{
                      fontWeight: "500",
                      fontSize: "18px",
                      color: "var(--aloha-black)",
                    }}
                  >
                    {formatter.format(item.price_per_item)}
                  </span>
                  <small
                    className="d-block"
                    style={{ color: "var(--aloha-gray)", fontSize: "12px" }}
                  >
                    {item.small_per_item}
                  </small>
                </div>
              </label>
            </div>
          </li>
        ))}
    </ul>
  );
}
