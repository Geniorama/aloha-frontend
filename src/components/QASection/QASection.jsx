import styles from "./QASection.module.css";
import QASectionItem from "./QASectionItem/QASectionItem";
import QAList from "@/data/QA.json";
export default function QASection() {
  return (
    <section className={styles.QA}>
      <h2>Preguntas frecuentes.</h2>
      <div className={styles.QAItemsList}>
        {QAList.map((item, index) => (
          <QASectionItem key={index} {...item}>
            {item.value ?? null}
          </QASectionItem>
        ))}
      </div>
    </section>
  );
}
