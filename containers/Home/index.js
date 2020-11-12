import Cards from '../../components/Cards'

const Home = () => {
    return (
        <div id="divcont">
        
        <h1>Mira los ultimos proyectos</h1>
        <div className="cardcont">
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
            {/* <Basic /> */}
        </div>
        </div>
    )
}

export default Home