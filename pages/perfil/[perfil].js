import Cards from "../../components/Cards";
import { Header } from "components";
import Footer from "../../containers/Footer";
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
      <Header />
      <div id="divcont">
        <h1> Tus proyectos:</h1>
        <div className="cardcont">
          {cards?.map((card) => (
            <div style={{ display: "flex" }}>
              <Cards title={card.title} content={card.content} id={card.id} userId={card.user_id} />
              <div>
                <button onClick={(e) => onDelete(e, card.id)}>Eliminar</button>
              </div>
              <div>
                <NextLink
                  href={`/formulario/${card.id}-${card.title}-${card.excerpt}-${card.content}`}
                  data={"data"}
                >
                  Go to Contact
                </NextLink>
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
      <Footer />
    </>
  );
};

export default Home;
