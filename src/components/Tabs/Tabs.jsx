import styles from "./Tabs.module.css";
import { useState } from "react";
import ItemsPlan from "../CardPlan/ItemsPlan/ItemsPlan";

export default function Tabs({
  items,
  idTab,
  style,
  products,
  onSelectPlan,
  idPlan,
  namePlan,
}) {
  const [activeTab, setActiveTab] = useState(idTab || items[0]?.id);
  if (!items || items.length < 1) {
    return;
  }
  const changeTab = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      {products ? (
        <div className={`${style == "style-2" ? styles.Style2 : null}`}>
          <ul className={`${styles.TabsMenu} ${styles.Style2}`}>
            {items &&
              items.map((item, i) => (
                <li key={i}>
                  <button
                    className={`${styles.TabButton} ${
                      activeTab === item.id ? styles.active : ""
                    }`}
                    type="button"
                    onClick={() => changeTab(item.id)}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
          </ul>

          <div className={styles.TabsContent}>
            {items &&
              items.map((item, i) => (
                <div
                  className={`${styles.TabContent} ${
                    activeTab === item.id ? styles.active : ""
                  }`}
                  id={item.id}
                  key={i}
                >
                  <ItemsPlan
                    items={item.subitems}
                    onClick={onSelectPlan}
                    namePlan={item.id}
                    idPlan={idPlan}
                  />
                </div>
              ))}
          </div>
        </div>
      ) : (
        <div className={`${style == "style-2" ? styles.Style2 : null}`}>
          <ul className={`${styles.TabsMenu} ${styles.Style2}`}>
            {items &&
              items.map((item, i) => (
                <li key={i}>
                  <button
                    className={`${styles.TabButton} ${
                      activeTab === item.id ? styles.active : ""
                    }`}
                    type="button"
                    onClick={() => changeTab(item.id)}
                  >
                    {item.title}
                  </button>
                </li>
              ))}
          </ul>

          <div className={styles.TabsContent}>
            {items &&
              items.map((item) => (
                <div
                  className={`${styles.TabContent} ${
                    activeTab === item.id ? styles.active : ""
                  }`}
                  id={item.id}
                  key={item.id}
                >
                  {item.content}
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
}
