import styles from "./TitleSection.module.css";

export default function TitleSection({ text, color, otherClass = "" }) {
  return (
    <h2 className={`${styles[color]} ${otherClass} ${styles.TitleSection}`}>
      {text}
    </h2>
  );
}
