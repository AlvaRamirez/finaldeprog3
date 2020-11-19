import Head from 'next/head'
import { Container as HeaderContainer } from './styled'

const Header = () => {
    return (
        <>
            <Head></Head>

            <HeaderContainer>
              
                   <div className="contnav">
               <a href="/"> <img src="./assets/logo.png"></img></a>
                </div>

                <div className="contnav">
                <ul>
                    <li> <a href="dashboard"><img  src="./assets/more.png"></img></a></li>
                    <li><a href="login" ><img src="./assets/user.png"></img></a></li>
                    <li><img  id="conf" src="./assets/conf.png"></img></li>
                </ul>
                </div>

            </HeaderContainer>
        </>

    )
}
export default Header