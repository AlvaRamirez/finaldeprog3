import GlobalStyle from '../constants/globalStyle';
import { Layout } from 'containers';
import { AuthProvider, useUser } from 'lib/useUser';
// import { Header } from 'components'

function MyApp({ Component, pageProps }) {
//     const userFunctions=useUser();
//    const user = userFunctions.getUser();
   
    return (
        <>
            <GlobalStyle />
            <AuthProvider>
                <Layout>
                  {/* <Header /> */}
                    <Component {...pageProps} />
                </Layout>
            </AuthProvider>
        </>
    )
}

export default MyApp


