import Head from 'next/head'
import { Container as HeaderContainer } from './styled'

const Header = () => {
    return (
        <>
            <Head></Head>

            <HeaderContainer>
              
                   <div className="contnav">
                <img src="./assets/logo.png"></img>
                </div>

                <div className="contnav">
                <ul>
                    <li><img src="./assets/more.png"></img></li>
                    <li><img src="./assets/user.png"></img></li>
                    <li><img src="./assets/conf.png"></img></li>
                </ul>
                </div>

            </HeaderContainer>
        </>

    )
}
export default Header