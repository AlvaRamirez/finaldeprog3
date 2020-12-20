import React, { useState, useEffect } from "react";
// import { Button } from 'react-bootstrap';
import { Card } from "react-bootstrap";
import { default as NextLink } from "next/link";
import { getUserById } from "../../pages/api/auth/get";

const Cards = ({ title, content, id, userId }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fn = async () => {
      const res = await getUserById(userId);

      setUser(res);
    };

    fn();
  }, []);

  console.log(user);
  return (
    <Card style={{ width: "37rem" }}>
      <Card.Body>
        <h1 style={{color: '#000'}}>{user?.nombre || ""}</h1>
        <Card.Title>{title}</Card.Title>
        <Card.Text> {content.substr(0, 180)}... </Card.Text>
        <NextLink href={`/contenido/${id}/`}>Leer</NextLink>
      </Card.Body>
    </Card>
  );
};

export default Cards;
