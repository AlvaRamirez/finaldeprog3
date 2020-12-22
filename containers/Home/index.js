import Cards from "../../components/Cards";
import { Header } from "components";
import Footer from "../Footer";
import React, { useState, useEffect } from "react";
import { getAllCards } from "../../pages/api/posts/cards";

const Home = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fn = async () => {
      const res = await getAllCards();

      setCards(res);
    };

    fn();
  }, []);

  return (
    <>
      <Header />
      <div id="divcont">
        <h1 id="titd">Ultimos proyectos</h1>
        <div className="cardcont">
          {cards.map((card) => (
            <Cards title={card.title} content={card.content} id={card.id} userId={card.user_id} />
          ))}

          
        </div>
        <div className="contuni">
            <a href="dashboard">
              <img src="./assets/plus.png"></img>
            </a>
          </div>
      </div>
      <div id="question">
        <div>
        <img id="comoes" src="./assets/question.png"/>
        </div>
        <div id="comoest">
        <p>En <strong>MaimoDesk</strong> podrás guardar y almacenar tus informes, aportes y escritos de la facultad, además de llevar un  control sobre ellos y poder editarlos.</p>
        <p>También podrás ver que suben los demas alumnos de la universidad, ¡animate a participar de la comunidad!</p>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
