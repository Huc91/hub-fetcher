import React from 'react'

//components
import Product from './Product';

const products = [
  {
    name: 'Apple',
    img: 'https://static.wikia.nocookie.net/animalcrossing/images/f/ff/NH-apple-icon.png',
    quantity: 27,
  },
  {
    name: 'Orange',
    img: 'https://static.wikia.nocookie.net/animalcrossing/images/4/4f/NH-orange-icon.png',
    quantity: 16,
  },
  {
    name: 'Cherry',
    img: 'https://static.wikia.nocookie.net/animalcrossing/images/b/bf/NH-cherry-icon.png',
    quantity: 2,
  },
  {
    name: 'Peach',
    img: 'https://static.wikia.nocookie.net/animalcrossing/images/f/ff/NH-peach-icon.png',
    quantity: 32,
  },
  {
    name: 'Pear',
    img: 'https://static.wikia.nocookie.net/animalcrossing/images/f/fe/NH-Pear-icon.png',
    quantity: 6,
  }
]

const listProducts = products.map( (product, i ) => {
  return (
    <Product
      key={product+i}
      title={product.name}
      img={product.img}
      quantity={product.quantity}
    />
  );
} );

function Products(props) {
  return (
    <div>
      <h2>
        { props.children}
      </h2>
        {
          listProducts.length > 0 && <ul>{ listProducts }</ul>
        }
        {
          listProducts.length <= 0 && <span>No fruit today</span>
        }
    </div>
  )
}

export default Products;
