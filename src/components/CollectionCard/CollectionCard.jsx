import Link from "next/link";
import CardGrid from "../CardGrid/CardGrid";
import { slugify } from "@/helpers/helpers";
import styles from "./CollectionCard.module.css";

export default function CollectionCard({ name, images = [], sources = [] }) {
  const items = images.length ? images.map((image) => image.huge_thumb) : [];
  return (
    <Link href={`/colecciones/${slugify(name)}`} className={styles.Link}>
      <CardGrid name={name} items={items} quantity={sources.length} />
    </Link>
  );
}
