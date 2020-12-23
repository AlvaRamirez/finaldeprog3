import { LoginForm } from "components";
import Container from "./styles";
import { default as NextLink } from "next/link";

const Login = () => {
  return (
    <Container>
      <section className="conton">
        <div className="coniniz">
          <div id="saludo">
            <img src="./assets/logo.png"></img>
            <h1 className="hola">Hola de nuevo!</h1>
          </div>
        </div>

        <div className="coninder">
          <h2>Ingreso</h2>
          <LoginForm />
          <div className="irasing">
            {" "}
            <p>
              ¿No tienes cuenta? <NextLink href="/signup">Crea una</NextLink>
            </p>{" "}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Login;
