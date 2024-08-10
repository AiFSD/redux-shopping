import React from 'react'
import ProductCard from './ProductCard'
import './App.css'
import products from './Products'
const App = () => {
  return (
    <div className='con'>
      <div className="free">
          <h1>Enjoy Free Shipping with Our Top Brands </h1>
        </div>
      {
        products.map((product) =>(
         <ProductCard key={product.id} product={product}/>
        ))
      }
         
    </div>
  )
}

export default App