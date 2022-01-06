import React from 'react'
import { GiShoppingCart } from 'react-icons/gi';
import 'bootstrap/dist/css/bootstrap.min.css';



const CartWidget = () => {
    return (
        <div className='p-3'>
           <a href="#" className='text-dark' ><GiShoppingCart />  4</a> 
        </div>
    )
}

export default CartWidget
