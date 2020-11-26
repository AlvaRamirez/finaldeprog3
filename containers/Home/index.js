import Cards from '../../components/Cards'
import { Header } from 'components'
import Footer from '../Footer'


const Home = () => {
    return (
        <>
       <Header />
        <div id="divcont">
        
        <h1> Tus proyectos:</h1>
        <div className="cardcont">
      <div className="contuni"><a href="dashboard"><img  src="./assets/plus.png"></img></a></div>  

          {/* <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/> */}
            {/* <Basic /> */}
        </div>
        </div>
        <Footer />
        </>
    )
}

export default Home