import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {addToCart ,removeFromCart} from "../redux/Slices/CartSlice";

const Product = ( { product } ) => {
    const desc = product.description.split(" ").slice(0,10).join(" ");
    const {cart} = useSelector((state) => state);
    const dispatch = useDispatch();

    const addProductToCart = ()=> {
        dispatch(addToCart(product));
    }

    const removeProductFromCart= ()=> {
        dispatch(removeFromCart(product.id));
    }

  return (
    <div className='flex flex-col  justify-between items-center rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] hover:scale-105   pb-[0.75rem] pt-[1.5rem] gap-y-[1rem] bg-white transition-all duration-500 group'>
        {/* Product title */}
        <p className='text-slate-700 text-[1.1rem] font-semibold '>
            {`${product.title.substr(0,17)}...`}
        </p>

        {/* Product description trimmed */}
        <p className='text-[0.63rem] font-medium leading-relaxed  w-[65%] text-slate-400'>
            {`${desc}...`}
        </p>

        {/* Product Image */}
        <div className='h-[180px] mx-[1rem] align-baseline'>
            <img src={product.image} className='w-full h-full object-contain bg-transparent' alt='product image'/>
        </div>
        
        {/* price and add to cart button */}
        <div className='flex justify-between items-center w-[90%]'>
            <span className='text-green-600 font-semibold '>{`$${product.price}`}</span>
            
            {/* add to cart / remove from cart button */}
               { 
                    cart.includes(product) ? 
                        (<button className='border-2 border-gray-600 rounded-xl py-[0.2rem] px-[0.5rem] text-[0.8rem] font-semibold text-slate-600 my-[0.5rem] uppercase group-hover:bg-gray-600 group-hover:text-white transition-all duration-500' onClick={removeProductFromCart}>
                            Remove Item
                        </button>)
                    : 
                        (<button className='border-2 border-gray-600 rounded-xl py-[0.2rem] px-[0.5rem] text-[0.8rem] font-semibold text-slate-600 my-[0.5rem] uppercase group-hover:bg-gray-600 group-hover:text-white transition-all duration-500' onClick={addProductToCart}>
                            Add To Cart
                        </button>)
               }
            
        </div>
    </div>
  )
}

export default Product