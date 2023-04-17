import React from 'react'
import {products} from '../data.js';
import Product from '../components/Product'

const Home = () => {


  return (
    <div className='grid-container w-[90%]  xl:w-[75%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto pt-[2.5rem] pb-[3rem] gap-x-5 gap-y-8'>
      {
        products.map( (product)=> <Product key={product.id} product={product}/>)
      }
    </div>
  )
}

export default Home