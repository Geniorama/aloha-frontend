import TitleSection from "../TitleSection/TitleSection";
import styles from "./Categories.module.css";
import Category from "./Category/Category";

export default function Categories({ categories, title, path }) {
  return (
    <section className={styles.section}>
      <div className="container">
        {title && <TitleSection text={`Categorías de ${title}.`} />}
        <div className={styles.content}>
          {categories.map((category, index) => (
            <Category
              key={index}
              url={`/search/${category.slug}`}
              {...category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
