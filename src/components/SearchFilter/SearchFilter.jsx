import styles from "./SearchFilter.module.css";
import Icon from "../../../public/icons/Search.svg";
import Image from "next/image";

export default function SearchFilter() {
  return (
    <div className={styles.SearchFilter}>
      <input placeholder="Buscar por video" />
      <Image src={Icon} alt="" />
    </div>
  );
}
