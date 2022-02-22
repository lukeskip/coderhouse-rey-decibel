import {createContext, useEffect} from 'react';
import { useState } from 'react';

export const CartContext = createContext();

export default function CartContextProvider({children}){
    
    const [cart,setCart] = useState([]);
    const [total,setTotal] = useState(0);
    
    function addToCart (quantity, item){
         
        if(isOnCart(item.id)){
            const updateCart = cart;
        
            let product = updateCart.find(function(found){
                return found.id === item.id;
            });
            
            product.quantity += quantity; 

            setCart(updateCart);
        }else{
            setCart([...cart,{...item,quantity}]); 
        }
        
    }

    function emptyCart(){
        setCart([]);
    }

    function isOnCart (id){ 
        let result = cart.some((item)=> item.id === id);
        return result
    }

    function removeItem (id){ 
        
        let newCart = cart.filter(function(item){ 
            return item.id !== id; 
        });

        setCart(newCart);
       
    }


    useEffect(()=>{
        
        let add = 0;
        cart.map((item)=>{
            return add += item.price * item.quantity;
        })
        setTotal(add);
        console.log(cart);
    },[cart])
    return (
        <CartContext.Provider value={{cart,addToCart,emptyCart,total,removeItem}}>
            {children}
        </CartContext.Provider>
    )
}