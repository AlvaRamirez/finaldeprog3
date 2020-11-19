import { LoginForm } from 'components'
import Container from './styles';

const Login = () => {
    return (
        <Container>
            <h1 className="tit"> Login</h1>
            <LoginForm />
        </Container>
    )
}

export default Login