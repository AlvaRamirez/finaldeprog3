import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getCard } from '../api/posts/cards'
import Footer from 'containers/Footer'
import Header2 from '../../components/Header2'

const Contenido = () => {
  const [data, setData] = useState({});
  const router = useRouter();
  useEffect(() => {
      
    const fn = async () => {
      const res = await getCard(router.query.contenido);

      setData(res);
    };

    fn();
  },[]);

  console.log(data);
  return<>
<Header2/>
  <div className="contcont">
      <div className="contcla">
          <div className="tituloss">
    <h1 className="titcont">{data?.title}</h1>
    <h2 className="titsub">{data?.excerpt}</h2>
    </div>
    <p className="titp">{data?.content}</p>
    </div>
    </div>
    <Footer />
  </>

  
};

export default Contenido;
