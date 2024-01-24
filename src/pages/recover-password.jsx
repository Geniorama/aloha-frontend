import styles from "../styles/RecoverPassword.module.css";
import Link from "next/link";
import Image from "next/image";
import LogoBlack from "../../public/img/components/header/logo-black-aloha.svg";
import { useForm } from "react-hook-form";
import { loginAsUser } from "@/services/user.service";

export default function RecoverPasswordPage() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => loginAsUser(data.email, data.password);
  return (
    <div className={`${styles.section}`}>
      <Link href="/" className={styles.logo}>
        <Image unoptimized src={LogoBlack} alt="Logo Aloha" />
      </Link>
      <div className={`${styles.content}`}>
        <h1 className={`${styles.title}`}>¿Has olvidado tu contraseña?</h1>
        <p className={`${styles.description}`}>
          Introduzca su dirección de email abajo y le enviaremos un enlace para
          restaurar su contraseña.
        </p>
        <form
          className={`${styles.formLogin}`}
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className={`${styles.formLabel}`}>Correo electrónico *</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Ingresa tu correo electrónico"
            className={`${styles.formInput}`}
            {...register("email")}
          />
          <button className={`${styles.buttonGoogle} my-3`}>
            <span className={`${styles.ButtonSignUp__name} mx-2`}>
              Enviar enlace
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
      </div>
    </div>
  );
}
