import Image from "next/image";
import TitleSection from "../TitleSection/TitleSection";
import styles from "./Categories.module.css";
import Category from "./Category/Category";

export default function Categories() {
  return (
    <section className={styles.section}>
      <div className="container">
        <TitleSection text="Categorías de fotos" />
        <div className={styles.content}>
          <Category
            image="/img/category/cat-trabajo.png"
            text="Trabajo"
            width={400}
            height={458}
          />
          <Category
            image="/img/category/cat-relajado.png"
            text="Relajado"
            width={400}
            height={265}
          />
          <Category
            image="/img/category/cat-paisaje.png"
            link_position="bottom-right"
            text="Paisaje"
            width={400}
            height={267}
          />
          <Category
            image="/img/category/cat-flores.png"
            link_position="bottom-right"
            text="Flores"
            width={280}
            height={249}
          />
          <Category
            image="/img/category/cat-amigos.png"
            link_position="bottom-right"
            text="Amigos"
            width={280}
            height={418}
          />
          <Category
            image="/img/category/cat-abstracto.png"
            text="Abstracto"
            width={280}
            height={323}
          />
          <Category
            image="/img/category/cat-arquitectura.png"
            link_position="bottom-right"
            text="Arquitectura"
            width={376}
            height={355}
          />
          <Category
            image="/img/category/cat-background.png"
            text="Backgrounds"
            width={376}
            height={368}
          />
          <Category
            image="/img/category/cat-comida.png"
            link_position="bottom-right"
            text="Comida"
            width={376}
            height={267}
          />
        </div>
      </div>
    </section>
  );
}
