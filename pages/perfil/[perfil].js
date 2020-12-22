import Cards from "../../components/Cards";
import { Header } from "components";
// import Footer from "../../containers/Footer";
import React, { useState, useEffect } from "react";
import { getCardByUser, deleteCardById } from "../../pages/api/posts/cards";
import { useRouter } from "next/router";
import { default as NextLink } from "next/link";

const Home = () => {
  const router = useRouter();
  const userId = router.query.perfil;

  const [cards, setCards] = useState([]);

  const onDelete = async (e, id) => {
    e.preventDefault();

    await deleteCardById(id);
  };

  useEffect(() => {
    const fn = async () => {
      const res = await getCardByUser(userId);
      setCards(res);
    };

    fn();
  }, [cards]);

  return (
    <>
      {/* <Header /> */}
      <div id="divcont">
        <h1> Tus proyectos:</h1>
        <div className="cardcont2">
          {cards?.map((card) => (
            <div style={{ display: "contents" }}>
              <Cards title={card.title} content={card.content} id={card.id} userId={card.user_id} />
              <div className="editaryeliminar">
              <div>
                <button id="nonebu" onClick={(e) => onDelete(e, card.id)}><img id="tic2"className="mod" src="../../assets/delete.png"/> </button>
              </div>
              <div>
                <NextLink
                  href={`/formulario/${card.id}-${card.title}-${card.excerpt}-${card.content}`}
                  data={"data"}
                >
                 <img className="mod" id="tic" src="../../assets/edit.png"/> 
                </NextLink>
              </div>
              </div>
            </div>
          ))}

          <div className="contuni">
            <a href="/dashboard">
              <img src="../../assets/plus.png"></img>
            </a>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
