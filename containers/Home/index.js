import Cards from '../../components/Cards'
import { Header } from 'components'

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
        </>
    )
}

export default Home