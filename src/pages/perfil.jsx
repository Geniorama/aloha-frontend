import Layout from "@/components/Layout/Layout";
import Image from "next/image";
import styles from "@/styles/Profile.module.css";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { getUserData, login } from "@/services/user.service";
import { useForm } from "react-hook-form";
import { updateSubaccount } from "@/services/subaccount";
const metaData = {
  title: "Perfil",
  description: "Mi metadescripción",
  keywords: "Banco imágenes, aloha",
  author: "Geniorama Agencia",
};

function ProfilePage({ data, session_id, subaccount_id }) {
  const { register, handleSubmit } = useForm({ defaultValues: data });
  const onSubmit = async (data) =>
    updateSubaccount({ session_id, subaccount_id, ...data });
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
              ID: <b>{subaccount_id}</b>
            </span>
            <h2>{`${data.firstName} ${data.lastName}`}</h2>
            <Link href="/perfil/change-password">Cambiar contraseña</Link>
          </div>
        </div>
      </section>
      <section className={styles.Form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.FormRow}>
            <div>
              <label htmlFor="">Nombres</label>
              <input type="text" {...register("firstName")} />
            </div>
            <div>
              <label htmlFor="">Apellidos</label>
              <input type="text" {...register("lastName")} />
            </div>
          </div>
          <div>
            <label htmlFor="">E-mail</label>
            <input type="text" {...register("username")} />
          </div>
          <div>
            <button>Guardar información</button>
          </div>
        </form>
      </section>
    </Layout>
  );
}

export const getServerSideProps = async (ctx) => {
  const session = auth(ctx);
  console.log(session.user_id);
  const signin = (await login()) || {};
  const data = await getUserData(session.session_id, session.user_id);
  return {
    props: {
      data,
      session_id: signin.sessionid,
      subaccount_id: session.user_id,
    },
  };
};

export default ProfilePage;
