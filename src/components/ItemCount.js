import React, {useState} from 'react';

export default function ItemCount({stock,initial,onAddItem}){

    const [counter,setCounter] = useState(initial);

    function add(){  
        if(stock > counter){
            setCounter (counter + 1);
        }
    }

    function subs(){
        if(counter > 0){
            setCounter (counter - 1);
        }
    }

    function addToCart(){
        if(counter > 0 ){
            onAddItem(counter)
        }
        
    }

    return(
        <div className="product-addcart">
            <div className="product-counter">
                <button className='button' onClick={subs}>-</button>
                <div className="counter">
                    {counter}
                </div>
                <button className='button' onClick={add}>+</button>
            </div>
            <button className="button" onClick={addToCart}>Agregar al carrito</button>
        </div>

    );
}