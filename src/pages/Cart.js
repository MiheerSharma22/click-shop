import React, { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((accumulator,currentValue) => (accumulator + currentValue.price) , 0))
  }, [cart]);

  return (
    <div className={`${cart.length > 0? 'h-fit' : 'h-[80vh]' }`}>
    {
      cart.length > 0 ? 
      // if the cart is not empty
      ( <div className='w-[90%] lg:w-[77%] flex flex-col md:flex-row md:justify-between justify-center items-center md:items-start mx-auto mb-[2rem] h-fit'>
          <div className='min-w-[300px] w-[80%] md:w-[55%] flex flex-col'>
              {
                cart.map((item,index) => <CartItem key={item.id} item = {item} index={index}/>)
              }
          </div>

              {/* right */}
              <div className=' mt-[2rem] lg:mt-0 pt-[5rem] min-w-[300px] w-[80%] lg:mx-0 lg:w-[40%] ml-[5rem] flex flex-col'>
                <p className='text-xl font-semibold text-green-700'>Your Cart</p>
                <h2 className='text-5xl text-green-700 font-semibold uppercase '>Summary</h2>
                <p className='text-slate-700 text-xl font-semibold mt-[1.5rem] flex items-center gap-2'>Total Items : <span className='text-black font-bold text-[1.6rem]'>{cart.length}</span></p>
                <p className='text-slate-700 text-xl font-semibold mt-[1.5rem] flex items-center gap-2'>Total Amount : <span className='text-black font-bold text-[1.2rem] md:text-[1.6rem]'>{`$${totalAmount}`}</span></p>

                <button className='bg-orange-500 w-[90%]    mt-[1.5rem] text-xl text-white font-semibold py-[1rem] rounded-lg hover:outline hover:outline-orange-500 hover:bg-white hover:text-orange-500 transition-all duration-150'>Checkout Now</button>
              </div>
          
      </div>) 
      : 
      // if the cart is empty
      (
        <div className='w-full h-full flex flex-col items-center justify-center gap-3'>
          <h2 className='text-2xl font-semibold text-slate-700'>Hmm, Looks Like The Cart Is Empty</h2>
          <h2 className='text-xl text-slate-700 font-medium'>Wanna Add Something?</h2>
          <NavLink to='/'>
            <button className='bg-orange-500 text-white text-lg px-[0.75rem] py-[0.4rem] rounded-md hover:bg-orange-600 transition-al duration-200'>Shop Now</button>
          </NavLink>
      </div>
      )
    }
      
    </div>
  )
}

export default Cart