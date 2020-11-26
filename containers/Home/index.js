import Cards from '../../components/Cards'
import { Header } from 'components'
import Footer from '../Footer'
import React, { useState, useEffect } from 'react';
import { getAllCards } from '../../pages/api/posts/cards';

const Home = () => {
    const[cards, setCards]=useState([]);

    useEffect(() => {
        const fn=async()=>{
            const res=await getAllCards();

            setCards(res);
        }

        fn();
    }, [])

    return (
        <>
       <Header />
        <div id="divcont">
        
        <h1> Tus proyectos:</h1>
        <div className="cardcont">
      <div className="contuni"><a href="dashboard"><img  src="./assets/plus.png"></img></a></div>  

        {cards.map(card=><Cards title={card.title} content={card.content} id={card.id}/>)}
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