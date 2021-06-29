import React, { useState, useContext } from 'react';

//Context
import { MyHarvestContext } from './App';

//components
import Media from 'react-bootstrap/Media';
import Card from 'react-bootstrap/Card';

import JuicyRating from './JuicyRating';
import Button from 'react-bootstrap/Button';

const subtract = (startValue, howMuch) => {
  const endValue = startValue - howMuch;
  if(endValue <= 0) {
    return 0;
  }
  return endValue;
}

const Product = (props) => {

  const [quantity, setQuantity] = useState(props.quantity || 0)

  const {state, dispatch} = useContext(MyHarvestContext);

  const handleClick = () => {
    setQuantity(subtract(quantity, 1));
    if(quantity <= 0) {
      return;
    }
    dispatch({type: 'increment'});
  }

  return (
  <Card style={{ width: '14rem' }}>
  <Card.Img variant="top" src={props.img} />
  <Card.Body>
    <Card.Title>{ props.title }</Card.Title>
    <JuicyRating />
  </Card.Body>
  <Card.Text>
    { quantity }

  </Card.Text>
  <Button onClick={ () => handleClick() }>Harvest</Button>
  </Card>
  )
}

export default Product;
