import { useEffect } from "react";
import styles from "./PopularSearches.module.css";
import { useState } from "react";
import getKeywoards from "@/services/keywoards.service";

export default function PopularSearches() {
  const [keywoards, setKeywoards] = useState([]);
  useEffect(() => {
    getKeywoards().then((result) => result.length && setKeywoards(result));
  }, []);

  console.log(keywoards)
  return (
    <section className={styles.container}>
      <div className="container">
        <h2 className={styles.title}>Búsquedas populares.</h2>
        <div className={styles.keywoards}>
          {keywoards.map((keywoard) => (
            <span key={keywoard.id}>{keywoard.phrase}</span>
          ))}    
        </div>
      </div>
    </section>
  );
}
