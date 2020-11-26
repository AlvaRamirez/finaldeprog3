import GlobalStyle from '../constants/globalStyle';
import { Layout } from 'containers';
import { AuthProvider, useUser } from 'lib/useUser';


function MyApp({ Component, pageProps }) {
//     const userFunctions=useUser();
//    const user = userFunctions.getUser();
   
    return (
        <>
            <GlobalStyle />
            <AuthProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </AuthProvider>
        </>
    )
}

export default MyApp


