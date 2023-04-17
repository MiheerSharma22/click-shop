import React from 'react'
import {MdDeleteForever} from "react-icons/md"
import { useDispatch, useSelector } from 'react-redux';
import {removeFromCart} from "../redux/Slices/CartSlice";

const CartItem = ({item , index}) => {
    
    const desc = item.description.split(" ").slice(0,15).join(" ");
    const {cart} = useSelector((state) => state);
    const dispatch = useDispatch();

    const removeItemFromCart= ()=> {
        dispatch(removeFromCart(item.id));
    }

  return (
    <div className=' w-full flex mt-[2.5rem] pb-[1.5rem] pl-[1rem] '>

        <div className={`${cart.length !== index+1 && 'border-b-2 border-gray-600 '} flex pb-[1.5rem] w-full cart-item-container`}>
            <div>
                <img src={item.image} className=' aspect-square w-[250px] mb-[1.5rem]' alt='product image'/>
            </div>

            {/* description-container */}
            <div className='ml-[3.5rem] mr-[1rem]'>
                <h2 className='text-xl text-slate-700 font-semibold'>{item.title}</h2>
                <p className='text-slate-700 mt-[1.5rem]'>{`${desc}...`}</p>

                <div className='mt-[1.5rem] flex justify-between items-center'>
                    <p className='text-green-600 font-bold text-lg'>{`$${item.price}`}</p>

                    <button className='p-[0.5rem] rounded-full bg-red-200 hover:bg-red-700 group transition-all duration-100' onClick={removeItemFromCart}>
                        <MdDeleteForever className='text-red-900 text-lg group-hover:text-white transition-all duration-100'/>
                    </button>
                </div>
            </div>
        </div>

    </div>
    
  )
}

export default CartItem