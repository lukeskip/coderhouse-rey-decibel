import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { CartContext } from "../contexts/CartContext";

export default function  CartWidget(){
    const {cart} = useContext(CartContext);
    return(
        <div className="cart-widget">
           <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon> {cart.length}
        </div>
        
        
    );
}