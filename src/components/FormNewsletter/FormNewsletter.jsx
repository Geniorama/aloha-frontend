import styles from "./FormNewsletter.module.css";
import ButtonLink from "../ButtonLink/ButtonLink";

export default function FormNewsletter() {
  return (
    <div>
      <form action="">
        <div className={`input-group ${styles.InputGroup}`}>
          <input
            type="text"
            placeholder="Escribe tu correo electrónico"
            className={`form-control ${styles.FormControl}`}
          />
          <ButtonLink
            type={"submit"}
            text={"Enviar"}
            size={"l"}
            color={"blue"}
          />
        </div>
      </form>
    </div>
  );
}
