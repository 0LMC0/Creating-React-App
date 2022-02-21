import React from 'react'
import { useCartContext } from '../../Context/cartContext';
import { Container, Card} from 'react-bootstrap'
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
    
    const { nCantidad } = useCartContext();
        
 
        

    return (
        <div>
                <CartItem />
        </div>
            )
        }
            
export default Cart
