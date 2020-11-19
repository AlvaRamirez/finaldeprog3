import Container from './styles';
import { useProtected } from 'lib/useProtected';
import { PostsForm ,ListPosts} from 'components'


const Dashboard = () => {

    //Para proteger una ruta
    const auth = useProtected();
    if (!auth.user) return null;

    return (
        <Container>
            <h2 className="mail">{auth.user.email}</h2>
            <PostsForm  userId={auth.user.id}/>
            <ListPosts  userId={auth.user.id}/>
        </Container>
    )
}

export default Dashboard