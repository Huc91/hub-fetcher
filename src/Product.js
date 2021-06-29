import React from 'react';

//components
import Media from 'react-bootstrap/Media';

import JuicyRating from './JuicyRating';

const Product = (props) => {
  return (
  <Media>
    <img
      width={64}
      height={64}
      className="mr-3"
      src={props.img}
      alt="Generic placeholder"
    />
    <Media.Body>
      <h5>{ props.title }</h5>
      <JuicyRating />
    </Media.Body>
  </Media>
  )
}

export default Product;
