import Layout from "@/components/Layout/Layout";
import Image from "next/image";
import styles from "@/styles/Profile.module.css";
import Link from "next/link";
const metaData = {
  title: "Perfil",
  description: "Mi metadescripción",
  keywords: "Banco imágenes, aloha",
  author: "Geniorama Agencia",
};

function ProfilePage() {
  return (
    <Layout metaData={metaData}>
      <section className={styles.Banner}>
        <div className={styles.BannerContent}>
          <Image
            width={160}
            height={160}
            src="/img/profile/avatar.jpg"
            alt="avatar-profile"
          />
          <div>
            <span>
              ID: <b>77140580h2</b>
            </span>
            <h2>Cindy Riveros Bustos</h2>
            <Link href="#">Cambiar contraseña</Link>
          </div>
        </div>
      </section>
      <section className={styles.Form}>
        <div className={styles.FormRow}>
          <div>
            <label htmlFor="">Nombres</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Apellidos</label>
            <input type="text" />
          </div>
        </div>
        <div>
          <label htmlFor="">E-mail</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Dirección</label>
          <input type="text" />
        </div>
        <div className={styles.FormRow}>
          <div>
            <label htmlFor="">Ciudad</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Estado</label>
            <input type="text" />
          </div>
        </div>
        <div className={styles.FormRow}>
          <div>
            <label htmlFor="">Páis</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Código postal</label>
            <input type="text" />
          </div>
        </div>
        <div className={styles.FormRow}>
          <div>
            <label htmlFor="">Número de teléfono</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Idioma</label>
            <input type="text" />
          </div>
        </div>
        <div>
          <button>Guardar información</button>
        </div>
      </section>
    </Layout>
  );
}

export default ProfilePage;
