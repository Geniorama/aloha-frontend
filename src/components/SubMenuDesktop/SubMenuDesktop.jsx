import Image from "next/image";
import styles from "./SubMenuDesktop.module.css";
import Link from "next/link";
const path = "/img/components/header/submenu";
export default function SubMenuDesktop({ isHeaderFixed }) {
  const subMenuPosition = isHeaderFixed ? styles.fixed : null;
  return (
    <div className={`${styles.SubMenuDesktop} ${subMenuPosition}`}>
      <Link href="/categoria/fotos">
        <div className={`${styles.GridThree} ${styles.SubMenuDesktopItem}`}>
          <div
            style={{
              gridColumn: "span 2",
              gridRow: "span 2",
              position: "relative",
            }}
          >
            <Image
              unoptimized
              src={`${path}/fotos/1.png`}
              objectFit="cover"
              alt="cover"
              quality={100}
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
              unoptimized
              src={`${path}/fotos/2.png`}
              objectFit="cover"
              alt="cover"
              quality={100}
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
              unoptimized
              src={`${path}/fotos/3.png`}
              objectFit="cover"
              alt="cover"
              quality={100}
              fill
            />
          </div>
          <span className={styles.Tag}>Fotos</span>
        </div>
      </Link>
      <Link href="/categoria/vectores">
        <div className={`${styles.GridThree} ${styles.SubMenuDesktopItem}`}>
          <div
            style={{
              gridColumn: "span 1",
              gridRow: "span 1",
              position: "relative",
            }}
          >
            <Image
              unoptimized
              src={`${path}/vectores/1.png`}
              objectFit="cover"
              alt="cover"
              quality={100}
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
              unoptimized
              src={`${path}/vectores/2.png`}
              objectFit="cover"
              alt="cover"
              quality={100}
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
              unoptimized
              src={`${path}/vectores/3.png`}
              objectFit="cover"
              alt="cover"
              quality={100}
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
              unoptimized
              src={`${path}/vectores/4.png`}
              objectFit="cover"
              alt="cover"
              quality={100}
              fill
            />
          </div>
          <span className={styles.Tag}>Vectores</span>
        </div>
      </Link>
      <Link href="/categoria/ilustraciones">
        <div className={`${styles.GridFour} ${styles.SubMenuDesktopItem}`}>
          <div
            style={{
              gridColumn: "span 1",
              gridRow: "span 2",
              position: "relative",
            }}
          >
            <Image
              unoptimized
              src={`${path}/ilustraciones/1.png`}
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
              unoptimized
              src={`${path}/ilustraciones/2.png`}
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
              unoptimized
              src={`${path}/ilustraciones/3.png`}
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
              unoptimized
              src={`${path}/ilustraciones/4.png`}
              objectFit="cover"
              alt="cover"
              fill
            />
          </div>
          <span className={styles.Tag}>Ilustraciones</span>
        </div>
      </Link>
      <Link href="/colecciones">
        <div className={`${styles.GridFour} ${styles.SubMenuDesktopItem}`}>
          <div
            style={{
              gridColumn: "span 2",
              gridRow: "span 2",
              position: "relative",
            }}
          >
            <Image
              unoptimized
              src={`${path}/colecciones/1.png`}
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
              unoptimized
              src={`${path}/colecciones/2.png`}
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
              unoptimized
              src={`${path}/colecciones/3.png`}
              objectFit="cover"
              alt="cover"
              fill
            />
          </div>
          <span className={styles.Tag}>Colecciones</span>
        </div>
      </Link>
    </div>
  );
}
