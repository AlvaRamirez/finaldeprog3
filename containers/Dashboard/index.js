import Container from './styles';
import { useProtected } from 'lib/useProtected';
import { PostsForm ,ListPosts} from 'components'
import { Header } from 'components'

const Dashboard = () => {
    const auth = useProtected();
    if (!auth.user) return null;
    return (
        <>
        <Header />
        <Container>
            <h2 className="mail">{auth.user.email}</h2>
            <PostsForm  userId={auth.user.id}/>
            <ListPosts  userId={auth.user.id}/>
        </Container>
        </>
    )
}

export default Dashboard