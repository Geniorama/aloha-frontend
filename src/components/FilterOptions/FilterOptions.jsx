import styles from "./FilterOptions.module.css";
import SearchFilter from "../SearchFilter/SearchFilter";
import FilterLabels from "./FilterLabels/FilterLabels";
import { useState } from "react";

export default function FilterOptions() {
  const [showTags, setShowTags] = useState(false);
  const onShowTags = () => setShowTags(!showTags);
  return (
    <section className={styles.filterOptions}>
      <div className="container py-4">
        <div className="row">
          <div className="col-12 col-lg-6">
            <SearchFilter />
          </div>
          <div className={`col-8 col-lg-6 ${styles.field}`}>
            <span>Ordenar por</span>
            <select name="" id="">
              <option value="">Más relevante</option>
            </select>
          </div>
          <div className={`col-4 col-lg-12 ${styles.labels}`}>
            <span className={styles.toggle} onClick={onShowTags}>
              Filtrar
            </span>
            <FilterLabels show={showTags} onClose={onShowTags} />
          </div>
        </div>
      </div>
    </section>
  );
}
