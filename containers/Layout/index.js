import { Main } from 'containers'
import { Header } from 'components'
import { Footer } from 'containers'

const Layout = ({children}) => {
    return (
        <div>
            <Header />
            <Main>
                {children}
            </Main>
        <Footer />
        </div>
    )
}

export default Layout