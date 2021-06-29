import React from 'react';

//components
import Media from 'react-bootstrap/Media';
import Card from 'react-bootstrap/Card';

import JuicyRating from './JuicyRating';

const Product = (props) => {
  return (
  <Card style={{ width: '14rem' }}>
  <Card.Img variant="top" src={props.img} />
  <Card.Body>
    <Card.Title>{ props.title }</Card.Title>
    <JuicyRating />
  </Card.Body>
  </Card>
  )
}

export default Product;
