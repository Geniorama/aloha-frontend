import Image from "next/image";
import styles from "./SubMenuDesktop.module.css";
export default function SubMenuDesktop({isHeaderFixed}) {
  const subMenuStyles = isHeaderFixed
  ? `${styles.SubMenuDesktop} ${styles.fixed}`
  : styles.SubMenuDesktop;
  return (
    <div className={subMenuStyles}>
      <div className={`${styles.GridThree} ${styles.SubMenuDesktopItem}`}>
        <div
          style={{
            gridColumn: "span 2",
            gridRow: "span 2",
            position: "relative",
          }}
        >
          <Image
            src="/img/category/cat-arquitectura.png"
            objectFit="cover"
            alt="cover"
            fill
          />
        </div>
        <div
          style={{
            gridColumn: "span 1",
            position: "relative",
          }}
        >
          <Image
            src="/img/category/cat-paisaje.png"
            objectFit="cover"
            alt="cover"
            fill
          />
        </div>
        <div
          style={{
            gridColumn: "span 1",
            position: "relative",
          }}
        >
          <Image
            src="/img/category/cat-flores.png"
            objectFit="cover"
            alt="cover"
            fill
          />
        </div>
        <span className={styles.Tag}>Fotos</span>
      </div>
      <div className={`${styles.GridThree} ${styles.SubMenuDesktopItem}`}>
        <div
          style={{
            gridColumn: "span 1",
            gridRow: "span 1",
            position: "relative",
          }}
        >
          <Image
            src="/img/category/vector.jpg"
            objectFit="cover"
            alt="cover"
            fill
          />
        </div>
        <div
          style={{
            gridColumn: "span 1",
            position: "relative",
          }}
        >
          <Image
            src="/img/category/covid-19.jpg"
            objectFit="cover"
            alt="cover"
            fill
          />
        </div>
        <div
          style={{
            gridColumn: "span 1",
            gridRow: "span 2",
            position: "relative",
          }}
        >
          <Image
            src="/img/category/futurista.jpg"
            objectFit="cover"
            alt="cover"
            fill
          />
        </div>
        <div
          style={{
            gridColumn: "span 2",
            gridRow: "span 1",
            position: "relative",
          }}
        >
          <Image
            src="/img/category/stock-vector.jpg"
            objectFit="cover"
            alt="cover"
            fill
          />
        </div>
        <span className={styles.Tag}>Vectores</span>
      </div>
      <div className={`${styles.GridFour} ${styles.SubMenuDesktopItem}`}>
        <div
          style={{
            gridColumn: "span 1",
            gridRow: "span 2",
            position: "relative",
          }}
        >
          <Image
            src="/img/category/bg_subcat_moderno.png"
            objectFit="cover"
            alt="cover"
            fill
          />
        </div>
        <div
          style={{
            gridColumn: "span 1",
            gridRow: "span 2",
            position: "relative",
          }}
        >
          <Image
            src="/img/category/bg_subcat_moderno.png"
            objectFit="cover"
            alt="cover"
            fill
          />
        </div>
        <div
          style={{
            gridColumn: "span 2",
            gridRow: "span 5",
            position: "relative",
          }}
        >
          <Image
            src="/img/category/bg_subcat_moderno.png"
            objectFit="cover"
            alt="cover"
            fill
          />
        </div>
        <div
          style={{
            gridColumn: "span 2",
            gridRow: "span 2",
            position: "relative",
          }}
        >
          <Image
            src="/img/category/bg_subcat_moderno.png"
            objectFit="cover"
            alt="cover"
            fill
          />
        </div>
        <span className={styles.Tag}>Ilustraciones</span>
      </div>
      <div className={`${styles.GridFour} ${styles.SubMenuDesktopItem}`}>
        <div
          style={{
            gridColumn: "span 2",
            gridRow: "span 2",
            position: "relative",
          }}
        >
          <Image
            src="/img/category/bg_subcat_naturaleza.png"
            objectFit="cover"
            alt="cover"
            fill
          />
        </div>
        <div
          style={{
            gridColumn: "span 2",
            gridRow: "span 5",
            position: "relative",
          }}
        >
          <Image
            src="/img/category/bg_subcat_naturaleza.png"
            objectFit="cover"
            alt="cover"
            fill
          />
        </div>
        <div
          style={{
            gridColumn: "span 2",
            gridRow: "span 2",
            position: "relative",
          }}
        >
          <Image
            src="/img/category/bg_subcat_naturaleza.png"
            objectFit="cover"
            alt="cover"
            fill
          />
        </div>
        <span className={styles.Tag}>Colecciones</span>
      </div>
    </div>
  );
}
