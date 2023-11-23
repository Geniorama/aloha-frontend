import Layout from "@/components/Layout/Layout";
import { changePassword } from "@/services/user.service";
import styles from "@/styles/ChagnePassword.module.css";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
const metaData = {
  title: "Cambiar contraseña",
  description: "Mi metadescripción",
  keywords: "Banco imágenes, aloha",
  author: "Geniorama Agencia",
};
const info_list = [
  "Usa mínimo 8 caracteres con letras y números.",
  "Usa mínimo 1 mayúscula, 1 minúscula y 1 signo como ?-!*$#.",
  "Evita secuencias como 123, ABC, 111 o BBB.",
  "No uses datos personales como tus nombres o fecha de nacimiento.",
  "Evita la fecha de hoy.",
];
function ChangePasswordPage() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const session = getCookie("session_id");
  const onSubmit = async (data) => {
    if (!session) return router.push("/signin");
    return await changePassword(data);
  };
  return (
    <Layout metaData={metaData}>
      <main className={styles.ChangePassword}>
        <h2>Cambiar contraseña</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <section className={styles.Form}>
            <div>
              <label htmlFor="">Contraseña antigua</label>
              <input type="password" {...register("old_password")} />
            </div>
            <div>
              <label htmlFor="">Nueva contraseña</label>
              <input type="password" />
            </div>
            <div>
              <label htmlFor="">Confirmar nueva contraseña</label>
              <input type="password" {...register("new_password")} />
            </div>
            <input {...register("session_id")} value={session} hidden />
            <div>
              <button>Guardar información</button>
            </div>
          </section>
        </form>
        <section className={styles.Info}>
          <div>
            <ul>
              {info_list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default ChangePasswordPage;
