import GlobalStyle from '../constants/globalStyle';
import { Layout } from 'containers';
import { AuthProvider, useUser } from 'lib/useUser';
import { Header } from 'components'
import { Footer } from 'containers'

function MyApp({ Component, pageProps }) {
//     const userFunctions=useUser();
//    const user = userFunctions.getUser();
   
    return (
        <>
            <GlobalStyle />
            <AuthProvider>
                <Layout>
                <Header /> 
                    <Component {...pageProps} />
                    <Footer />
                </Layout>  
            </AuthProvider>
        </>
    )
}

export default MyApp


