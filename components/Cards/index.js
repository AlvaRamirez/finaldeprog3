import React from 'react'
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

const Cards = () => {
  return (
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Ver</Button>
  </Card.Body>
</Card>
  )
}

export default Cards