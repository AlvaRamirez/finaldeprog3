import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getCard } from '../api/posts/cards'

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
    <h1>{data?.title}</h1>
    <h2>{data?.excerpt}</h2>
    <p>{data?.content}</p>
  </>
};

export default Contenido;
