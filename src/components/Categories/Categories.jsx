import TitleSection from "../TitleSection/TitleSection";
import styles from "./Categories.module.css";
import Category from "./Category/Category";

export default function Categories({ categories }) {
  return (
    <section className={styles.section}>
      <div className="container">
        <TitleSection text="Categorías de fotos" />
        <div className={styles.content}>
          {categories.map((category, index) => (
            <Category key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
