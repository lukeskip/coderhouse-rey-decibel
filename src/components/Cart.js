import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";



export default function Cart(){
    const {cart,emptyCart,total,removeItem,handleUserName,handleLastName,handleEmail,handleConfirmEmail,onSubmit,orderId} = useContext(CartContext);
    
    if(orderId !== ''){
        return <>
                <h1>Esta es la confirmación de tu orden  <strong>{orderId}</strong></h1>
                si quieres volver a comprar da click aquí <a href="#" onClick={emptyCart}>Volver a comprar</a>
             </>
    }

    return(
        <div className="cart">
            
                
            {cart.length === 0 ? 
            <><h1>El carrito está vacío</h1> <Link to="/">Regresar al home</Link></>:
            (
                <>
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
                    <div>
                        <h2>Finalizar compra</h2>
                        <form action="" onSubmit={onSubmit}>
                            <div>
                                <label htmlFor="username">Nombre:</label>
                                <input onChange={handleUserName} type="text" id="username"/>
                            </div>
                            <div>
                                <label htmlFor="lastname">Apellido</label>
                                <input onChange={handleLastName} type="text" id="lastname"/>
                            </div>
                            <div>
                                <label htmlFor="email">Correo electrónico</label>
                                <input onChange={handleEmail} type="text" id="email"/>
                            </div>
                            <div>
                                <label htmlFor="email_confirmation">Confirmación de correo Electrónico</label>
                                <input onChange={handleConfirmEmail} type="text" id="email_confirmation"/>
                            </div>
                            <button className="button">Comprar</button>
                        </form>
                    </div>
                    
                </>
            )
            
            }
              
                    
                
                
                
            
        </div>
        
    )
}