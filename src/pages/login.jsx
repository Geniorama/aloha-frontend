import { loginAsUser } from "@/services/user.service";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { deleteCookie } from "cookies-next";

function Login() {
  const { register, handleSubmit } = useForm();
  useEffect(() => {
    deleteCookie("user_id");
    deleteCookie("session_id");
  }, []);
  const onSubmit = (data) => loginAsUser(data.email, data.password);
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Iniciar secion</h2>
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
        <button type="submit">Entrar</button>
      </form>
      <style jsx>{`
        .container {
          max-width: 400px;
          height: 100vh;
          margin: auto;
          display: flex;
          align-items: center;
        }
        form,
        input,
        button {
          width: 100%;
        }
        input,
        button {
          padding: 10px;
          border-radius: 5px;
          margin-bottom: 4px;
        }
      `}</style>
    </div>
  );
}

export default Login;
