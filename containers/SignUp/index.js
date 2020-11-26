import { SignUpForm } from 'components'
import Container from './styles';

const SignUp = () => {
    return (
        <Container>
               <section className="conton">
            <div className="coniniz">
                <div id="saludo">
            <img src="./assets/logo.png"></img>
           <h1 className="hola">Bienvenido!</h1>
           </div>
           </div>
           <div className="coninder">
               <h2>Registro</h2>
            <SignUpForm />
           
            <div className="irasing"> <p>¿Ya tienes cuenta? <a href="login">Ingresa</a></p> </div>
           
            </div>
            </section>
        </Container>
    )
}

export default SignUp