import styles from "./Tabs.module.css";
import { useState } from "react";

export default function Tabs({items}) {
  const [activeTab, setActiveTab] = useState(items[0]?.id);

  const changeTab = (tabId) => {
    setActiveTab(tabId);
  }; 

  return (
    <>
     <ul className={styles.TabsMenu}>
        {items && items.map((item) => (
            <li key={item.id}>
                <button 
                    className={`${styles.TabButton} ${
                    activeTab === item.id ? styles.active : ""
                    }`}
                    type="button"
                    onClick={() => changeTab(item.id)}
                >{item.title}</button>
            </li>
        ))}
     </ul>

     <div className={styles.TabsContent}>
        {items && items.map((item)=>(
            <div 
            className={`${styles.TabContent} ${
            activeTab === item.id ? styles.active : ""
            }`}
            id={item.id} key={item.id}>
                {item.content}
            </div>
        ))}
     </div>
    </>
  )
}
