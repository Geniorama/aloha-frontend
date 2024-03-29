import styles from "./HeroCategory.module.css";
import SearchBar from "@/components/SearchBar/SearchBar";
import Image from "next/image";

export default function HeroCategory({
  background,
  title,
  desc,
  search,
  layer,
  category,
}) {
  return (
    <div className="container-fluid">
      <div
        className={styles.HeroCategory}
        style={{
          backgroundImage: `url(${background})`,
          marginBottom: search && "60px",
        }}
      >
        <div className={styles.Layer} style={layer}></div>
        <div className="container">
          {title && (
            <h1 className={`${styles.Title} text-capitalize`}>{title}</h1>
          )}

          {desc && <p className={styles.Desc}>{desc}</p>}

          {search && (
            <div className={styles.SearchWrap}>
              <SearchBar query={category} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
