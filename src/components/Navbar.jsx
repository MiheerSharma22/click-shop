import React from 'react'
import logo from '../assets/logo-remove-bg.png'
import { Link, NavLink } from 'react-router-dom'
import {MdShoppingCart} from 'react-icons/md'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const {cart} = useSelector((state) => state);
  return (
    <div className='flex justify-center items-center bg-[rgb(15,23,42)]'>
        <div className='w-[90%] xl:w-[75%] flex justify-between pt-[0.3rem]'>
            <Link to="/">
                <button>
                    <img src={logo} className='w-[70px] aspect-square' alt='logo'/>
                </button>
            </Link>
            
            <div className='text-white flex justify-center items-center gap-5'>
                <NavLink to="/">
                    <p className='hover:text-orange-500 transition-all duration-200'>Home</p>
                </NavLink>

                <NavLink to="/cart">
                <div className='relative'>
                    <MdShoppingCart className='text-2xl hover:text-orange-500 transition-all duration-200'/>
                    {
                        cart.length > 0 && <span className='absolute top-[-13px] right-[-8px] text-sm font-semibold rounded-full bg-green-600 animate-bounce  w-[1.3rem] aspect-square grid place-items-center'>{cart.length}</span>
                    }
                </div>
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar