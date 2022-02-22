import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";



export default function Cart(){
    const {cart,emptyCart,total,removeItem} = useContext(CartContext);
    
    return(
        <div className="cart">
            
                
            {cart.length === 0 ? 
            <><h1>El carrito está vacío</h1> <Link to="/">Regresar al home</Link></>:
            (
                <div>
                    <ul>
                    {
                    cart.map((item)=>{
                            return (
                                <li key={item.id}>
                                    {item.title} ({item.quantity}) <button className="button" onClick={() => removeItem(item.id)}>Quitar</button>
                                </li>
                            )
                        })
                    }
                    </ul>
                    <div>
                    Total: ${total}
                    <button className="button" onClick={emptyCart}>Vaciar Carrito </button>
                    </div>
                    
                </div>
            )
            
            }
              
                    
                
                
                
            
        </div>
        
    )
}