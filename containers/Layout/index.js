import { Main } from 'containers'

import { Footer } from 'containers'

const Layout = ({children}) => {
    return (
        <div>
            
            <Main>
                {children}
            </Main>
        <Footer />
        </div>
    )
}

export default Layout