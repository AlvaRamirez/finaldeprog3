import Container from './styles';
import { useProtected } from 'lib/useProtected';
import { PostsForm ,ListPosts} from 'components'
import { Header } from 'components'
import Footer from '../Footer'

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
        <Footer />
        </>
    )
}

export default Dashboard