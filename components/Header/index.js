import Head from 'next/head'
import { Container as HeaderContainer } from './styled'
import { useUser } from 'lib/useUser';

const Header = () => {
    const auth = useUser();
    return (
        <>
            <Head />

            <HeaderContainer>
              
                   <div className="contnav">
               <a href="/"> <img src="./assets/logo.png"></img></a>
                </div>

                <div className="contnav">
                <ul>
                    {/* <li> <a href="dashboard"><img  src="./assets/more.png"></img></a></li> */}
                    <li><p>Usuario</p></li>
                    <li><img  onClick={() => auth.logout()} id="conf" src="./assets/logout.png"></img></li>
                </ul>
                </div>

            </HeaderContainer>
        </>

    )
}
export default Header