import '../css/nav-bar.css';
import CartWidget from './CartWidget.js';
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from 'react-router-dom';



export default function   NavBar(){
   const {cart} = useContext(CartContext);

    return(
        <div className="main-menu">
            <Link to="/"><img className='logo' src={require("../img/logo.png")} alt="" /></Link>
            <ul>
            
                <li><Link to="/categoria/bajos"> Bajos</Link></li>
                <li><Link to="/categoria/guitarras">Guitarras</Link></li>
                <li><Link to="/categoria/pedales">Pedales</Link></li>
                {   
                    cart.length !== 0 ?
                    <li><Link to="/carrito"><CartWidget /></Link></li>:
                    null
                }
                
            </ul>
        </div>
        
        
    );
}