import React from 'react'

//components
import JuicyRating from './JuicyRating';

const products = ['Oranges', 'Cherry', 'Apples', 'Avocado']

const listProducts = products.map( (product, i ) => {
  return <li key={product+i}>{product}</li>
} );

function Products() {
  return (
    <div>
      <h2>
        Products
      </h2>
      <JuicyRating rate={3}></JuicyRating>
      <ul>
        {
          listProducts
        }
      </ul>
    </div>
  )
}

export default Products;
