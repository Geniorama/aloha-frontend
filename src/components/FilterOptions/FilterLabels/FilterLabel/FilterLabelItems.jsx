import styles from "./FilterLabelItems.module.css";

export default function FilterLabelsItems({ items }) {
  const columnStyle =
    items.length > 3
      ? { columnCount: 2 }
      : { display: "flex", flexDirection: "column", gap: "20px 0" };
  return (
    <div style={columnStyle} className={styles.FilterOptionsTagItems}>
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            width: "100%",
            marginBottom: items.length > 3 ? "20px" : "0",
          }}
        >
          {item.label && <b className="mb-2 d-block">{item.label}</b>}
          <div className={styles.ItemContent}>
            {item.items.length
              ? item.items.map((elem) => (
                  <div key={elem} className={styles.Item}>
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
