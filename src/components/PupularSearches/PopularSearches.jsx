import styles from "./PopularSearches.module.css";

const keywoards = ["navidad", "feliz año nuevo"];

export default function PopularSearches() {
  return (
    <section className={styles.container}>
      <div>
        <h2 className={styles.title}>Búsquedas populares.</h2>
        <div className={styles.keywoards}>
          {keywoards.map((keywoard) => (
            <span key={keywoard}>{keywoard}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
