import Layout from "@/components/Layout/Layout";
import ProductChooseItem from "@/components/Product/ProductChooseItem/ProductChooseItem";
import ProductChooseSize from "@/components/Product/ProductChooseSize/ProductChooseSize";
import styles from "@/styles/Product.module.css";
import {
  faArrowRight,
  faClone,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const metaData = {
  title: "Producto",
};

function ProductPage() {
  return (
    <Layout metaData={metaData}>
      <section className="container">
        <h2 className={styles.title}>
          Pescador solitario en la playa con fondo rocoso de montaña.
        </h2>
      </section>
      <section className={`container px-4 ${styles.info__container}`}>
        <div className={styles.hero}>
          <Image
            src="https://images.unsplash.com/photo-1682687220067-dced9a881b56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80"
            className={styles.cover}
            width={100}
            height={100}
          />
        </div>
        <div className={styles.options}>
          <ProductChooseSize />
          <div className={`mt-2 w-100 d-none d-lg-block ${styles.info__nav}`}>
            <button className={styles.button}>
              <span>Descargar imagen</span>
              {/* <FontAwesomeIcon icon={faArrowRight} /> */}
            </button>
            <Link href="#" className={`${styles.searchLink} mt-4 p-4 p-lg-0`}>
              <span>Empezar prueba gratis</span>
            </Link>
          </div>
        </div>
        <div className={styles.info__items}>
          <Link href="#" className={styles.searchLink}>
            <span>Buscar imágenes similares</span>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Link>
          <div>
            <h6>Colaborador</h6>
            <Link href="#">
              <span>Paul Steven</span>
              {/* <FontAwesomeIcon icon={faArrowRight} /> */}
            </Link>
          </div>
          <div>
            <h6>ID de la imagen</h6>
            <Link href="#">
              <span>138519659</span>
              <FontAwesomeIcon icon={faClone} />
            </Link>
          </div>
        </div>
        <div className={`mt-5 ${styles.info__nav}`}>
          <button className={styles.button}>
            <span>Descargar imagen</span>
            {/* <FontAwesomeIcon icon={faArrowRight} /> */}
          </button>
          <Link href="#" className={`${styles.searchLink} p-4`}>
            <span>Empezar prueba gratis</span>
          </Link>
        </div>
      </section>
      <section className={`container px-4 ${styles.description}`}>
        <div>
          <h5 className="mb-4">Información de uso</h5>
          <p>
            Puede usar esta foto sin royalties "Pescador solitario en la playa
            con fondo rocoso de montaña" para fines personales y comerciales de
            acuerdo con las licencias Estándar o Ampliada. La licencia Estándar
            cubre la mayoría de los casos de uso, incluida la publicidad, los
            diseños de interfaz de usuario y el embalaje de productos, y permite
            hasta 500.000 copias impresas. La licencia Ampliada permite todos
            los casos de uso bajo la licencia Estándar con derechos de impresión
            ilimitados, y le permite utilizar las imágenes descargadas para
            merchandising, reventa de productos o distribución gratuita. <br />
            <br />
            Puede comprar esta foto de stock y descargarla en alta resolución
            hasta 4704x3184. Fecha de carga: 7 feb 2022
          </p>
        </div>
        <div>
          <h5 className="mb-4">Palabras clave</h5>
          <div className={styles.tags}>
            <span className={styles.tag}>Paisajes</span>
            <span className={styles.tag}>Primavera</span>
            <span className={styles.tag}>Naturaleza</span>
            <span className={styles.tag}>Viajes</span>
            <span className={styles.tag}>Estaciones</span>
            <span className={styles.tag}>Árbol</span>
            <span className={styles.tag}>Verde</span>
            <span className={styles.tag}>Bosque</span>
            <span className={styles.tag}>Luz solar</span>
            <span className={styles.tag}>Silencio</span>
            <span className={styles.tag}>Sol</span>
            <span className={styles.tag}>Panorama</span>
            <span className={styles.tag}>Escénica</span>
          </div>
        </div>
      </section>
      <section className="container p-4">
        <h5 className="mb-4">Misma serie:</h5>
        <div className={styles.gallery}>
          <Image
            src="https://images.unsplash.com/photo-1682687220067-dced9a881b56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80"
            width={100}
            height={100}
          />
          <Image
            src="https://images.unsplash.com/photo-1682687220067-dced9a881b56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80"
            width={100}
            height={100}
          />
          <Image
            src="https://images.unsplash.com/photo-1682687220067-dced9a881b56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80"
            width={100}
            height={100}
          />
          <Image
            src="https://images.unsplash.com/photo-1682687220067-dced9a881b56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80"
            width={100}
            height={100}
          />
          <Image
            src="https://images.unsplash.com/photo-1682687220067-dced9a881b56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80"
            width={100}
            height={100}
          />
          <Image
            src="https://images.unsplash.com/photo-1682687220067-dced9a881b56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80"
            width={100}
            height={100}
          />
          <Image
            src="https://images.unsplash.com/photo-1682687220067-dced9a881b56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80"
            width={100}
            height={100}
          />
        </div>
        <button className={styles.button_small}>
          <span>Ver más</span>
        </button>
      </section>
      <section className="container p-4">
        <h5 className="mb-4">Imágenes similares:</h5>
        <div className={styles.gallery}>
          <Image
            src="https://images.unsplash.com/photo-1682687220067-dced9a881b56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80"
            width={100}
            height={100}
          />
          <Image
            src="https://images.unsplash.com/photo-1682687220067-dced9a881b56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80"
            width={100}
            height={100}
          />
          <Image
            src="https://images.unsplash.com/photo-1682687220067-dced9a881b56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80"
            width={100}
            height={100}
          />
          <Image
            src="https://images.unsplash.com/photo-1682687220067-dced9a881b56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80"
            width={100}
            height={100}
          />
          <Image
            src="https://images.unsplash.com/photo-1682687220067-dced9a881b56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80"
            width={100}
            height={100}
          />
          <Image
            src="https://images.unsplash.com/photo-1682687220067-dced9a881b56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80"
            width={100}
            height={100}
          />
          <Image
            src="https://images.unsplash.com/photo-1682687220067-dced9a881b56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80"
            width={100}
            height={100}
          />
        </div>
        <button className={styles.button_small}>
          <span>Ver más</span>
        </button>
      </section>
    </Layout>
  );
}

export default ProductPage;
