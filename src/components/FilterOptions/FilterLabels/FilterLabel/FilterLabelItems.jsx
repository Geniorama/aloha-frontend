import styles from "./FilterLabelItems.module.css";

export default function FilterLabelsItems({ items }) {
  const columns = items.length > 3 ? "twoColumns" : "threeColumns";
  return (
    <div className={`${styles.labelItems} ${styles[columns]}`}>
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            width: "100%",
            marginBottom: items.length > 3 ? "20px" : "0",
          }}
        >
          {item.label && <b className="mb-2 d-block">{item.label}</b>}
          <div className={styles.itemWrapper}>
            {item.items.length
              ? item.items.map((elem) => (
                  <div key={elem} className={styles.item}>
                    {elem}
                  </div>
                ))
              : null}
          </div>
        </div>
      ))}
    </div>
  );
}
