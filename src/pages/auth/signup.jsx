import styles from "../../styles/Signin.module.css";
import Link from "next/link";
import Image from "next/image";
import LogoBlack from "../../../public/img/components/header/logo-black-aloha.svg";
import LogoGoogle from "../../../public/img/google.png";
import LogoFB from "../../../public/img/facebook.png";
import { useForm } from "react-hook-form";
import { deleteCookie } from "cookies-next";
import { createSubaccount, login } from "@/services/user.service";
import { useEffect } from "react";

function SignUpPage({ sessionId }) {
  const { register, handleSubmit } = useForm();
  useEffect(() => {
    deleteCookie("user_id");
    deleteCookie("session_id");
  }, []);
  const onSubmit = (data) =>
    createSubaccount({ ...data, session_id: sessionId });
  return (
    <div className={`${styles.section}`}>
      <Link href="/" className={styles.logo}>
        <Image src={LogoBlack} alt="Logo Aloha" />
      </Link>
      <div className={`${styles.content}`}>
        <h1 className={`${styles.title}`}>¡Bienvenido a Aloha!</h1>
        <p className={`${styles.description}`}>
          Crea tu cuenta y libera todas las opciones de Aloha
        </p>
        <div className={`${styles.loginButtons}`}>
          <button className={`${styles.buttonGoogle}`}>
            <Image src={LogoGoogle} quality={100} alt="Sign up with Google" />
            <span className={`${styles.ButtonSignUp__name} mx-2`}>
              Continuar con Google
            </span>
            <span>
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1016_36905)">
                  <path
                    d="M16.1963 9.99998L4.41115 9.99998"
                    stroke="white"
                    stroke-width="1.66667"
                  />
                  <path
                    d="M10.8945 4.69849L16.1978 10.0018L10.8945 15.3051"
                    stroke="white"
                    stroke-width="1.66667"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1016_36905">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0.304688)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </button>
          <button className={`${styles.buttonFacebook}`}>
            <Image src={LogoFB} alt="Sign up with Facebook" />
          </button>
        </div>
        <p className={`${styles.separador}`}>o registrate con tu correo</p>
        <form
          className={`${styles.formLogin}`}
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className={`${styles.formLabel}`}>Correo electrónico *</label>
          <input
            type="email"
            name="subaccount_email"
            id="subaccount_email"
            placeholder="Ingresa tu correo electrónico"
            className={`${styles.formInput}`}
            {...register("subaccount_email")}
          />
          <div className={`${styles.formContentLabels}`}>
            <label className={`${styles.formLabel}`}>Contraseña *</label>
          </div>
          <input
            type="password"
            name="subaccount_password"
            id="subaccount_password"
            placeholder="Ingresa tu contraseña"
            className={`${styles.formInput}`}
            {...register("subaccount_password")}
          />
          <input
            name="session_id"
            value={sessionId}
            {...register("session_id")}
            hidden
          />
          <button className={`${styles.buttonGoogle} my-3`}>
            <span className={`${styles.ButtonSignUp__name} mx-2`}>
              Ingresar
            </span>
            <span>
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1016_36905)">
                  <path
                    d="M16.1963 9.99998L4.41115 9.99998"
                    stroke="white"
                    stroke-width="1.66667"
                  />
                  <path
                    d="M10.8945 4.69849L16.1978 10.0018L10.8945 15.3051"
                    stroke="white"
                    stroke-width="1.66667"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1016_36905">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0.304688)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </button>
        </form>
        <p className={`${styles.registrate}`}>
          ¿Ya tienes una cuenta?{" "}
          <Link href="/signin">
            <span>Inicia sesión</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  try {
    const data = (await login()) || {};
    const sessionId = data.sessionid ?? "";
    return { props: { sessionId } };
  } catch (error) {
    return { props: {} };
  }
};

export default SignUpPage;
