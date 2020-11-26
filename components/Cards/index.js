import React from 'react'
// import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { default as NextLink } from 'next/link'

const Cards = ({title, content, id}) => {
  return (
<Card style={{ width: '37rem' }}>
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text> {content.substr(0, 80)}... </Card.Text>
    <NextLink href={`/contenido/${id}/`}>Leer</NextLink>
  </Card.Body>
</Card>
  )
}

export default Cards