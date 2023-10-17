import { loginAsUser } from "@/services/user.service";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { deleteCookie } from "cookies-next";
import styles from "@/styles/Login.module.css";

function Login() {
  const { register, handleSubmit } = useForm();
  useEffect(() => {
    deleteCookie("user_id");
    deleteCookie("session_id");
  }, []);
  const onSubmit = (data) => loginAsUser(data.email, data.password);
  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <h2>Iniciar sesión en Aloha</h2>
        <span>Ingresa a tu sesión con alguna de estas opciones</span>
        <div className={styles.SocialButton}>
          <button className={styles.GoogleButton}>Continuar con Google</button>
          <button className={styles.FacebookButton}>F</button>
        </div>
        <div className={styles.Form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input placeholder="Correo electronico" {...register("email")} />
            </div>
            <div>
              <input
                placeholder="Contraseña"
                type="password"
                {...register("password")}
              />
            </div>
            <button type="submit">Ingresar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
