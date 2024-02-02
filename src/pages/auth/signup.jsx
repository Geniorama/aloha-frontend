import styles from "../../styles/Signin.module.css";
import Link from "next/link";
import Image from "next/image";
import LogoBlack from "../../../public/img/components/header/logo-black-aloha.svg";
import LogoGoogle from "../../../public/img/google.png";
import LogoFB from "../../../public/img/facebook.png";
import { useForm } from "react-hook-form";
import { deleteCookie } from "cookies-next";
import { createSubaccount, login } from "@/services/user.service";
import { useEffect, useState } from "react";
import { saveContact } from "@/services/hubspot.service";
import Router from "next/router";
import { AlohaIcon } from "@/components/SvgImages/SvgImages";

function SignUpPage({ sessionId }) {
  const { register, handleSubmit } = useForm();
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    deleteCookie("user_id");
    deleteCookie("session_id");
  }, []);
  const onSubmit = async (data) => {
    try {
      const res = await createSubaccount({ ...data, session_id: sessionId });
      if (res.userid) {
        setSuccess(true)
        setTimeout(Router.push("/perfil"), 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(success);
  return (
    <div className={`${styles.section}`}>
      {success && (
        <div className={styles.popup}>
          <div className={styles.card}>
            <div
              style={{
                position: "absolute",
                textAlign: "right",
                width: "100%",
                top: "0",
                left: "0",
                padding: "10px",
              }}
            >
              <button role="button" style={{ background: "none" }}>
                <AlohaIcon icon={"close"} />
              </button>
            </div>
            {/* Icon check*/}
            <span style={{ display: "block", marginBottom: "1rem" }}>
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M32 58.2564C46.501 58.2564 58.2564 46.501 58.2564 32C58.2564 17.499 46.501 5.74359 32 5.74359C17.499 5.74359 5.74359 17.499 5.74359 32C5.74359 46.501 17.499 58.2564 32 58.2564ZM32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64Z"
                  fill="#43C478"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M50.4491 21.7572L45.9322 17.2402L25.5994 37.5538L17.5957 29.5502L13.0527 34.0612L25.5989 46.6074L50.4491 21.7572Z"
                  fill="#43C478"
                />
              </svg>
            </span>

            <h4>Tu registro fue exitoso</h4>
            <p>
              Tu suscripción ya se encuentra activa, ya puedes empezar a
              descargar
            </p>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                style={{ height: "50px" }}
                className={`${styles.buttonGoogle} my-3`}
              >
                <span className={`${styles.ButtonSignUp__name} mx-2`}>
                  Entendido
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
      <Link href="/" className={styles.logo}>
        <Image unoptimized src={LogoBlack} alt="Logo Aloha" />
      </Link>
      <div className={`${styles.content}`}>
        <h1 className={`${styles.title}`}>¡Bienvenido a Aloha!</h1>
        <p className={`${styles.description}`}>
          Crea tu cuenta y libera todas las opciones de Aloha
        </p>
        <div className={`${styles.loginButtons}`}>
          <button className={`${styles.buttonGoogle}`}>
            <Image
              unoptimized
              src={LogoGoogle}
              quality={100}
              alt="Sign up with Google"
            />
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
            <Image unoptimized src={LogoFB} alt="Sign up with Facebook" />
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
          <Link href="/auth/signin">
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
