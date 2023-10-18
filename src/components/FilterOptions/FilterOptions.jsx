import styles from "./FilterOptions.module.css";
import SearchFilter from "../SearchFilter/SearchFilter";
import FilterOptionsTags from "./FilterOptionsTags/FilterOptionsTags";

export default function FilterOptions() {
  return (
    <section className={styles.FilterOptions}>
      <div className="container my-4">
        <div className="row">
          <div className="col-12 col-lg-6">
            <SearchFilter />
          </div>
          <div className="col-6 col-lg-6 d-flex gap-2 align-items-center justify-content-end">
            <span>Ordenar por</span>
            <select name="" id="">
              <option value="">Más relevante</option>
            </select>
          </div>
          <div className="col-6 col-lg-12">
            <FilterOptionsTags />
          </div>
        </div>
      </div>
    </section>
  );
}
