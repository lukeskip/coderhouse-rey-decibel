import {createContext, useEffect} from 'react';
import { useState } from 'react';
import {collection,addDoc} from 'firebase/firestore';
import { db } from '../firebase-config';

export const CartContext = createContext();

export default function CartContextProvider({children}){
    
    const [cart,setCart] = useState([]);
    const [total,setTotal] = useState(0);
    const [totalItems,setTotalItems] = useState(0);
    const [userName,setUserName ] = useState('');
    const [lastName,setLastName ] = useState('');
    const [email,setEmail ] = useState('');
    const [confirmEmail,setConfirmEmail ] = useState('');
    const [orderId,setOrderId ] = useState('');
    const [ready,setReady ] = useState(true);

    
    const handleUserName        = event => setUserName(event.target.value);
    const handleLastName        = event => setLastName(event.target.value);
    const handleEmail           = event => setEmail(event.target.value);
    const handleConfirmEmail    = event => setConfirmEmail(event.target.value);
    
    
    function onSubmit(event){
        event.preventDefault();
        setReady(true);
        if(![userName,lastName,email].some(field => field==='')){
            if(email === confirmEmail){
                const itemCollection = collection(db,'orders');
                const newOrder = {userName,lastName,email,products:cart}
                addDoc(itemCollection,newOrder).then((response)=> {
                    setOrderId(response.id);
                });
            }else{
                alert("tu correo no coincide con su confirmación");
            }
            
        } 
    }

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
        
        let totalItemsAdd = cart.reduce((acc, item) => ( acc += parseFloat(item.quantity)), 0);
        setTotalItems (totalItemsAdd);

        setOrderId('');
              
    },[cart])

    useEffect(()=>{
        if(![userName,lastName,email,confirmEmail].some(field => field==='')){
            setReady(false);
        }else{
            setReady(true);
        }
    },[userName,lastName,email,confirmEmail]);


    return (
        <CartContext.Provider value={{cart,addToCart,emptyCart,total,removeItem,totalItems,handleUserName,handleLastName,handleEmail,handleConfirmEmail,onSubmit,orderId,ready}}>
            {children}
        </CartContext.Provider>
    )
}