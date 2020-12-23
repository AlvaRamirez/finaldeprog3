import Head from 'next/head'
import { Container as HeaderContainer } from './styled'
import { default as NextLink } from "next/link";

const Header2 = () => {

    return (
        <>
            <Head />

            <HeaderContainer>
              
                   <div>
               <NextLink className="flechusa" href="/"><p>🡰</p></NextLink>
                </div>
                
        
            </HeaderContainer>
        </>

    )
}
export default Header2