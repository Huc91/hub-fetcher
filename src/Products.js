import React from 'react'

//components
import Product from './Product';

const products = [
  {
    name: 'Apple',
    img: 'https://static.wikia.nocookie.net/animalcrossing/images/f/ff/NH-apple-icon.png'
  },
  {
    name: 'Orange',
    img: 'https://static.wikia.nocookie.net/animalcrossing/images/4/4f/NH-orange-icon.png'
  },
  {
    name: 'Cherry',
    img: 'https://static.wikia.nocookie.net/animalcrossing/images/b/bf/NH-cherry-icon.png'
  },
  {
    name: 'Peach',
    img: 'https://static.wikia.nocookie.net/animalcrossing/images/f/ff/NH-peach-icon.png'
  },
  {
    name: 'Pear',
    img: 'https://static.wikia.nocookie.net/animalcrossing/images/f/fe/NH-Pear-icon.png'
  }
]

const listProducts = products.map( (product, i ) => {
  return <Product key={product+i} title={product.name} img={product.img}/>
} );

function Products() {
  return (
    <div>
      <h2>
        Products
      </h2>
      <ul>
        {
          listProducts
        }
      </ul>
    </div>
  )
}

export default Products;
