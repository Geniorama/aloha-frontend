
import styles from './TitleSection.module.css'

export default function TitleSection({text, color}) {
  return (
    <h2 className={`${styles[color]} ${styles.TitleSection}`}>{text}</h2>
  )
}
