import React from 'react'
import { BsCartX, BsCartCheck } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCartContext } from '../../Context/cartContext';
import { Link } from 'react-router-dom';


const CartWidget = () => {
    
    const { nCantidad } = useCartContext();

    return (
        <div className='p-3'>
               {nCantidad === 0 ? <p className='h3'> <BsCartX/></p> :<Link to="/cart"><p className='h3' ><BsCartCheck />  {nCantidad}</p></Link> }
        </div>
    )
}

export default CartWidget
